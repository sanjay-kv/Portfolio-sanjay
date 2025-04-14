import { FormStatusProps } from './types'

export default function FormStatus({ status }: FormStatusProps) {
  if (status === 'idle') return null

  if (status === 'success') {
    return (
      <div className='bg-green-600/20 border border-green-500 text-green-300 px-4 py-3 rounded'>
        Your message has been sent successfully. We&apos;ll get back to you soon!
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className='bg-red-600/20 border border-red-500 text-red-300 px-4 py-3 rounded'>
        There was an error sending your message. Please try again later.
      </div>
    )
  }

  return null
}
