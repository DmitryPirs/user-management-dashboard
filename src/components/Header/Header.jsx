import { useState } from 'react'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import avatarImg from '../../assets/images/oliver.jpg'
import {
  setModalVisible,
  setModalText,
  setModalHeader,
} from '../Modal/ModalSlice'

export default function Header(props) {
  const [now, setNow] = useState(new Date())

  const dispatch = useDispatch()
  const title = useSelector(state => state.header.title)

  return (
    <div className="text-purple bg-main-background sticky top-0 z-100 flex h-22 w-[100%] items-center justify-end gap-3 py-2 pr-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-2px_rgba(0,0,0,0.06)]">
      <div className="font-header-title mr-auto ml-68 flex h-full items-center justify-center font-medium">
        <h2 className="text-3xl">{title}</h2>
      </div>
      <Button
        onClick={e => {
          e.preventDefault()

          dispatch(
            setModalHeader('Thank you for checking out this code example!'),
          )
          dispatch(
            setModalText(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non augue tempus, efficitur mauris blandit, interdum eros. Fusce eget consectetur quam. Quisque lacinia pharetra lectus ut feugiat. Nulla porttitor metus in neque lacinia vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur placerat ligula tempus, tincidunt libero et, accumsan lacus. Nullam a magna et nulla gravida euismod. Duis pulvinar turpis ac neque fermentum, id cursus tellus tristique. Vivamus vel nibh dui. Etiam pellentesque posuere turpis, sit amet tempor lacus. Proin eleifend velit augue, non blandit sapien fermentum at. Sed et lorem posuere, sodales tortor at, commodo orci. Suspendisse arcu felis, pharetra id felis at, egestas aliquam libero.',
            ),
          )
          dispatch(setModalVisible(true))
        }}
      >
        <img
          src={avatarImg}
          alt="Avatar"
          className="mr-2 h-6 w-6 rounded-full"
        />
        Profile
      </Button>
      <Button
        isActive
        onClick={e => {
          e.preventDefault()
          dispatch(
            setModalHeader('Thank you for checking out this code example!'),
          )
          dispatch(
            setModalText(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non augue tempus, efficitur mauris blandit, interdum eros. Fusce eget consectetur quam. Quisque lacinia pharetra lectus ut feugiat. Nulla porttitor metus in neque lacinia vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur placerat ligula tempus, tincidunt libero et, accumsan lacus. Nullam a magna et nulla gravida euismod. Duis pulvinar turpis ac neque fermentum, id cursus tellus tristique. Vivamus vel nibh dui. Etiam pellentesque posuere turpis, sit amet tempor lacus. Proin eleifend velit augue, non blandit sapien fermentum at. Sed et lorem posuere, sodales tortor at, commodo orci. Suspendisse arcu felis, pharetra id felis at, egestas aliquam libero.',
            ),
          )
          dispatch(setModalVisible(true))
        }}
      >
        Find project
      </Button>
    </div>
  )
}
