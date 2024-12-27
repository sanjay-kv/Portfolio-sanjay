
import { Testimonial } from "@/components/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#A4D2FB] h-2"></div>
      <div className=" flex items-center font-extrabold justify-between px-16 p-5">
        <div className=" font-Inter text-2xl">Sanjay Viswanathan</div>
        <button className="rounded-xl px-5 py-2 bg-[#2878F2] ">
          YOUR OPEN-SOURCE GUIDE
        </button>
      </div>
      <div className="flex bg-black flex-col items-center justify-center"> 
        <div className="flex items-center justify-center flex-col text-4xl  font-black tracking-widest pt-10 ">
          <div>GET YOUR NEXT OPEN-SOURCE CONTRIBUTION FASTER.</div>

          <svg
            width="712"
            height="24"
            viewBox="0 0 712 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.54095C73.6203 4.29653 222.985 0.855092 295.164 1.00472C474.726 1.30398 574.892 1.30397 711 6.39132C547.199 8.26166 254.214 9.0098 90.4129 15.2942C212.085 13.1246 464.857 14.546 585.203 16.2668C502.714 17.3141 383.104 16.0423 294.869 23"
              fill="black"
            />
            <path
              d="M1 6.54095C73.6203 4.29653 222.985 0.855092 295.164 1.00472C474.726 1.30398 574.892 1.30397 711 6.39132C547.199 8.26166 254.214 9.0098 90.4129 15.2942C212.085 13.1246 464.857 14.546 585.203 16.2668C502.714 17.3141 383.104 16.0423 294.869 23"
              stroke="#243CE6"
            />
          </svg>

          <div>MUCH FASTER.</div>
        </div>
        <div className="mt-10">
        1-1 MENTORSHIP, ULTIMATE DATA PORTFOLIO, ULTIMATE DATA ROADMAP, ULTIMATE PROJECT <br/>
        BUILDER, DATA STORYTELLING GUIDE, JOB SEEKER ACADEMY, MOST POPULAR EXCEL <br/>
        FUNCTIONS & FORMULAS, ULTIMATE RESUME TEMPLATE, AI JOB QUEST...<br/>
        </div>
        <div  className="flex items-center justify-center gap-10 w-[1223px] h-[306px] left-[106px] top-[470px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(40,120,242,0.6)_0%,_rgba(50,15,133,0)_100%)]">
            <button className="rounded-xl px-5 py-2 bg-[#2878F2] ">Kick start your open-source</button>
            <button className="rounded-xl px-5 py-2 bg-[#2878F2] ">1:1 MENTORSHIP</button>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <Image className="col-span-1 pt-10" src={"/me1.png"} width={1000} height={1000} alt=""/>
          <Image className="col-span-1 pr-10" src={"/skills.png"} width={1000} height={1000} alt=""/>
        </div>
        <div  className="flex text-5xl mt-10 font-black items-center justify-center gap-10 w-[1223px] h-[306px] left-[106px] top-[470px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(40,120,242,0.6)_0%,_rgba(50,15,133,0)_100%)]">
          WHAT OTHERS HAVE SAID
        </div>
        <Testimonial/>
      </div>
    </div>
  );
}
