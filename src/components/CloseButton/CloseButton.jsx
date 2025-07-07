export default function CloseButton({ handleCloseButton }) {
  return (
    <button
      className="absolute top-[28px] right-[10px] flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-2 text-base leading-none"
      onClick={() => handleCloseButton()}
    >
      <svg width="20" height="20" viewBox="0 0 20 20">
        <line x1="4" y1="4" x2="16" y2="16" stroke="black" strokeWidth="2" />
        <line x1="16" y1="4" x2="4" y2="16" stroke="black" strokeWidth="2" />
      </svg>
    </button>
  )
}
