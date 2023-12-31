import React from 'react'

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: number;
  website: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/', {})
  const users: User[] = await res.json();

  console.log(JSON.stringify(users, null, 2))
  return (
    <div className="p-5">
      <h1 className='text-4xl font-bold text-center'>List of Users</h1>
      <ul className='grid gap-6 grid-cols-3'>
        {users.map(user => {
          return (
          <li 
            className="flex my-2 gap-3" 
            key={user.id}>
              <div className="">
                <picture>
                  <img className='w-20 rounded-full'
                  src={`https://picsum.photos/id/${Math.round(Math.random() * 120)}/200`} alt="" />
                </picture>
              </div>
              <div className="">
                <span className='text-2xl font-semibold'>{user.name}</span>
                <p>{user.username}</p>
                <p className='font-thin'>{user.address.street}</p>
                <p className='font-thin'>{user.address.suite}</p>
                <p className='font-thin'>{user.address.city}</p>
                <p className='font-thin'>{user.address.zipcode}</p>
              </div>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UsersPage