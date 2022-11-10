import React, { useState } from "react";
import Modal from "react-modal";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <button onClick={toggleModal}>Login</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel=""
      >

<div className="specialheading3">
          
        <p class="contactform">Shoebill Login</p>
          <p class="contactform">Username
            <br></br><input onClick={("")} placeholder="Username"/>
            </p>
            
            

            <p class="contactform">Password
                <br></br><input onClick={("")} placeholder="Password"/>
                </p>

            
            
                <button onClick={toggleModal}>Login</button>

            </div>
      </Modal>
    </div>
  );
};

export default Login;
