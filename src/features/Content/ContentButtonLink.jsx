import { Link } from 'react-router-dom'

export default function ContentButtonLink({ to, children }) {
  return (
    <Link
      to={to}
      className={
        'text-purple m-1 w-50 cursor-pointer items-center rounded-[30px] border-0 bg-white px-8 py-3.5 text-center text-base no-underline hover:bg-indigo-400 hover:text-white'
      }
    >
      {children}
    </Link>
  )
}
