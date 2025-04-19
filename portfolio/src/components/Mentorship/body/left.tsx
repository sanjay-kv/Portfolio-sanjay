import Image from "next/image"

const LeftColumn: React.FC = () => (
  <div className='w-full md:w-[55%] flex flex-col justify-start items-center'>
    <Image
      src="/assets/sanjay.png"
      alt="Sanjay KV"
      width={500}
      height={500}
      className="mx-auto"
    />
  </div>
)

export default LeftColumn
