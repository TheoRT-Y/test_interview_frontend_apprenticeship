import React from "react";

function RenderList(props) {
  return (
    <div>
      <ul>
        {props.list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderList;
