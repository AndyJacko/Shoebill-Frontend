import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./Post.css";

const Post = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const commentInputRef = useRef();

  const createPostHandler = async (e) => {
    e.preventDefault();

    const postcomment = commentInputRef.current.value;

    if (!postcomment || postcomment.trim() === "") {
      return;
    }

    const response = await fetch(
      `https://cnmaster-shoebill.herokuapp.com/createPost/`,
      {
        method: "POST",
        body: JSON.stringify({ user: user._id, postcomment }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data.message) {
      toggleModal();

      navigate(`/`);
    }
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <div className="lsb-link" onClick={toggleModal}>
        <div className="lsb-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
        </div>
        Bark
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
            padding: "0px",
          },
        }}>
        <form className="specialheading3" onSubmit={createPostHandler}>
          <h2>Compose Bark</h2>
          <p className="contactform">
            <textarea
              className="bark-input"
              rows="5"
              columns="80"
              placeholder="What's new, Shoebill?"
              ref={commentInputRef}></textarea>
          </p>

          <button type="submit">Bark</button>
        </form>
      </Modal>
    </div>
  );
};

export default Post;
