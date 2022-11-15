import Icons from "../../assets/icons/Icons";
import LinkBTN from "./LinkBTN";


export default function Dialog({ modal, children , handleClose}) {
        return (
                <dialog className="modal" ref={modal}>
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
                </dialog>
        )
}
