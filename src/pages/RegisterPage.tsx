import { useState, type ChangeEvent, type FormEvent } from 'react'
import TextField from '../components/ui/TextField'
import {
  validateRegistration,
  type RegistrationData,
  type RegistrationErrors,
} from '../lib/validateRegistration'

type TouchedFields = Partial<Record<keyof RegistrationData, boolean>>

function RegisterPage() {
  const [form, setForm] = useState<RegistrationData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })
  const [touched, setTouched] = useState<TouchedFields>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const errors: RegistrationErrors = validateRegistration(form)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, checked, type } = event.target

    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setSuccessMessage('')
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const field = event.target.name as keyof RegistrationData
    setTouched((current) => ({ ...current, [field]: true }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length > 0) {
      setSuccessMessage('')
      return
    }

    setSuccessMessage(`Thanks, ${form.fullName.trim()}. You are registered.`)
  }

  function visibleError(field: keyof RegistrationData) {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  return (
    <main>
      <section className="profile-card">
        <h2>Register</h2>

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
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={visibleError('password')}
          />

          <TextField
            label="Confirm password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={form.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={visibleError('confirmPassword')}
          />

          <div className="field">
            <label className="check">
              <input
                name="acceptTerms"
                type="checkbox"
                checked={form.acceptTerms}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(visibleError('acceptTerms'))}
                aria-describedby={
                  visibleError('acceptTerms') ? 'acceptTerms-error' : undefined
                }
              />
              I accept the terms
            </label>
            {visibleError('acceptTerms') && (
              <p className="field-error" id="acceptTerms-error">
                {visibleError('acceptTerms')}
              </p>
            )}
          </div>

          <button type="submit">Register</button>

          {successMessage && <p role="status">{successMessage}</p>}
        </form>
      </section>
    </main>
  )
}

export default RegisterPage
