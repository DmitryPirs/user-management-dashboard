import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHeaderTitle } from '../components/Header/HeaderSlice'

export default function Notfound() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeaderTitle('Not Found'))
  }, [dispatch])
  return (
    <div>
      <h1 className="text-purple mb-6 text-4xl font-bold">Page Not Found</h1>
    </div>
  )
}
