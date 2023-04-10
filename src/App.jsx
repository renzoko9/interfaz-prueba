import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import './assets/app.css'
import MusicBar from './components/MusicBar'
import Body from './components/Body'

function App() {

  return (
    <div className='relative'>
      <Sidebar />
      <Body />
      <MusicBar />
    </div>
  )
}

export default App
