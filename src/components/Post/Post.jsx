import React from "react";

export default function Post(props) {
  return (
    <div>
      <h3>{props.post.name}</h3>
      <p>{props.post.socialPost}</p>
    </div>
  );
}
