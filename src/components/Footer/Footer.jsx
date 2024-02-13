import React from 'react'
import Styles from "./Footer.module.css"
import image from "../../../public/arrow.png"

function Footer() {
    return (
        <div className={Styles.inputBoxContainer}>
            <textarea type="text" disabled={true} placeholder="Enter your text here....." name="message" />
            <img src={image} alt="submit-button" id={Styles.submitBtn} />
        </div>

    )
}

export default Footer