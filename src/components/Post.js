import React, { useState } from "react";
 

function Post({ postInfo }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div >
        <p>User ID: {postInfo.userId}</p>
      <p >Title: {postInfo.title}</p>
      <button  onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "More Info"}
      </button>
      {showDetails && (
        <div >
          <p>ID: {postInfo.id}</p>
          <p>Body: {postInfo.body}</p>
        </div>
      )}
    </div>
  );
}

export default Post;
