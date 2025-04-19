import HighlightedText from "@/components/common/HighlightedText"

const RightColumn: React.FC = () => (
  <div className='text-foreground text-center w-full md:w-[45%] px-6 relative flex flex-col justify-start'>
    <h3 className='text-xl font-bold inline uppercase'>
      <HighlightedText tag='p' text="1:1 MENTORSHIP PROGRAM" />
    </h3>

    <span className="mt-8 text-lg">
      This is not just a 1:1 mentoring session. It&apos;s
      much, much more…
    </span>

    <span className="mt-8 text-lg">
      I will do a pre-assessment of where you are
      right now in your career, then we&apos;ll have the
      1:1 session, then I will do my analysis and
      research to develop a personalized roadmap for
      you and only you.
    </span>

    <span className="mt-8 text-lg">
      My sole purpose is to help you achieve your
      career ambitions in the fastest and most
      efficient way.
    </span>

    <div className="w-full">
      <button type="button" className='btn mt-8'>BOOK NOW</button>
    </div>
  </div>
)

export default RightColumn
