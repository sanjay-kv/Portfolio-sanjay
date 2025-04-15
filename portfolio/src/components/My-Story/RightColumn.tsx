import Image from "next/image"
import HighlightedText from "../common/HighlightedText"

const RightColumn: React.FC = () => (
  <div className='w-full md:w-[55%] p-6 md:p-12 flex flex-col justify-start items-center'>
    <div className="justify-start sm:mt-20">
      <Image
        src="/assets/Sanjay-KV.png"
        alt="Sanjay KV"
        width={500}
        height={500}
        className="mx-auto transform rotateY-180"
        style={{ transform: 'rotateY(180deg)' }}
      />
    </div>
    <div className="text-center mt-12 text-lg" >
      <HighlightedText tag='h4' text="I'M HERE TO HELP YOU." className="bg-foreground text-background" />{' '}
      <div className="mt-4 leading-loose">I pack my heart and soul and <HighlightedText tag="p" text="everything I know" />{' '}
        about <br /> data analysis into my data <HighlightedText tag="p" text="solutions" />{' '} in the form of   digital <br /> products/services to help you <HighlightedText tag="p" text="get your next job." />
      </div>
    </div>
    <div className="flex flex-col w-1/2 font-bold">
      <button type="button" className='btn mt-8'>GET YOUR DATA JOB</button>
      <button type="button" className='btn-secondary mt-8 uppercase'>BOOK A 1-1 SESSION</button>
    </div>
  </div>
)

export default RightColumn
