

export default function Dialog({modal, children}) {
        return (
                <dialog className="modal"  ref={modal}>
                                {children}
                        </dialog>
        )
}
