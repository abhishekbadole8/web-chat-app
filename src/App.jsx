import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import "./App.css"
import io from "socket.io-client";
import { useState, useEffect } from "react"
import JoinModal from "./components/JoinModal/JoinModal";

const socket = io.connect("http://localhost:3001")

function App() {
  const [isModal, setIsModal] = useState(false)
  const [username, setUsername] = useState("abhi")
  const [room, setRoom] = useState("myroom")

  

  return (
    <div className="App">

      <Menu setIsModal={setIsModal} />
      <Main />

      {isModal && <JoinModal setIsModal={setIsModal} />}

    </div>
  );

}

export default App
