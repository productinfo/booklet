import React from "react";


const style = {
      margin: '25px 0',
      backgroundColor: 'rgba(230, 230, 230, 0.6)',
      padding: '15px 20px',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px',
}

function TextBox(props) {
  return (
    <div style={style}>
      <h1 className="centered">{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default TextBox;
