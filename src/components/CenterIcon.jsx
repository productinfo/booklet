import React from "react";

import mainicon from "../images/lovebook.png";

const style = {
  position:'absolute',
  top: 50,
  left: 'Calc(50% - 60px)'
};


function CenterIcon(props) {
  return (
    <header style={style}>
        <img className="centered" src={mainicon} width="120" alt='booklet-icon' />
    </header>
  );
}

export default CenterIcon;
