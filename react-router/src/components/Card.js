import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

export default function Card() {
  const [userName, isUserName] = useState('')
  const { user } = useParams()

  useEffect(() => {
    isUserName(user)
  }, [user])

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: '80px' }}
    >
      <h3 className="ui header">{userName}</h3>
    </div>
  )
}
