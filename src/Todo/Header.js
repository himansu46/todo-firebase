import React from "react";

export default function Header(props) {
  return (
    <div style={{ backgroundColor: "darkcyan" ,paddingBottom:"5px"}}>
      <h2 style={{textAlign:"center"}}>
        {props.name ? `Welcome back ${props.name}! ` : "login please"}
      </h2>
    </div>
  );
}
