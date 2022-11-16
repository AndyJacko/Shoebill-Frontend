import React, { useRef, useState } from "react";
import Modal from "react-modal";

const Register = ({ onRegister }) => {
  const [isOpen, setIsOpen] = useState(false);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const profilepicInputRef = useRef();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const RegisterHandler = async (e) => {
    e.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const email = emailInputRef.current.value;
    const profilepic = profilepicInputRef.current.value;

    if (
      !username ||
      !password ||
      !email ||
      username.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      return;
    }

    const newUser = {
      username,
      password,
      email,
    };

    if (profilepic && profilepic.trim() !== "") {
      newUser.profilepic = profilepic;
    }

    const response = await fetch(
      `${process.env.REACT_APP_REST_API}/createUser/`,
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data.token) {
      onRegister(data.user, data.token);
      toggleModal();
    }
  };

  return (
    <div className="">
      <div className="lsb-link" onClick={toggleModal}>
        <div className="lsb-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
          </svg>
        </div>
        Register
      </div>

      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel=""
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#00000066",
          },
          content: {
            position: "absolute",
            top: "120px",
            left: "400px",
            right: "400px",
            bottom: "0px",
            border: "0px solid #ccc",
            background: "rgba(255, 255, 255, 0.0)",
            overflow: "hidden",
            WebkitOverflowScrolling: "touch",
            borderRadius: "0px",
            outline: "none",
            padding: "0px",
          },
        }}>
        <div className="modal-close-button" onClick={toggleModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </div>

        <form className="specialheading3" onSubmit={RegisterHandler}>
          <h2>Shoebill Register</h2>
          <div>
            <div>
              <p>Username</p>
              <input
                className="bark-input"
                placeholder="Username"
                type="text"
                ref={usernameInputRef}
              />
            </div>

            <div>
              <p>Email</p>
              <input
                className="bark-input"
                placeholder="Email"
                type="email"
                ref={emailInputRef}
              />
            </div>

            <div>
              <p>Password</p>
              <input
                className="bark-input"
                placeholder="Password"
                type="password"
                ref={passwordInputRef}
              />
            </div>

            <div>
              <p>Custom Avatar URL</p>
              <input
                className="bark-input"
                placeholder="Custom Avatar URL"
                type="text"
                ref={profilepicInputRef}
              />
            </div>

            <br />
            <br />

            <button type="submit">Register</button>

            <br />
            <br />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Register;
