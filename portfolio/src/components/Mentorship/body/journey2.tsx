'use client'
import { useState } from "react"
import AccordionItem from "@/components/common/Accordian"
import CircleStrokeText from "@/components/common/CircleStrokeText"
import { accordianData } from "@/lib/accordianData"

const Journey2: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]))

  const handleToggle = (index: number) => {
    setOpenIndices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="px-4 sm:px-8 w-full">
        <h3 className="text-center mb-10 capitalize font-bold text-2xl">
          How the <CircleStrokeText text="1:1 Mentorship" textHeight="md:text-2xl" height={55} width={180} />{' '} fits your journey
        </h3>

        <div className="space-y-2">
          {accordianData['mentorhip'].map((item, index) => (
            <AccordionItem
              key={index}
              index={index + 1}
              title={item.title}
              isOpen={openIndices.has(index)}
              onClick={() => handleToggle(index)}
            >
              <p className="text-gray-300 text-lg">{item.description}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold capitalize">THIS IS MY GUARANTEE</h3>
        <div className="text-lg mx-auto max-w-1/3 mt-4">
          I&apos;ve seen the results from my mentorship program in
          just a few hours, some in a few days, and others in a
          month or two. I put my heart and soul into this to
          create the best possible personalized roadmap for you
          and only you. If you don&apos;t like anything, I&apos;m always
          happy to discuss your queries and concerns of course.
        </div>
      </div>
    </div>
  )
}

export default Journey2
