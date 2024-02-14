import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import "./App.css"
import io from "socket.io-client";
import { useState, useEffect } from "react"
import JoinModal from "./components/JoinModal/JoinModal";


function App() {
  const socket = io.connect("https://webchat-application-production.up.railway.app/")

  const [isModal, setIsModal] = useState(true)
  const [userDetails, setUserDetails] = useState({}); // State to store room id

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem('userAuth')) ? JSON.parse(localStorage.getItem('userAuth')) : { username: "Sample", roomId: "Sample" });
  }, [isModal]);

  return (
    <div className="App">

      <Menu setIsModal={setIsModal} socket={socket} roomId={userDetails.roomId} />
      <Main socket={socket} userDetails={userDetails} />

      {isModal && <JoinModal setIsModal={setIsModal} socket={socket} />}

    </div>
  );

}

export default App
