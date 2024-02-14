import React from 'react'
import Styles from "./Footer.module.css"
import image from "../../../public/arrow.png"

function Footer({ sendMessage, handleChange, currentMessage }) {

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className={Styles.inputBoxContainer}>
            <textarea type="text" placeholder="Enter your text here....." name="message"  value={currentMessage} onChange={handleChange} onKeyDown={handleKeyPress} />
            <img src={image} alt="submit-button" id={Styles.submitBtn} onClick={() => sendMessage()} />
        </div>

    )
}

export default Footer