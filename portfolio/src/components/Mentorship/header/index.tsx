import LeftColumn from "./left";
import RightColumn from "./right";

const Header = () => {
  return (
    <section className='w-full text-foreground relative'>
      <div className='bg-[#A4D2FB] h-2'></div>
      <div className='bg-background text-foreground px-8 py-8 md:px-24 md:py-8 w-full flex flex-col md:flex-row min-h-screen'>
        <LeftColumn />  {/* 45% Width */}
        <RightColumn /> {/* 55% Width */}
      </div>
    </section>
  );
}

export default Header;
