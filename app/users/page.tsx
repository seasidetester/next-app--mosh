import React from 'react'

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: number;
  website: string;
  company: Company;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/', {})
  const users: User[] = await res.json();

  console.log(JSON.stringify(users, null, 2))
  return (
    <div className="p-5">
      <h1 className='text-4xl font-bold text-center'>List of Users</h1>
      <ul className='grid gap-6 grid-cols-3 '>
        {users.map(user => {
          return (
          <li 
            className="card card-bordered shadow-xl" 
            key={user.id}>
              <div className="">
                <figure>
                  <img className='rounded-t-2xl'
                  src={`https://picsum.photos/id/${Math.round(Math.random() * 120)}/1920`} alt="" />
                </figure>
              </div>
              <div className="card-body">
                <span className='card-title font-bold'>{user.name}</span>
                <p>{user.username}</p>
                <p className='font-thin'>{user.address.street}</p>
                <p className='font-thin'>{user.address.suite}</p>
                <p className='font-thin'>{user.address.city}</p>
                <p className='font-thin'>{user.address.zipcode}</p>
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
              </div>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UsersPage