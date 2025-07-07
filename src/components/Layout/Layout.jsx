import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../../features/Sidebar/Sidebar'
import { Suspense } from 'react'
import Modal from '../Modal/Modal'
import SettingsPanel from '../../features/SettingsPanel/SettingsPanel'

export default function Layout() {
  const location = useLocation
  return (
    <>
      <main>
        <Suspense
          key={location.pathname}
          fallback={<p className="text-black">Loading...</p>}
        >
          <SettingsPanel />
          <Header />
          <Sidebar />
          <Modal />
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
