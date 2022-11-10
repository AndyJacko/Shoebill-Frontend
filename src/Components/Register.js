import React, { useState } from "react";
import Modal from "react-modal";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <button onClick={toggleModal}>
  <i class="fas fa-thumbs-up"></i> Register
</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel=""
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
          
        <p class="contactform">Shoebill Signup</p>
          <p class="contactform">Username
            <br></br><input onClick={("")} placeholder="Username"/>
            </p>
            
            <p class="contactform">Email
            <br></br><input onClick={("")} placeholder="Email address"/>
            </p>

            <p class="contactform">Password
                <br></br><input onClick={("")} placeholder="Password"/>
                </p>

            <p class="contactform">Custom avatar URL
                <br></br><input onClick={("")} placeholder="Custom avatar URL"/></p>
            
                <button onClick={toggleModal}>Register</button>

            </div>
        
      </Modal>
    </div>
  );
};

export default Register;
