import React from "react";
import Styles from "./Menu.module.css"

function Menu({ setIsModal }) {

    return (
        <div className={Styles.sidebarContainer}>

            <h3 className={Styles.title}>Web Chat</h3>

            <button className={Styles.startBtn} onClick={() => setIsModal(true)}>Start Chat</button>

            <div className={Styles.notesProfileContainer} >

                <div className={Styles.notesProfile} style={{ backgroundColor: "#F7ECDC" }}>
                    <h5 style={{ backgroundColor: "blue" }} className={Styles.profileInitial}>Ab</h5>
                    <p className={Styles.profileRole}>Friends</p>
                </div>


            </div>
        </div >
    )
}
export default Menu;