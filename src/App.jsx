//import { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

// components
import Nav from './components/Nav'

import { Spinner } from 'react-bootstrap'

export default function App() {
  const navigation = useNavigation()

  return (
    <>
      <Nav />
      {
        navigation.state === 'idle' ?
        <Outlet />
        :
        <div className='centered'>
          <Spinner animation='border' />
        </div>
        }
    </>
  )
}

