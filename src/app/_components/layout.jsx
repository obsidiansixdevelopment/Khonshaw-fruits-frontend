"use client"

import store from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function LayoutTwo({children}) {
  return (
    <Provider store={store}>
      
      <link  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"  rel="stylesheet"/>
        <link  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"  rel="stylesheet"/>
      {children}
    </Provider>
  )
}
