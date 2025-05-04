import { MinusCircle, PlusCircle } from "lucide-react";
import { AccordionItemProps } from "./types";

const AccordionItem = ({ index, title, isOpen, onClick, children }: AccordionItemProps) => {
  return (
    <div className="mb-4 border-b border-gray-800">
      <button
        className="w-full flex justify-between items-center py-4 px-6 border border-white bg-[#191919] text-foreground rounded-lg hover:bg-[#212121] transition-colors focus:outline-none cursor-pointer"
        onClick={() => onClick(index)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        id={`accordion-header-${index}`}
      >
        <span className="text-xl font-semibold flex items-center">
          <span className="text-blue-400 mr-2">{index}.</span>
          {title}
        </span>
        <span className="text-blue-400">
          {isOpen ? <MinusCircle /> : <PlusCircle />}
        </span>
      </button>

      <div
        id={`accordion-content-${index}`}
        role="region"
        aria-labelledby={`accordion-header-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-4 pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
