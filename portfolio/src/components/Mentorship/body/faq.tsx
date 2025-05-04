'use client'
import { useState } from "react"
import AccordionItem from "@/components/common/Accordian"
import { accordianData } from "@/lib/accordianData"
import CircleStrokeText from "@/components/common/CircleStrokeText"

const FAQ: React.FC = () => {
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
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="px-4 sm:px-8 w-full">
        <h2 className="text-2xl text-center mb-10">
          <CircleStrokeText text="FAQ" textHeight="md:text-3xl" />
        </h2>

        <div className="space-y-2">
          {accordianData['faq'].map((item, index) => (
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
    </div>
  )
}

export default FAQ
