import Icons from "../../assets/icons/Icons";


export default function Footer() {
        return (
                <footer className="footer">
                        <div className="footer--wrapper container--global">
                                <div className="footer-group">
                                        <Icons name={`brand-white`} />
                                        <div className="lower">
                                                <div className="social">
                                                        <Icons name={`facebook`} />
                                                        <Icons name={`Instagram`} />
                                                        <Icons name={`twitter`} />
                                                </div>
                                                <p className="pp" > &#169;  2022 Metabnb</p>

                                        </div>
                                </div>
                                <div className="footer-group">
                                        <div className="footer-nav">
                                                <h6>Community</h6>
                                                <ul>
                                                        <li>NFT</li>
                                                        <li>Tokens</li>
                                                        <li>Landlords</li>
                                                        <li>Discord</li>
                                                </ul>
                                        </div>
                                        <div className="footer-nav">
                                                <h6>Places</h6>
                                                <ul>
                                                        <li>Castle</li>
                                                        <li>Farms</li>
                                                        <li>Beach</li>
                                                        <li>Learn more</li>
                                                </ul>
                                        </div>
                                        <div className="footer-nav">
                                                <h6>About us</h6>
                                                <ul>
                                                        <li>Road map</li>
                                                        <li>Creators</li>
                                                        <li>Career</li>
                                                        <li>Contact us</li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </footer>
        )
}
