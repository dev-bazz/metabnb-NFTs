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
    DOMMethods.showModal(modal.current)
  }
  function handleClose() {
    DOMMethods.closeModal(modal.current)
  }

  return (
    <>
      <Router>

        <Nav />

        <Routes >

          <Route path='/' element={<Home />} />
          <Route path='NFTs' element={<Nft />} />

        </Routes>
        {/* <Dialog modal={modal} >
          <div className="modal__header">
            <h3>Connect Wallet</h3>
            <div className="close" onClick={() => handleClose()}>
              <Icons name={`cross`} />
            </div>
          </div>
          <div className="modal__body">
            <p>Choose your preferred wallet:</p>
            <LinkBTN name={`meta-fox`} text={`Metamask`} />
            <LinkBTN name={`wallet`} text={`WalletConnect`} />
          </div>
        </Dialog> */}
        <Footer />

      </Router>
    </>
  )
}

export default App
