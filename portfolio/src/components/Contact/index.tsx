'use server'

import Link from 'next/link'
import { MapPin, Send } from 'lucide-react'
import SocialIcon from '@/components/commmon/Icons'
import { DISCORD, INSTAGRAM, LINKEDIN, MAIL, TWITTER } from '@/constants/links'
import ContactForm from './Form'

const ContactPage = () => (
  <div className='min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8'>
    <div className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left side - Contact Information */}
        <div className='bg-[rgb(102,171,252,70%)] rounded-lg p-8 flex flex-col justify-between relative overflow-hidden'>
          <div>
            <h2 className='text-2xl font-bold mb-2'>Contact Information</h2>
            <p className='text-blue-100 mb-8'>Say something to start a live chat!</p>

            <div className='space-y-6'>
              <div className='flex items-center'>
                <span className='w-5 h-5 mr-4 text-foreground'>
                  <SocialIcon name={'linkedin'} />
                </span>
                <Link
                  href={LINKEDIN}
                  className='text-foreground hover:text-blue-200 transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {LINKEDIN}
                </Link>
              </div>

              <div className='flex items-center'>
                <span className='w-5 h-5 mr-4 text-foreground'>
                  <SocialIcon name={'mail'} />
                </span>
                <Link href={MAIL} className='text-foreground hover:text-blue-200 transition-colors'>
                  sanjay@recoderlive.com
                </Link>
              </div>

              <div className='flex items-center'>
                <MapPin className='w-6 h-6 mr-3 text-foreground' />
                <span>MQ, Sydney, Australia</span>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className='flex mt-12 space-x-4'>
            <Link
              href={TWITTER}
              className='bg-[#F6AF03] transition-colors p-3 rounded-full'
              aria-label='Twitter'
            >
              <span className='w-5 h-5'>
                <SocialIcon name='twitter' />
              </span>
            </Link>
            <Link
              href={INSTAGRAM}
              className='bg-[#F6AF03] transition-colors p-3 rounded-full'
              aria-label='Instagram'
            >
              <span className='w-5 h-5'>
                <SocialIcon name='instagram' />
              </span>
            </Link>
            <Link
              href={DISCORD}
              className='bg-[#F6AF03] transition-colors p-3 rounded-full'
              aria-label='Discord'
            >
              <span className='w-5 h-5'>
                <SocialIcon name='discord' />
              </span>
            </Link>
          </div>

          {/* Background design elements */}
          <div
            className='absolute bottom-0 right-0 bg-[rgb(255,255,255,20%)] rounded-full'
            style={{ width: '240px', height: '240px', transform: 'translate(30%, 30%)' }}
          />
          <div
            className='absolute bottom-25 right-0 bg-[rgb(255,249,249,20%)] rounded-full'
            style={{ width: '140px', height: '140px', transform: 'translate(-40%, 20%)' }}
          />
        </div>

        {/* Right side - Contact Form */}
        <ContactForm />
      </div>

      {/* Newsletter Subscription */}
      <div className='mt-16 flex justify-center'>
        <Link
          href='/newsletter'
          className='flex items-center justify-center bg-orange-500 hover:bg-orange-600 transition-colors text-foreground py-3 px-6 rounded-md space-x-2'
        >
          <span>Subscribe to Newsletter</span>
          <span className='bg-foreground text-orange-500 p-1 rounded-full'>
            <Send className='w-4 h-4' />
          </span>
        </Link>
      </div>
    </div>
  </div>
)

export default ContactPage
