import { FormInputProps } from './types'

export default function FormInput({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  inputMode,
  placeholder,
  isTextarea = false,
}: FormInputProps) {
  const commonProps = {
    id,
    name: id,
    value,
    onChange,
    className: `w-full bg-transparent border-b ${
      error ? 'border-red-400' : 'border-gray-600'
    } focus:border-[#1DA1F2] outline-none py-2 px-0 transition-colors`,
    placeholder,
  }

  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-foreground mb-1'>
        {label}
      </label>

      {isTextarea ? (
        <textarea
          {...commonProps}
          rows={1}
          className={`${commonProps.className} resize-none min-h-[55px]`}
        />
      ) : (
        <input {...commonProps} type={type} inputMode={inputMode} />
      )}

      {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
    </div>
  )
}
