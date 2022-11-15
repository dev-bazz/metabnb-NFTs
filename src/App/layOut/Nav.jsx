import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icons from "../../assets/icons/Icons";

export default function Nav({ handleModal }) {
        const [clicked, setClicked] = useState(false)

        return (
                <nav className="nav">
                        <div className="container--global nav-container">
                                <Icons name='brand' className='nav__logo' />
                                <div className={clicked ? `nav-main active` : `nav-main `}>
                                        <Icons name={`mobile-close`} change={setClicked} />
                                        <ul className="nav-link__list" onClick={()=> setClicked(false)}  >
                                                <li><NavLink to='/'>Home </NavLink>  </li>
                                                <li><NavLink to='NFTs'>Place to Stay </NavLink>  </li>
                                                <li><NavLink to='NFTs'>NFTs </NavLink>  </li>
                                                <li><NavLink to='/'>Community </NavLink>  </li>
                                        </ul>
                                        <button className="btn" onClick={() => {
                                                setClicked(false)
                                                handleModal()
                                        }}> Connect Wallet</button>
                                </div>
                                <div className="mobile">
                                        <div className="menue" onClick={() => setClicked((prev) => !prev)}>
                                                <Icons name={`mobile-open`} />
                                        </div>
                                </div>
                        </div>
                </nav>
        )
}
