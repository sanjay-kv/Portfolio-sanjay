'use server'
import React from 'react'
import UnderlineEffect from '@/components/common/UnderlineEffect'

const DataJourneyHeader: React.FC = () => (
  <header className='w-full text-foreground relative'>
    <div className='bg-[#A4D2FB] h-2'></div>
    {/* Grid background */}
    <div
      className='bg-header absolute inset-0 w-full h-full'
      style={{
        backgroundImage: `
           linear-gradient(to right, #1c1c1c 2px, transparent 2px),
           linear-gradient(to bottom, #1c1c1c 2px, transparent 2px)
         `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        zIndex: '-1',
      }}
    />

    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center'>
          START YOUR{' '}
          <span className='relative inline-block'>
            DATA JOURNEY
            <UnderlineEffect stroke='#2878F2' className='mix-blend-difference' />
          </span>
        </h1>

        <p className='text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 text-center'>
          Click on the BUTTONS to learn more
        </p>
      </div>
    </div>
  </header>
)

export default DataJourneyHeader
