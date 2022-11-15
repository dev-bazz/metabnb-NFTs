import { useRef } from 'react'

import './App.css'
import Nav from './App/layOut/Nav'
import Footer from './App/layOut/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './App/pages/Home'

// import DOMMethods from './publicTools'
import Dialog from './App/component/Dialog'
import LinkBTN from './App/component/LinkBTN'
import Nft from './App/pages/Nft'

function App() {


  const modal = useRef();
  function handleModal() {
    modal.current.showModal()
  }
  function handleClose() {
    modal.current.close()
  }

  return (
    <>
      <Router>

        <Nav handleModal={handleModal} />

        <Routes >

          <Route path='/' element={<Home />} />
          <Route path='NFTs' element={<Nft />} />

        </Routes>

        <Dialog modal={modal} handleClose={handleClose} /> 
        
        <Footer />

      </Router>
    </>
  )
}

export default App
