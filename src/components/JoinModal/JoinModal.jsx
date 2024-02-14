import React, { useRef } from 'react'
import Styles from "./JoinModal.module.css"
import { useState } from "react"

function JoinModal({ setIsModal, socket }) {
  const modalRef = useRef()

  const [inputValue, setInputValue] = useState({ username: "", roomId: "" })
  const [errorMsg, setErrorMsg] = useState({ username: "", roomId: "" });

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValue((prevValue) => ({ ...prevValue, [name]: value }))
    setErrorMsg((prevError)=>({...prevError,[name]:""}))
  }

  const validateForm = (values) => {
    let errors = {};
    if (!values.username.trim()) {
      errors.username = "Username is required";
    }
    if (!values.roomId.trim()) {
      errors.roomId = "Room ID is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm(inputValue)
    if (Object.keys(errors).length === 0) {
      setIsModal(false)
      localStorage.setItem('userAuth', JSON.stringify(inputValue))
      socket.emit("join_room", inputValue.roomId);
    } else {
      setErrorMsg(errors)
    }
  }

  const outsideClick = (e) => {
    if (e.target == modalRef.current) {
      setIsModal(false)
      setInputValue({ username: "", roomId: "" })
      setErrorMsg({ username: "", roomId: "" });
    }
  }

  return (
    <div>
      <div id={Styles.myNav} className={Styles.overlay} ref={modalRef} onClick={outsideClick}>

        <div className={Styles.overlayBox}>
          <h4>Create Room</h4>

          <form onSubmit={handleSubmit}>

            {/* User Name */}
            <div className={Styles.groupName}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" value={inputValue.username} placeholder="Username..." onChange={handleChange} />
              {errorMsg.username && <p className={Styles.errorTag}>{errorMsg.username}</p>}
            </div>

            {/* Group Name */}
            <div className={Styles.groupName}>
              <label htmlFor="roomId">Room Id</label>
              <input type="text" name="roomId" value={inputValue.roomId} placeholder="Room Id..." onChange={handleChange} />
              {errorMsg.roomId && <p className={Styles.errorTag}>{errorMsg.roomId}</p>}
            </div>

            {/* Add Note button */}
            <div className={Styles.createNoteBtn}>
              <button type="submit">Create</button>
            </div>

          </form>

        </div>

      </div>
    </div>
  )
}

export default JoinModal