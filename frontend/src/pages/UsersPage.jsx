import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersAsync } from '../redux/reducers/users/users';

const UsersPage = () => {
    const dispatch = useDispatch();
    const { isLoading, users, errorMessage } = useSelector(state => state.users);
    useEffect(() => {
        dispatch(loadUsersAsync())
    }, [])
  return (
    <div>
        <h1>Wallet Listing</h1>
        {isLoading && <h3>Loading...</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}
        {users && Object.entries(users.items).map((item, user) => <h3 key={item[1].address}>{item[1].name} : {item[1].address}</h3>)}
        {/* {users && Object.keys(users.item).map((item, user) => (
            <h5 key ={user.address}>{user.name}</h5>

    ))} */}
    </div>
  )
}

export default UsersPage;