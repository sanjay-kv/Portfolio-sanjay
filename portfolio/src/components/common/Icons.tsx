import Image from 'next/image'
import { memo } from 'react'

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'youtube':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
        </svg>
      )
    case 'linkedin':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
        </svg>
      )
    case 'github':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
        </svg>
      )
    case 'mail':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z' />
        </svg>
      )
    case 'pinterest':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z' />
        </svg>
      )
    case 'twitter':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
        </svg>
      )
    case 'wordpress':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19.275c-3.483-.174-6.057-2.742-6.057-6.275 0-2.422 1.197-4.574 3.041-5.948.283 1.936 1.459 3.881 3.175 5.124-2.351.261-3.739-.472-3.739-.472s2.873 3.002 6.418 1.584c-1.962-1.392-2.29-4.19-2.29-4.19s-.063-.097-.169-.077c-.75.143-1.361.243-1.847.251 1.531-1.11 3.432-1.781 5.479-1.781.782 0 1.539.097 2.261.285-2.423 2.226-4.499 3.273-6.658 5.132.749-1.673-.83-3.153-1.989-3.939.431.52.9 1.922 1.078 2.923.157.883.229 2.189-.468 2.77.803.56 2.422 1.088 2.829-1.142.432-2.346-.767-3.086-1.3-4.344-.3-.707.237-1.739.935-1.994-.87-.936-1.825-1.464-2.837-1.472-1.033-.008-1.826.541-2.246 1.341-.476.912-.46 4.148-.442 4.383.154 1.95 1.927 4.003 3.634 4.646l-.064.026c-4.086-.888-7.13-4.511-7.13-8.826 0-4.971 4.029-9 9-9s9 4.029 9 9c0 4.932-3.978 8.942-8.904 8.994z' />
        </svg>
      )
    case 'instagram':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
        </svg>
      )
    case 'discord':
      return (
        <Image
          src={'/assets/discord.svg'}
          className='w-5 h-5 sm:w-6 sm:h-6'
          height='20'
          width='20'
          alt='Discord'
        />
      )
    case 'email-outline':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5 sm:w-6 sm:h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
          />
        </svg>
      )
    case 'explore-outline':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5 sm:w-6 sm:h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
          />
        </svg>
      )
    case 'linkedin-outline':
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
        >
          <path
            d='M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z'
            stroke='#D8D8D4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M6 9H2V21H6V9Z'
            stroke='#D8D8D4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z'
            stroke='#D8D8D4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      )
    case 'github-outline':
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
        >
          <path
            d='M14.9998 22V18C15.1389 16.7473 14.7797 15.4901 13.9998 14.5C16.9998 14.5 19.9998 12.5 19.9998 9C20.0798 7.75 19.7298 6.52 18.9998 5.5C19.2798 4.35 19.2798 3.15 18.9998 2C18.9998 2 17.9998 2 15.9998 3.5C13.3598 3 10.6398 3 7.99979 3.5C5.99979 2 4.99979 2 4.99979 2C4.69979 3.15 4.69979 4.35 4.99979 5.5C4.27167 6.51588 3.91827 7.75279 3.99979 9C3.99979 12.5 6.99979 14.5 9.99979 14.5C9.60979 14.99 9.31979 15.55 9.14979 16.15C8.97979 16.75 8.92979 17.38 8.99979 18V22'
            stroke='#D8D8D4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M9 18C4.49 20 4 16 2 16'
            stroke='#D8D8D4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      )
    case 'document-outline':
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 sm:w-6 sm:h-6'
        >
          <path
            d='M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z'
            stroke='#D8D8D4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20'
            stroke='#D8D8D4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M10 9H8'
            stroke='#D8D8D4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M16 13H8'
            stroke='#D8D8D4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M16 17H8'
            stroke='#D8D8D4'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      )
    default:
      return null
  }
}

export default memo(SocialIcon)
