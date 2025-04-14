import { SubjectSelectorProps } from './types'

export default function SubjectSelector({
  options,
  selectedSubject,
  onChange,
}: SubjectSelectorProps) {
  return (
    <div>
      <p className='text-sm font-medium text-foreground mb-3'>Select Subject?</p>
      <div className='flex flex-wrap gap-3'>
        {options.map((option) => (
          <button
            key={option}
            type='button'
            onClick={() => onChange(option)}
            className={`flex items-center rounded-full py-1 px-3 text-sm ${
              selectedSubject === option
                ? 'bg-blue-500 text-foreground'
                : 'bg-transparent text-gray-300 hover:bg-gray-800'
            } transition-colors`}
          >
            <span
              className={`w-3 h-3 rounded-full mr-2 ${selectedSubject === option ? 'bg-foreground' : 'bg-gray-500'}`}
            ></span>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
