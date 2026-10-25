
import { useState, type ChangeEvent, type FormEvent } from 'react'
import TextField from './ui/TextField'
import Button from './ui/Button'
import {
  validateSignup,
  type SignupValues,
  type SignupErrors,
} from '../lib/validateSignup'
import type { CampusEvent } from '../data/events'

type EventSignupFormProps = {
  event: CampusEvent
}

type TouchedFields = Partial<Record<keyof SignupValues, boolean>>

export default function EventSignupForm({ event }: EventSignupFormProps) {
  const [form, setForm] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  })
  const [touched, setTouched] = useState<TouchedFields>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [successMessage, setSuccessMessage] = useState('')

  const errors: SignupErrors = validateSignup(form, seatsLeft)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
    setSuccessMessage('')
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const field = event.target.name as keyof SignupValues
    setTouched((current) => ({ ...current, [field]: true }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length > 0) {
      setSuccessMessage('')
      return
    }

    const tickets = Number(form.tickets)
    setSeatsLeft((current) => current - tickets)
    setSuccessMessage(`Booked: ${tickets} for ${form.fullName.trim()}.`)
    setForm({ fullName: '', email: '', tickets: '1' })
    setTouched({})
    setSubmitAttempted(false)
  }

  function visibleError(field: keyof SignupValues) {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  return (
    <section>
      <h2>Sign up for this event</h2>
      <p>Seats left: {seatsLeft}</p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          autoComplete="name"
          value={form.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError('fullName')}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError('email')}
        />

        <TextField
          label="Tickets (1–4)"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={form.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError('tickets')}
        />

        <Button type="submit">Book tickets</Button>

        {successMessage && <p role="status">{successMessage}</p>}
      </form>
    </section>
  )
}
