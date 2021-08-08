import rulesImg from '../images/image-rules.svg'
import close from '../images/icon-close.svg'

const RulesModal = ({clicked, handleModal}) => {
    return (
        <div className="modal" style={{display: clicked ? "block" : "none"}}>
            <div className="modal__content" >
            <h1 className="modal__text">Rules</h1>
            <img src={rulesImg} alt="" className="modal__img" />
            <img src={close} alt="" className="modal__close" onClick={handleModal} />
        </div>
        </div>
        
    )
}

export default RulesModal
