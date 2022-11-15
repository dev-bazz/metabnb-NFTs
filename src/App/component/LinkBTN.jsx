import Icons from "../../assets/icons/Icons";

export default function LinkBTN({name, text}) {
        return (
                <div className="link-btn">
                        <div className="link-title">
                                <Icons name={name}/>
                                <p>{text}</p>
                        </div>
                        <Icons name='arrow-up' />
                </div>
        )
}
