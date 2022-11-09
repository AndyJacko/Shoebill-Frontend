import React, { useState } from "react";

import Modal from "react-modal";

const Newbill = () => {
  

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );

  
  
//   const submitHandler = () => {};

//   return (
//     <form onSubmit = {submitHandler}>

// <div id="container2"></div><div class="specialheading3">Open modal
            
//             <button type="password">Open modal</button>

//         </div>
//         </form>
//   );


};

export default Newbill;
