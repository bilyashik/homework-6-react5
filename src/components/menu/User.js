import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserOneInfo } from '../../redux/actions'

function User({userInfo}) {

  const dispatch = useDispatch()

  const getOneUser = (event) => {
    dispatch(fetchUserOneInfo(event.target.value))
  }

  return (
    <ul>
      <li>name: {userInfo.name}</li>
      <li>email: {userInfo.email}</li>
      <li>
        <button value={userInfo.id} onClick={getOneUser} >get more</button>
      </li>
    </ul>
  )
}

export default User