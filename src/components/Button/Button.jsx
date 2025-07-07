import { useState } from 'react'
export default function Button({
  tooltip,
  children,
  isActive,
  disabled,
  ...props
}) {
  const [visible, setVisible] = useState(false)
  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <button
        {...props}
        disabled={disabled}
        className={
          disabled
            ? 'text-purple border-purple m-1 mx-0.5 flex cursor-not-allowed items-center rounded-4xl border-2 bg-white px-8 py-3.5 text-center text-base no-underline opacity-50'
            : isActive
              ? 'bg-purple border-purple m-1 mx-0.5 flex cursor-pointer items-center rounded-4xl border-2 px-8 py-3.5 text-center text-base text-white no-underline'
              : 'text-purple border-purple hover:bg-purple m-1 mx-0.5 flex cursor-pointer items-center rounded-4xl border-2 bg-white px-8 py-3.5 text-center text-base no-underline hover:text-white'
        }
        onClick={props.onClick}
      >
        {children}
      </button>

      {visible && tooltip && (
        <div
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="${visible ? 'opacity-100' : 'opacity-0' pointer-events-none absolute top-[125%] left-1/2 z-[1000] -translate-x-1/2 rounded rounded-2xl bg-white p-1.5 p-3 text-sm whitespace-nowrap text-gray-800 transition-opacity duration-300"
        >
          {tooltip}
        </div>
      )}
    </div>
  )
}
