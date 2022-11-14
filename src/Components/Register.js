import React, { useRef, useState } from "react";
import Modal from "react-modal";

const Register = ({ onRegister }) => {
  const [isOpen, setIsOpen] = useState(false);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const customurlInputRef = useRef();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const RegisterHandler = async (e) => {
    e.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const email = emailInputRef.current.value;
    const customurl = customurlInputRef.current.value;

    if (
      !username ||
      !password ||
      !email ||
      !customurl ||
      username.trim() === "" ||
      password.trim() === "" ||
      email.trim() === "" ||
      customurl.trim() === "" 
    ) {
      return;
    }

    const response = await fetch(
      `https://cnmaster-shoebill.herokuapp.com/createUser/`,
      {
        method: "POST",
        body: JSON.stringify({ username, password, email, customurl }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data.text) {
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
            backgroundColor: "rgba(255, 255, 255, 0.0)",
          },
          content: {
            position: "absolute",
            top: "200px",
            left: "400px",
            right: "400px",
            bottom: "0px",
            border: "0px solid #ccc",
            background: "rgba(255, 255, 255, 0.0)",
            overflow: "hidden",
            WebkitOverflowScrolling: "touch",
            borderRadius: "0px",
            outline: "none",
            padding: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
        }}>
        <form className="specialheading3" onSubmit={RegisterHandler}>
          <p className="contactform">Shoebill Register</p>
          <p className="contactform">
            Username
            <br></br>
            <input placeholder="Username" type="text" ref={usernameInputRef} />
          </p>

          <p className="contactform">
            Email
            <br></br>
            <input
              placeholder="Email"
              type="?"
              ref={emailInputRef}
            />
          </p>

          <p className="contactform">
            Password
            <br></br>
            <input
              placeholder="Password"
              type="password"
              ref={passwordInputRef}
            />
          </p>

          {/* <p className="contactform">
            Custom avatar URL
            <br></br>
            <input
              placeholder="Custom avatar URL"
              type="?"
              ref={customurlInputRef}
            />
          </p> */}

          <button type="submit">Register</button>
        </form>
      </Modal>
    </div>
  );
};

export default Register;
