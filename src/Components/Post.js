import React, { useState } from "react";
import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <button onClick={toggleModal}>Bark</button>

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
        }}
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
