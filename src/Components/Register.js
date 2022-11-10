import React, { useState } from "react";
import Modal from "react-modal";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <button onClick={toggleModal}>Register</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel=""
      >


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
