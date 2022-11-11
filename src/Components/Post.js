import React, { useState } from "react";
import Modal from "react-modal";
import "./Post.css"

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
            backgroundColor: 'rgba(255, 255, 255, 0.0)'
          },
          content: {
            position: 'absolute',
            top: '200px',
            left: '400px',
            right: '400px',
            bottom: '0px',
            border: '0px solid #ccc',
            background: 'rgba(255, 255, 255, 0.0)',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '0px',
            outline: 'none',
            padding: '0px',
          }
        }}>

        <div className="specialheading3">
          <p className="contactform">Compose bark</p>
          <p className="contactform">
            Your post
            <br></br>
            <textarea className="bark-input" rows="5" columns="80" onClick={""} placeholder="What's new, Shoebill?" ></textarea>
          </p>

          <button onClick={toggleModal}>Bark</button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
