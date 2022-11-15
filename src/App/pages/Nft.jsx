import Icons from "../../assets/icons/Icons";
import { allNFT } from "../../assets/images/imageNFTs";
import NftCard from "../component/NtfCard";

export default function Nft() {
        return (
                <main className="container--global nft-page">
                        <section className="top">
                                <ul className={`nav-list`}>
                                        <l1>Resturant</l1>
                                        <l1>Cottage</l1>
                                        <l1>Castle</l1>
                                        <l1>fantast city</l1>
                                        <l1>beach</l1>
                                        <l1>Carbins</l1>
                                        <l1>Off-grid</l1>
                                        <l1>Farm</l1>
                                </ul>
                                <select className="location-list location" name="location" id="">
                                        <option selected >All</option>
                                        <option value={`Resturant`}>Resturant</option>
                                        <option value={`Cottage`}>Cottage</option>
                                        <option value={`Castle`}>Castle</option>
                                        <option value={`Fantast city`}>fantast city</option>
                                        <option value={`beach`}>beach</option>
                                        <option value={`carbin`}>Carbins</option>
                                        <option value={`off-grid`}>Off-grid</option>
                                        <option value={`Farm`}>Farm</option>
                                </select>
                                <div className="location">
                                        <p>Location</p> <Icons name={`settings`} />
                                </div>
                        </section>
                        <section>
                                <ul className="nft-list">
                                        {allNFT.map((nft, index) => <NftCard
                                                image={nft.image}
                                                title={nft.title}
                                                alt={nft.alt}
                                                availability={nft.availability}
                                                distance={nft.distance}
                                                cost={nft.cost}
                                                key={index}
                                        />)}
                                </ul>
                        </section>
                </main>
        )
}
