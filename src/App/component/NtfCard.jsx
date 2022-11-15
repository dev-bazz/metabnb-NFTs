import { useState } from "react"
import Icons from "../../assets/icons/Icons.jsx"


export default function NftCard({ image, title, cost, availability, alt, distance }) {
const [checker, setChecker] = useState(false)
function handleCheck(){
        setChecker((prev)=> !prev);
        console.log(checker)
}

        return (
                <li className="NFT">
                        <article className=" NFT__card">
                                <div className="img--container">
                                        <Icons name={`heart`} className={checker?`heart--checked`:'heart'} checker={handleCheck} />
                                        <img src={image} alt={alt} srcset="" />
                                </div>
                                <div className="title">
                                        <p>{title}</p>
                                        <p>{cost}</p>
                                </div>
                                <div className="da">
                                        <p>{distance}</p>
                                        <p>{availability}</p>
                                </div>
                                <div className="rating">
                                        
                                        <Icons name={`star`} />
                                        <Icons name={`star`} />
                                        <Icons name={`star`} />
                                        <Icons name={`star`} />
                                        <Icons name={`star`} />
                                </div>
                        </article>
                </li>
        )
}
