export default function TextInput(
  { labelText, onChange = () => {}, ...props },
  ref,
) {
  const { type, name, id, placeholder, value, variant = 'default' } = props
  let className = ''
  switch (variant) {
    case 'default':
      className = `w-[26rem] px-5 py-3 my-2 box-border border-2 border-purple rounded-lg text-sm text-purple bg-white transition-colors outline-none font-inherit resize-y`
      break
    case 'default-error':
      className = `w-[26rem] px-5 py-3 my-2 box-border border-2 border-red-600 rounded-lg text-sm text-red-600 bg-white transition-colors outline-none font-inherit resize-y`
      break
    case 'full':
      className = `w-full px-5 py-3 my-2 box-border border-2 border-purple rounded-lg text-sm text-purple bg-white transition-colors outline-none font-inherit resize-y`
      break
    default:
      break
  }

  return (
    <div>
      {labelText && (
        <label
          className="text-purple mb-0 block text-left text-sm font-semibold select-none"
          htmlFor={id}
        >
          {labelText}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  )
}
