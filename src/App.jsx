import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import './assets/app.css'
import MusicBar from './components/MusicBar'

function App() {

  return (
    <div className='relative'>
      <Sidebar />
      <MusicBar />
    </div>
  )
}

export default App
