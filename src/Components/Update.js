import React, { useState } from "react";
import Modal from "react-modal";

const Update = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="specialheading3">
      <button onClick={toggleModal}>Edit Profile</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel=""
      >

<div className="specialheading3">
          
        <p class="contactform">Update your account details</p>

        <p class="contactform">Current avatar:<br></br>
        <img src="https://picsum.photos/200" alt="something" /></p>

          <p class="contactform">Username
            <br></br><input onClick={("")} placeholder="Username"/>
            </p>
            
            

            <p class="contactform">Email
                <br></br><input onClick={("")} placeholder="Email"/>
                </p>

                <p class="contactform">Password
                <br></br><input onClick={("")} placeholder="Password"/>
                </p>

                <p class="contactform">Custom avatar URL
                <br></br><input onClick={("")} placeholder="Custom avatar URL"/>
                </p>
            
            
                <button onClick={toggleModal}>Submit</button>

            </div>
      </Modal>
    </div>
  );
};

export default Update;
