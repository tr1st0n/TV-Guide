import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import Title from './components/Title'





function App() {
 

  return (
    <>
      
    <div className='search-bar-container'>
      <Title />
      <SearchBar />
      
    </div>
    </>
  )
}

export default App
