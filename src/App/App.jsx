import Nav from "./layOut/Nav";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Nft from "./pages/Nft";
import { useRef } from "react";
import DOMMethods from "../publicTools";
import Dialog from "./component/Dialog";
import Icons from "../assets/icons/Icons";
import LinkBTN from "./component/LinkBTN";
import Footer from "./layOut/Footer";



export default function App() {

        const modal = useRef();
        function handleModal() {
                DOMMethods.showModal(modal.current)
        }
        function handleClose() {
                DOMMethods.closeModal(modal.current)
        }

        return (
                <>
                        <Nav handleModal={handleModal} />
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="NFTs" element={<Nft />} />
                        </Routes>
                        <Dialog modal={modal} >
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
                        </Dialog>
                        <Footer />
                </>
        )
}

