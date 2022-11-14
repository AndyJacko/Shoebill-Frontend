import React, { useEffect } from "react";

import "./NotFound.css";

const NotFoundPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>

      <p>Damn bro, looks like you're in the wrong place.</p>
      <p>That sucks.</p>
      <p>You should probably leave.</p>
      <p>NOW!</p>
    </div>
  );
};

export default NotFoundPage;
