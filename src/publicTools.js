class DOMMethods{
        static getElement(element){
                return document.querySelector(element);
        }
        static showModal(dialog){
                console.log('soo')
                dialog.showModal()
        }
        static closeModal(dialog){
                dialog.close()
        }
}

export default DOMMethods