import Content from '../features/Content/Content'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHeaderTitle } from '../components/Header/HeaderSlice'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeaderTitle('Home'))
  }, [dispatch])

  return (
    <div style={{ display: 'flex' }}>
      <Content>
        <h1 className="text-purple mb-6 text-4xl font-bold">
          Welcome to the User List Demo Project! 👋
        </h1>
        <p className="mb-4 leading-relaxed">
          This project is an interactive demo where you can explore how I work
          with user lists in a web application. Feel free to click around, try
          out the buttons, and see how different features are implemented!
        </p>

        <p className="mb-2 text-lg font-semibold">
          What You Can Do Here View a list of users
        </p>

        <p className="mb-2 text-lg font-semibold">Add, edit, or remove users</p>

        <p className="mb-6 text-lg font-semibold">
          See real-time updates as you interact with the list
        </p>

        <p className="leading-relaxed">
          Why This Project? I created this project to showcase my skills in
          building dynamic user interfaces and managing data. It’s a hands-on
          example of how to work with user lists, handle events, and update the
          UI in real time.
        </p>
      </Content>
    </div>
  )
}
