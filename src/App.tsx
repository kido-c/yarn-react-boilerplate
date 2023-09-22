import Main from '@/pages/Main/Main'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const test = (text: any) => {
    console.log('test')
  }

  const camelCase = 'test'

  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  )
}

export default App
