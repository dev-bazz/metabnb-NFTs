import { BrandLogo, Star, Heart, Wallet, BrandWhite, X, Setting, Facebook, Twitter, Instagran, OpenSea, MetaMask, MBToken, MetaMaskFox, Arrow, MobileOpen, MobileClose } from "./BrandSet";


const Icons = ({ name, ...rest }) => {
        switch (name) {
                case "brand":
                        return <BrandLogo {...rest} />;
                case "star":
                        return <Star />;
                case "heart":
                        return <Heart {...rest} />;
                case "brand-white":
                        return <BrandWhite />;
                case "arrow-up":
                        return <Arrow />;
                case "cross":
                        return <X />;
                case "settings":
                        return <Setting />;
                case "facebook":
                        return <Facebook />
                case "twitter":
                        return <Twitter />
                case "Instagram":
                        return <Instagran />
                case "wallet":
                        return <Wallet />
                case "open-sea":
                        return <OpenSea />
                case "meta-mask":
                        return <MetaMask />
                case "mb-token":
                        return <MBToken />
                case "meta-fox":
                        return <MetaMaskFox />
                case "mobile-open":
                        return   <MobileOpen />
                case "mobile-close":
                        return <MobileClose {...rest} />
                default:
                        return <span>No Icon Selected</span>;
        }
}
export default Icons
