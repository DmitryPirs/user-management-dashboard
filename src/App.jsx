import './App.css'
import { lazy } from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Layout from './components/Layout/Layout'
import { fetchData, createPost } from './hooks/functions'
import ErrorBoundary from './features/ErrorBoundary'
const Home = lazy(() => import('./pages/Home'))
const Users = lazy(() => import('./pages/Users'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'users', element: <Users /> },
      // {
      //   path: 'posts',
      //   element: <Posts />,
      //   action: createPost,
      //   errorElement: <ErrorBoundary />,
      // },
      // {
      //   path: 'newposts',
      //   element: <NewPosts />,
      //   loader: fetchData,
      //   errorElement: <ErrorBoundary />,
      // },
      // { path: 'user/:userId', element: <User /> },
      { path: '*', element: <Notfound /> },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
