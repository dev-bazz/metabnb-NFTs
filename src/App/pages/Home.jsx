import Icons from '../../assets/icons/Icons';
import heroImage from '../../assets/images/hero-image.webp';
import footerImage from '../../assets/images/footer-image.webp'
import NftCard from '../component/NtfCard';
import {homeNfts as imageNFTs} from '../../assets/images/imageNFTs';

export default function Home() {
        return (
                <main >
                        <section aria-label='Rent a place in Metaverse' className="hero container--global">
                                <div className="container--wrapper">
                                        <h1 className='hero--title'>Rent a <span> Place </span> away from<br /> <span> Home </span> in the <span> Metaverse</span></h1>
                                        <p className='hero--msg'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                                        <div className="hero--search">
                                                <input type={`text`} placeholder='Search for location' />
                                                <button className='btn'>Search</button>
                                        </div>
                                </div>
                                <div className="container--wrapper">
                                        <img src={heroImage} alt="a collections of NFTs displaye in an offset grid layout" srcset="" />
                                </div>
                        </section>
                        <section aria-label='brands' className="brands">
                                <div className="brands--wrapper container--global">
                                        <Icons name={`mb-token`} />
                                        <Icons name={`meta-mask`} />
                                        <Icons name={`open-sea`} />
                                </div>
                        </section>
                        <section aria-labelledby='inspiration' className='inspiration'>
                                <div className="inspiration--wrapper container--global">
                                        <h2 id='inspiration'>Inspiration for your next adventure</h2>
                                        <ul>
                                                {imageNFTs.map((nft, index) => <NftCard
                                                        image={nft.image}
                                                        title={nft.title}
                                                        alt={nft.alt}
                                                        availability={nft.availability}
                                                        distance={nft.distance}
                                                        cost={nft.cost}
                                                        key={index}
                                                />)}
                                        </ul>

                                </div>
                        </section>
                        <section aria-labelledby='Metabnb' className='meta-section'  >
                                <div className="meta-wrapper container--global">
                                        <div  className='info' >
                                                <div className="meta">
                                                        <h2 id='Metabnb'>Metabnb NFTs</h2>
                                                        <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                                                </div>
                                                <button>Learn more</button>
                                        </div>
                                        <div className="meta">
                                                <img src={footerImage} alt="Meta NFT" srcset="" />
                                        </div>
                                </div>
                        </section>
                </main>
        )
}
