import React from 'react'
import Styles from "./Chat.module.css"

function Chat() {
    return (
        <li className={Styles.recentMsg} >
            <p className={Styles.msgDT}> 12:47 pm | 13 Feb <span className={Styles.userName}> ~ Abhishek</span></p>

            <div className={Styles.msgTContainer} >
                <p> It's just a sample note, click Create Notes button to create your own.</p>
            </div>

            <span className={Styles.shapeRight} />
        </li>)
}

export default Chat