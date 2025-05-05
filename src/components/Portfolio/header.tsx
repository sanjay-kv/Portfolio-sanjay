import { socialLinks } from '@/lib/socialLinks'
import SocialIcon from '@/components/common/Icons'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => (
  <div className='w-full bg-primary text-foreground py-8 md:py-12'>
    <div className='container mx-auto px-4 md:px-6 lg:px-8'>
      <div className='flex flex-col lg:flex-row gap-8 items-center'>
        {/* Left content */}
        <div className='lg:w-2/3 space-y-6'>
          <div className='inline-block bg-background text-foreground px-3 py-1 text-sm font-mono'>
            If we haven&apos;t met
          </div>

          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider'>
            HEY, IT&apos;S SANJAY VISWANATHAN HERE
          </h1>

          <div className='space-y-4 text-sm md:text-base'>
            <p>
              I am Sanjay K V, worked as a Software Engineer for 3 years. I am currently studying
              Masters in Data Science at the Macquarie University, Australia.
            </p>

            <p>
              I enjoy exploring and seeking/giving out knowledge on Data Science, gadgets and
              programming, more than that I love working in community and doing webinars on the
              topic of ML, AI, Data Science.
            </p>

            <p>
              I believe providing quality content to the right people at the right time🕡. I started
              Recode Hive website which will help you with updates on what&apos;s happening in the
              tech industry💻
            </p>
          </div>

          {/* Social Icons */}
          <div className='flex flex-wrap gap-3 pt-2'>
            {socialLinks.map((social, index) =>
              index > 4 ? null : (
                <Link
                  href={social.url}
                  key={social.name}
                  aria-label={`Visit our ${social.name} page`}
                  className={`
                transition-all duration-300 ease-in-out
                flex items-center justify-center
                w-6 h-6 sm:w-10 sm:h-10
                rounded-lg ${social.color} text-foreground
                hover:${social.color} hover:scale-110
                `}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <SocialIcon name={social.icon} />
                </Link>
              )
            )}
          </div>
        </div>

        {/* Right content - Profile Image */}
        <div className='hidden sm:flex lg:w-1/3 justify-center lg:justify-end'>
          <div className='relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80'>
            <Image
              src='/assets/sanjay-kv-profile.png'
              alt='Sanjay Viswanathan'
              fill
              className='object-cover'
              style={{ filter: 'drop-shadow(0 10px 8px rgba(15, 14, 14, 0.25))' }}
              priority
              sizes='(max-width: 768px) 12rem, (max-width: 1024px) 16rem, 20rem'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
