import Styles from "./Chat.module.css"

function Chat({ content, username }) {

    const { author, message } = content

    return (
        <li className={`${Styles.recentMsg} ${author != username ? Styles.recentMsgNE : Styles.recentMsgE}`} >

            <p className={Styles.msgDT}> 12:47 pm | 13 Feb <span className={Styles.userName}> ~ {author}</span></p>

            <div className={Styles.msgTContainer} >
                <p>{message}</p>
            </div>

            {username == author ? <span className={Styles.shapeRight} /> :
                <span className={Styles.shapeLeft} />}
        </li>)
}

export default Chat