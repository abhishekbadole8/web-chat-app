import Styles from "./Main.module.css"
import Chat from "../Chat/Chat";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Main() {

    return (
        <div className={Styles.mainContainer}>

            <div className={Styles.rightContainer}>

                {/* Header */}
                <Header />

                {/* Chat Body */}
                <ul className={Styles.recentMsgContainer} >
                    <Chat />
                </ul>

                {/* Input Box */}
                <Footer />

            </div>

        </div >
    )
}
export default Main;