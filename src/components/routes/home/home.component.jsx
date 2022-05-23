import React from 'react'
import Directory from '../../directory/directory.component'
import { Outlet } from 'react-router-dom'

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'narrative',
      imageUrl:
        'https://images.unsplash.com/photo-1533031403683-9f53b30187bb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
    },
    {
      id: 2,
      title: 'creative',
      imageUrl:
        'https://images.unsplash.com/photo-1621763068543-ad5f9d62414d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
    },
    {
      id: 3,
      title: 'medical',
      imageUrl:
        'https://images.pexels.com/photos/1470170/pexels-photo-1470170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'nonfictional',
      imageUrl:
        'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'study',
      imageUrl:
        'https://images.unsplash.com/photo-1598301257942-e6bde1d2149b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
    },
  ]
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  )
}

export default Home
