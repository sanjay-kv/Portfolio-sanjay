import Image from 'next/image'

const LeftColumn: React.FC = () => (
  <div className='w-full md:w-[55%] flex flex-col justify-start items-center'>
    <Image src='/assets/sanjay.png' alt='Sanjay KV' width={500} height={500} className='mx-auto'
      style={{ filter: 'drop-shadow(0 10px 8px rgba(249, 246, 246, 0.25))' }}
    />
  </div>
)

export default LeftColumn
