import { describe, expect, it } from 'vitest'
import { validateRegistration, type RegistrationData } from './validateRegistration'

const validData: RegistrationData = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  password: 'almaty2026',
  confirmPassword: 'almaty2026',
  acceptTerms: true,
}

describe('validateRegistration', () => {
  it('returns no errors for valid data', () => {
    expect(validateRegistration(validData)).toEqual({})
  })

  it('requires a full name', () => {
    expect(validateRegistration({ ...validData, fullName: ' ' })).toEqual({
      fullName: 'Enter your full name',
    })
  })

  it('validates email format', () => {
    expect(validateRegistration({ ...validData, email: 'aliya@example' })).toEqual({
      email: 'Enter a valid email, like name@example.com',
    })
  })

  it('accepts a password with at least 8 characters and a number', () => {
    expect(
      validateRegistration({
        ...validData,
        password: 'almaty26',
        confirmPassword: 'almaty26',
      }),
    ).toEqual({})
  })

  it('requires at least 8 password characters', () => {
    expect(
      validateRegistration({
        ...validData,
        password: 'almaty2',
        confirmPassword: 'almaty2',
      }),
    ).toEqual({ password: 'Use at least 8 characters' })
  })

  it('requires a number in the password', () => {
    expect(
      validateRegistration({
        ...validData,
        password: 'almatycity',
        confirmPassword: 'almatycity',
      }),
    ).toEqual({ password: 'Include at least one number' })
  })

  it('requires matching passwords', () => {
    expect(
      validateRegistration({ ...validData, confirmPassword: 'almaty2027' }),
    ).toEqual({ confirmPassword: 'Passwords do not match' })
  })

  it('requires accepting the terms', () => {
    expect(validateRegistration({ ...validData, acceptTerms: false })).toEqual({
      acceptTerms: 'Accept the terms to continue',
    })
  })
})
