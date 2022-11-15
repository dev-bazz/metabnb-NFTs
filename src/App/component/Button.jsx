

export default function Button({ text, className , modal, fn}) {
        return (
                <button onClick={()=> fn.showModal(modal)} className={className} >{text}</button>
        )
}

Button.defaultProps = {
        text: 'click me',
        className :' btn'
}
