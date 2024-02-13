import Styles from "./Main.module.css"
import image from "../../../public/arrow.png"

function Main() {

    return (
        <div className={Styles.mainContainer}>

            <div className={Styles.rightContainer}>

                {/* Navbar */}
                <div className={Styles.navbar}>
                    <h4>SN</h4>
                    <p >Sample Note</p>
                </div>

                {/* Mid Field */}
                <ul className={Styles.recentMsgContainer} >

                    {/* Sample Message 2 */}
                    <li className={Styles.recentMsg} >
                        <p className={Styles.msgDT}> 12:47 pm | 13 Feb <span className={Styles.userName}> ~ Abhishek</span></p>
                        <div className={Styles.msgTContainer} >
                            <p> It's just a sample note, click Create Notes button to create your own.</p>
                        </div>
                        <span className={Styles.shapeRight} />
                    </li>              


                </ul>

                {/* Input Box */}
                <div className={Styles.inputBoxContainer}>
                    <textarea type="text" disabled={true}
                        placeholder="Enter your text here....." name="message" />
                    <img src={image} alt="submit-button" id={Styles.submitBtn} />
                </div>
            </div>

        </div >
    )
}
export default Main;