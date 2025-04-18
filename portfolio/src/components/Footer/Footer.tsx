import Link from 'next/link'
import SocialIcon from '@/components/common/Icons'
import { socialLinks } from '@/lib/socialLinks'

const Footer = () => (
  <footer className='bg-header py-6 w-full'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap justify-center gap-4 sm:gap-6'>
        {socialLinks.map((social) => (
          <Link
            href={social.url}
            key={social.name}
            aria-label={`Visit our ${social.name} page`}
            className={`
          transition-all duration-300 ease-in-out
          flex items-center justify-center
          w-10 h-10 sm:w-12 sm:h-12
          rounded-lg ${social.color} text-foreground
          hover:${social.color} hover:scale-110
          `}
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon name={social.icon} />
          </Link>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
