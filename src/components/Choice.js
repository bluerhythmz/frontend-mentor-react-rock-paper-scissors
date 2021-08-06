import React from 'react'

const Choice = ({img, background, name, handleClick, absolute}) => {
    const click = (name, img, background) => {
        handleClick(name, img, background)
    }

    return (
        <div className={`choice ${absolute}`} style={{background: background}} onClick={() =>click(name, img, background)}>
            <div className="choice__inner">
              <img src={img} alt="" />
          </div>
        </div>
    )
}

export default Choice
