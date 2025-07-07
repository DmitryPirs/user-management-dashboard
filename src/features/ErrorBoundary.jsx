import { useRouteError } from 'react-router-dom'

export default function ErrorBoundary() {
  const error = useRouteError()
  return (
    <>
      <h2>Something went wrong.</h2>
      <p>{error.message}</p>
    </>
  )
}
