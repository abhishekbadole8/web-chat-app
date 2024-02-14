import { useState, useEffect, useRef } from "react"
import Styles from "./Main.module.css"
import Chat from "../Chat/Chat";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import getCustomDateAndTime from "../../utils/getCustomDateAndTime";

function Main({ socket, userDetails }) {

    const [currentMessage, setCurrentMessage] = useState("")
    const [messages, setMessages] = useState([])
    const chatContainerRef = useRef(null)

    const sendMessage = async () => {
        if (currentMessage === "") {
            return;
        }
        const messageData = {
            roomId: userDetails.roomId,
            author: userDetails.username,
            message: currentMessage,
            time: getCustomDateAndTime(new Date())
        }
        if (messageData) {
            await socket.emit('send_message', messageData);
            setMessages((message) => [...message, messageData])
            setCurrentMessage("")
        }
    }

    useEffect(() => {
        const handleIncomingMessage = (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        };

        if (socket && userDetails.roomId) {
            socket.emit('join_room', userDetails.roomId);
            socket.on("receive_message", handleIncomingMessage);
        }

        return () => {
            if (socket) {
                socket.off("receive_message", handleIncomingMessage);
            }
        };
    }, [socket, userDetails.roomId])

    const handleChange = (e) => {
        setCurrentMessage(e.target.value)
    }

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [messages])

    return (
        <div className={Styles.mainContainer}>

            <div className={Styles.rightContainer}>

                {/* Header */}
                <Header roomId={userDetails.roomId} />

                {/* Chat Body */}
                <ul className={Styles.recentMsgContainer} ref={chatContainerRef}>
                    {messages.map((message, index) => (
                        <Chat content={message} key={index} username={userDetails.username} />
                    ))}
                </ul>

                {/* Input Box */}
                <Footer sendMessage={sendMessage} handleChange={(e) => handleChange(e)} currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} />

            </div>

        </div >
    )
}
export default Main;