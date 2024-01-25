import React from 'react'
import Header from './Header'

export default function Layout({children}) {
  return (
    <div className='layout-600'>
      <Header />
      {children}
    </div>
  )
}
