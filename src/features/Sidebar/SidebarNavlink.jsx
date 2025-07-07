import { NavLink } from 'react-router-dom'

export default function SidebarNavlink({ to, children, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        isActive
          ? 'bg-purple m-1 flex w-50 cursor-pointer items-center rounded-[30px] border-0 px-8 py-3.5 text-left text-sm text-white no-underline'
          : 'text-purple hover:bg-purple m-1 flex w-50 cursor-pointer items-center rounded-[30px] border-0 bg-white px-8 py-3.5 text-left text-sm no-underline hover:text-white'
      }
    >
      {children}
    </NavLink>
  )
}
