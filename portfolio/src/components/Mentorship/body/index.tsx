import Image from "next/image";
import LeftColumn from "./left";
import RightColumn from "./right";

const Body = () => {
  return (
    <div className="space-y-8 container mx-auto">
      <Image
        src="/assets/benefits.png"
        alt="Benefits"
        width={500}
        height={500}
        layout="responsive"
        className="mx-auto"
        draggable="false"
      />
      <Image
        src="/assets/benefits-2.png"
        alt="Benefits"
        width={500}
        height={500}
        layout="responsive"
        className="mx-auto"
        draggable="false"
      />
      <Image
        src="/assets/benefits-3.png"
        alt="Benefits"
        width={500}
        height={500}
        layout="responsive"
        className="mx-auto"
        draggable="false"
      />
      <div className='px-8 py-8 md:px-24 md:py-8 w-full flex flex-col md:flex-row min-h-screen space-y-12'>
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default Body;
