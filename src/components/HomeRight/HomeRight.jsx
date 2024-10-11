import React, { useEffect, useState } from 'react'
import SearchUser from './SearchUser'
import PopularUserCard from './PopularUserCard'
import { Card } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserAction } from '../../Redux/GetUser/getUser.action'
import { getAllUserReducer } from '../../Redux/GetUser/getUser.reducer'
const user1=[11,1,2,3,3]
const HomeRight = () => {
  const dispatch=useDispatch();
  const {userList}=useSelector(store=>store);
  //alternative for above
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    const fetchUsers = async () => {
      const action = await dispatch(getAllUserAction());
      if (action.payload) {
        setUsers(action.payload);  // Store the fetched users in local state
      }
    };
    fetchUsers();
},[])
  return (
    <div className='pr-5 '>
      <SearchUser />
      <Card className='' >
      <div className='flex justify-between items-center p-5'>
          <p className='font-semibold opacity-70'>all user registered</p>
          <p className='text-xs font-semibold opacity-95'>view all</p>
      </div>
      {/* <div className=''>
        {user.map((uid)=><PopularUserCard uid={uid} />)}
        
      </div> */}
      {users.length > 0 ? (
            users.map((user) => <PopularUserCard key={user.id} uid={user} />)
          ) : (
            <p>No users found</p>
          )}
      </Card>
    </div>
  )
}

export default HomeRight
