import React from 'react'
import Styles from "./Header.module.css"

function Header({ roomId }) {

    return (
        <div className={Styles.navbar}>
            <h4>{roomId?.substring(0, 2)}</h4>
            <p>{roomId}</p>
        </div>
    )
}

export default Header