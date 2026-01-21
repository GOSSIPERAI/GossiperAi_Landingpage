/**
 * Authentication and App Links Utility
 * Manages redirects to the main application for authentication flows
 */

export const getAppAuthUrl = (page: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '/'
  const authPages: Record<string, string> = {
    signin: '/signin',
    signup: '/signup',
    login: '/login',
  }
  return `${baseUrl}${authPages[page] || '/'}`
}

/**
 * Get the signin page URL for the main application
 */
export const getSigninUrl = (): string => {
  return getAppAuthUrl('signin')
}

/**
 * Get the signup page URL for the main application
 */
export const getSignupUrl = (): string => {
  return getAppAuthUrl('signup')
}
