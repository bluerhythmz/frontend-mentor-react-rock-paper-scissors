import React from 'react'

const Choice = ({img, background, name, handleClick, absolute, gameOver}) => {
    const click = (name, img, background) => {
        handleClick(name, img, background)
    }

    return (
        <button disabled={gameOver} className={`choice ${absolute}`} style={{background: background}} onClick={() =>click(name, img, background)}>
            <div  className="choice__inner">
              <img src={img} alt="" className="choice__img" />
          </div>
        </button>
    )
}

export default Choice
