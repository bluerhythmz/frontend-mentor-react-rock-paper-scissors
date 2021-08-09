import rulesImg from '../images/image-rules.svg'
import close from '../images/icon-close.svg'
import { AnimatePresence, motion } from 'framer-motion'

const RulesModal = ({clicked, handleModal}) => {
    const background = {
        hidden: { opacity: 0},
        visible: { opacity: 1}
    }

    return (
        <AnimatePresence>
            {clicked && <motion.div 
            className="modal" 
            variants={background}
            initial="hidden"
            animate="visible"
            >
                <motion.div className="modal__content">
                    <h1 className="modal__text">Rules</h1>
                    <img src={rulesImg} alt="" className="modal__img" />
                    <img src={close} alt="" className="modal__close" onClick={handleModal} />
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    )
}

export default RulesModal
