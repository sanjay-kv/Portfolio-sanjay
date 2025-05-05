import Image from 'next/image'

const RightColumn: React.FC = () => (
  <div className='w-full md:w-[55%] p-6 md:p-12 flex flex-col justify-start items-center'>
    <div className='justify-start sm:mt-20'>
      <Image
        src='/assets/sanjay-kv-profile.png'
        alt='Sanjay KV'
        width={500}
        height={500}
        className='mx-auto'
        style={{ filter: 'drop-shadow(0 10px 8px rgba(249, 246, 246, 0.25))' }}
      />
    </div>
    <div className='flex flex-col w-1/2 font-bold'>
      <button type='button' className='btn mt-8 !bg-[#E65300]'>
        BOOK NOW
      </button>
    </div>
  </div>
)

export default RightColumn
