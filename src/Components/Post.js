import React, { useState } from "react";
import Modal from "react-modal";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <button onClick={toggleModal}>Bark</button>

      <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel=""
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '0px solid #ccc',
            background: 'rgba(255, 255, 255, 0.1)',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '0px',
            outline: 'none',
            padding: '0px'
          }
        }}>

        <div className="specialheading3">
          <p class="contactform">Compose bark</p>
          <p class="contactform">
            Your post
            <br></br>
            <input onClick={""} placeholder="What's new, Shoebill?" />
          </p>

          <button onClick={toggleModal}>Bark</button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
