import React from 'react'

const Modal = ({ image }) => {
    return (
        <div className="modal">
            <img src={image} alt="modal" />
        </div>
    )
}

export default Modal
