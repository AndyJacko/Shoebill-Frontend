import React, { useEffect } from "react";

const Messages = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="padding-20">
      <h2>Messages</h2>

      <p>This is a dummy page and may be added to later as a stretch goal.</p>
    </div>
  );
};

export default Messages;
