import React from 'react'
import Styles from "./Header.module.css"

function Header() {
    return (
        <div className={Styles.navbar}>
            <h4>SN</h4>
            <p >Sample Note</p>
        </div>
    )
}

export default Header