import React, { useState } from "react";
import Modal from "react-modal";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="specialheading3">
      <button onClick={toggleModal}>Bark</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel=""
      >

<div className="specialheading3">
          
        <p class="contactform">Compose bark</p>
          <p class="contactform">Your post
            <br></br><input onClick={("")} placeholder="What's new, Shoebill?"/>
            </p>
            
            

            
            
            
                <button onClick={toggleModal}>Bark</button>

            </div>
      </Modal>
    </div>
  );
};

export default Login;
