import SidebarNavlink from './SidebarNavlink'

import { FaCog, FaHome, FaUserAlt } from 'react-icons/fa'
// import styles from "./Sidebar.module.css";
export default function Sidebar() {
  return (
    <div className="text-purple fixed top-0 left-0 z-200 m-5 flex h-screen w-56 flex-col items-center rounded-lg bg-white p-2.5">
      <h2 className="mt-4 mb-2">Dashboard</h2>
      <SidebarNavlink to="/" end>
        <FaHome className="mr-2" />
        Home
      </SidebarNavlink>
      <SidebarNavlink to="/users" end>
        <FaUserAlt className="mr-2" />
        Users
      </SidebarNavlink>
    </div>
  )
}
