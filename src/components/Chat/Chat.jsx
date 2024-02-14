import Styles from "./Chat.module.css"

function Chat({ content, username }) {

    const { author, message, time } = content

    return (
        <li className={`${Styles.recentMsg} ${author != username ? Styles.recentMsgNE : Styles.recentMsgE}`} >

            <p className={Styles.msgDT}> {time} <span className={Styles.userName}> ~ {author}</span></p>

            <div className={Styles.msgTContainer} >
                <p>{message}</p>
            </div>

            {username == author ? <span className={Styles.shapeRight} /> :
                <span className={Styles.shapeLeft} />}
        </li>)
}

export default Chat