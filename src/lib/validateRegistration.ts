export type RegistrationData = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

export type RegistrationErrors = Partial<
  Record<keyof RegistrationData, string>
>

export function validateRegistration(
  data: RegistrationData,
): RegistrationErrors {
  const errors: RegistrationErrors = {}

  if (data.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email, like name@example.com'
  }

  if (data.password.length < 8) {
    errors.password = 'Use at least 8 characters'
  } else if (!/\d/.test(data.password)) {
    errors.password = 'Include at least one number'
  }

  if (data.confirmPassword !== data.password) {
    errors.confirmPassword = 'Passwords do not match'
  }

  if (!data.acceptTerms) {
    errors.acceptTerms = 'Accept the terms to continue'
  }

  return errors
}
