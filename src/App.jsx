import { useState } from 'react'

import './App.css'
import Nav from './App/layOut/Nav'
import Footer from './App/layOut/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './App/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Nav />

        <Routes >

          <Route path='/' element={<Home />} />

        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
