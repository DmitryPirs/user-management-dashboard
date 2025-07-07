import React from 'react'
import Button from '../../components/Button/Button'

function UserItem({ user, onSelect }) {
  return (
    <div className="relative mb-4 flex">
      <div className="block">
        <p className="font-semibold">{user.firstName}</p>
        <p>{user.email}</p>
      </div>
      <div className="absolute right-0 flex gap-4">
        <Button onClick={() => onSelect(user.id)}>Select</Button>
      </div>
    </div>
  )
}

export default React.memo(UserItem)
