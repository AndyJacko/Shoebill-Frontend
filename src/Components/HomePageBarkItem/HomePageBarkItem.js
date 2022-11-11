import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./HomePageBarkItem.css";

function getMinDiff(startDate, endDate) {
  const msInMinute = 60 * 1000;

  const mins = Math.round(Math.abs(endDate - startDate) / msInMinute);

  if (mins > 60) {
    const hours = Math.round(Math.abs(endDate - startDate) / msInMinute / 60);

    if (hours > 24) {
      return (
        Math.round(Math.abs(endDate - startDate) / msInMinute / 60 / 24) + "d"
      );
    } else {
      return Math.round(Math.abs(endDate - startDate) / msInMinute / 60) + "h";
    }
  } else {
    return mins + "m";
  }
}

const HomePageBarkItem = ({ post }) => {
  const [userpic, setUserPic] = useState();

  useEffect(() => {
    const getUserPic = async () => {
      const response = await fetch(
        `https://robohash.org/${post.user.username}`
      );

      if (response.url) {
        setUserPic(response.url);
      }
    };

    if (post.user.pic) {
      setUserPic(post.user.pic);
    } else {
      getUserPic();
    }
  }, [post]);

  return (
    <div className="home-page-bark-item-container">
      <div className="home-page-bark-item-profilepic">
        <Link to={`/users/${post.user._id}`} className="whotofollow-pic">
          {userpic && <img src={userpic} alt={post.user.username} />}
        </Link>
      </div>

      <div className="home-page-bark-item-bark-container">
        <div>
          <Link to={`/users/${post.user._id}`}>
            <strong>{post.user.username} </strong>
          </Link>
          <Link to={`/users/${post.user._id}`}>
            <span className="whotofollow-username">@{post.user.username}</span>
          </Link>
          &nbsp;
          <span>{getMinDiff(new Date(), new Date(post.posteddate))}</span>
        </div>

        <div className="home-page-bark-item-comment">{post.postcomment}</div>

        <div className="home-page-bark-item-crl-container">
          <div className="home-page-bark-item-crl">
            <div className="home-page-bark-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
              </svg>
            </div>

            <div>{post.numcomments}</div>
          </div>

          <div className="home-page-bark-item-crl">
            <div className="home-page-bark-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z" />
              </svg>
            </div>

            <div>{post.rebarks}</div>
          </div>

          <div className="home-page-bark-item-crl">
            <div className="home-page-bark-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </div>

            <div>{post.likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBarkItem;
