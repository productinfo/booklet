import React from "react";
import Avatar from "@material-ui/core/Avatar";

const SmallIcon = props => {
  return (
    <div>
      <Avatar src={props.src} sizes="lg" alt={props.alt} />
      <p>{props.text}</p>
    </div>
  );
};

export default SmallIcon;
