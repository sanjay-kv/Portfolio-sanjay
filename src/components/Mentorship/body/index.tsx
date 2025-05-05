import Image from 'next/image'
import LeftColumn from './left'
import RightColumn from './right'
import Journey from './journey'
import Journey2 from './journey2'
import FAQ from './faq'

const Body = () => {
  return (
    <div className='space-y-8 container mx-auto'>
      <Image
        src='/assets/mentorship-banner-1.png'
        alt='Benefits description'
        width={500}
        height={500}
        layout='responsive'
        className='mx-auto'
        draggable='false'
      />
      <Image
        src='/assets/mentorship-banner-2.png'
        alt='Stuggling?'
        width={500}
        height={500}
        layout='responsive'
        className='mx-auto'
        draggable='false'
      />
      <Image
        src='/assets/mentorship-banner-3.png'
        alt='Where mentorship help?'
        width={500}
        height={500}
        layout='responsive'
        className='mx-auto'
        draggable='false'
      />
      <Journey />
      <Image
        src='/assets/mentorship-banner-4.png'
        alt='Promised Benefits'
        width={500}
        height={500}
        layout='responsive'
        className='mx-auto'
        draggable='false'
      />
      <Journey2 />
      <div className='px-8 py-8 md:px-24 md:py-16 w-full flex flex-col md:flex-row min-h-screen space-y-12'>
        <LeftColumn />
        <RightColumn />
      </div>
      <FAQ />
    </div>
  )
}

export default Body
