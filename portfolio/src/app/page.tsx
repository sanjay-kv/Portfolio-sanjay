import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen w-full'>
      {/* Top blue line */}
      <div className='bg-[#A4D2FB] h-2'></div>

      {/* Header section */}
      <div className='bg-header flex items-center justify-between px-4 sm:px-8 md:px-16 py-5 flex-wrap gap-4'>
        <div className='text-xl sm:text-2xl font-extrabold'>Sanjay Viswanathan</div>
        <button className='btn'>YOUR OPEN-SOURCE GUIDE</button>
      </div>

      {/* Main content */}
      <div className='w-full flex bg-background flex-col items-center justify-center text-foreground'>
        {/* Hero headline */}
        <div className='flex items-center justify-center flex-col text-2xl sm:text-3xl md:text-4xl font-black tracking-widest pt-10 px-4 text-center'>
          <div>GET YOUR NEXT OPEN-SOURCE CONTRIBUTION FASTER.</div>

          <svg
            className='w-full max-w-[712px] h-auto my-2'
            viewBox='0 0 712 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMidYMid meet'
          >
            <path
              d='M1 6.54095C73.6203 4.29653 222.985 0.855092 295.164 1.00472C474.726 1.30398 574.892 1.30397 711 6.39132C547.199 8.26166 254.214 9.0098 90.4129 15.2942C212.085 13.1246 464.857 14.546 585.203 16.2668C502.714 17.3141 383.104 16.0423 294.869 23'
              fill='black'
            />
            <path
              d='M1 6.54095C73.6203 4.29653 222.985 0.855092 295.164 1.00472C474.726 1.30398 574.892 1.30397 711 6.39132C547.199 8.26166 254.214 9.0098 90.4129 15.2942C212.085 13.1246 464.857 14.546 585.203 16.2668C502.714 17.3141 383.104 16.0423 294.869 23'
              stroke='#243CE6'
            />
          </svg>

          <div>MUCH FASTER.</div>
        </div>

        {/* Features list */}
        <div className='mt-10 px-4 text-center text-sm sm:text-base'>
          <p className='max-w-4xl mx-auto'>
            1-1 MENTORSHIP, ULTIMATE DATA PORTFOLIO, ULTIMATE DATA ROADMAP, ULTIMATE PROJECT
            BUILDER, DATA STORYTELLING GUIDE, JOB SEEKER ACADEMY, MOST POPULAR EXCEL FUNCTIONS &
            FORMULAS, ULTIMATE RESUME TEMPLATE, AI JOB QUEST...
          </p>
        </div>

        {/* CTA section with gradient background */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 w-full max-w-[1223px] py-24 my-6 px-4 bg-radial'>
          <button className='btn'>Kick start your open-source</button>
          <button className='btn'>1:1 MENTORSHIP</button>
        </div>

        {/* Image grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full px-4 md:px-8 lg:px-16 max-w-7xl'>
          <div className='w-full pt-4 md:pt-10'>
            <Image
              className='w-full h-auto'
              src='/sanjay-viswanathan-hero.png'
              width={500}
              height={500}
              alt='Sanjay Viswanathan hero image'
              priority
            />
          </div>
          <div className='w-full pt-4 md:pt-10'>
            <Image
              className='w-full h-auto'
              src='/sanjay-viswanathan-skills.png'
              width={500}
              height={500}
              alt='Sanjay Viswanathan skills showcase'
            />
          </div>
        </div>

        {/* Testimonial heading */}
        <div className='flex text-3xl sm:text-4xl md:text-5xl mt-10 mb-6 font-black items-center justify-center w-full px-4 py-16 bg-radial text-center'>
          WHAT OTHERS HAVE SAID
        </div>

        {/* Testimonial component placeholder */}
        {/* <Testimonial/> */}
      </div>
    </div>
  )
}
