import CloseButton from '../CloseButton/CloseButton'
import { useSelector } from 'react-redux'
import { setModalVisible } from './ModalSlice'
import { useDispatch } from 'react-redux'
export default function Modal() {
  const dispatch = useDispatch()
  const modalVisible = useSelector(state => state.modal.visible)
  const modalHeader = useSelector(state => state.modal.header)
  const modalText = useSelector(state => state.modal.text)

  function handleCloseButton() {
    dispatch(setModalVisible(false))
  }

  if (!modalVisible) return null

  return (
    <>
      <div className="fixed inset-0 z-[490] bg-[rgba(0,0,0,0.5)]"></div>
      <div className="border-purple fixed top-1/2 left-1/2 z-[500] h-[20rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 bg-white p-6">
        <CloseButton handleCloseButton={handleCloseButton} />
        <h2 className="mb-2 font-bold">{modalHeader}</h2>
        <p className="text-justify">{modalText}</p>
      </div>
    </>
  )
}
