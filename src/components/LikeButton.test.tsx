import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { LikesProvider } from '../context/LikesContext'
import LikeButton from './LikeButton'

test('changes visible text after clicking LikeButton', async () => {
    const user = userEvent.setup()

    render(
        <LikesProvider>
            <LikeButton />
        </LikesProvider>,
    )

    const button = screen.getByRole('button', { name: /like/i })

    await user.click(button)

    expect(button).toHaveTextContent('Liked 1')
})