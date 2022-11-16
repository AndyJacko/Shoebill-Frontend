import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./Post.css";

const Post = ({ user }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const commentInputRef = useRef();
  const picInputRef = useRef();

  const createPostHandler = async (e) => {
    e.preventDefault();

    const postcomment = commentInputRef.current.value;
    const postpic = picInputRef.current.value;

    if (!postcomment || postcomment.trim() === "") {
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_REST_API}/createPost/`,
      {
        method: "POST",
        body: JSON.stringify({ user: user._id, postcomment, postpic }),
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 112c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" />
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
            backgroundColor: "#00000066",
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
        <div className="modal-close-button" onClick={toggleModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </div>

        <form className="specialheading3" onSubmit={createPostHandler}>
          <h2>Compose Bark</h2>
          <div>
            <textarea
              className="bark-input"
              rows="5"
              columns="80"
              placeholder="What's new, Shoebill?"
              ref={commentInputRef}></textarea>

            <div>
              <p>Custom Bark Image URL</p>
              <input
                type="text"
                placeholder="https://somewebsite.com/pic.jpg"
                className="bark-input"
                ref={picInputRef}
              />
            </div>

            <br />
            <br />

            <button type="submit">Bark</button>

            <br />
            <br />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Post;
