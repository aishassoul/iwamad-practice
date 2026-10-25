
import { describe, it, expect } from 'vitest'
import { validateSignup } from './validateSignup'

describe('validateSignup', () => {
  it('returns no errors for valid values', () => {
    expect(
      validateSignup(
        { fullName: 'Aisha Kuantay', email: 'aisha@example.com', tickets: '2' },
        10,
      ),
    ).toEqual({})
  })

  it('requires a full name', () => {
    expect(
      validateSignup(
        { fullName: ' ', email: 'aisha@example.com', tickets: '1' },
        10,
      ).fullName,
    ).toBe('Enter your full name')
  })

  it('validates email format', () => {
    expect(
      validateSignup(
        { fullName: 'Aisha', email: 'wrong-email', tickets: '1' },
        10,
      ).email,
    ).toBe('Enter a valid email, like name@example.com')
  })

  it('requires tickets from 1 to 4', () => {
    expect(
      validateSignup(
        { fullName: 'Aisha', email: 'aisha@example.com', tickets: '5' },
        10,
      ).tickets,
    ).toBe('Choose 1 to 4 tickets')
  })

  it('rejects more tickets than available seats', () => {
    expect(
      validateSignup(
        { fullName: 'Aisha', email: 'aisha@example.com', tickets: '3' },
        2,
      ).tickets,
    ).toBe('Only 2 seats left')
  })

  it('returns errors for multiple invalid fields', () => {
    const errors = validateSignup(
      { fullName: '', email: 'bad', tickets: '0' },
      10,
    )

    expect(errors.fullName).toBe('Enter your full name')
    expect(errors.email).toBe('Enter a valid email, like name@example.com')
    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })
})
