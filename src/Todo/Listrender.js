import React from "react";

export default function Listrender(props) {
 

  return (
    <>
      {props.list.map((list, i) => {
        return (
          <div
            style={{
              backgroundColor: "lightgray",
              borderRadius: "5px",
              margin: "10px",
              padding: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h5 style={{ marginLeft: "10px" }}> {list.title} </h5>
            <h5 style={{ marginRight: "10px" }}>
              {list.date.toLocaleDateString()}
            </h5>
           
           
          </div>
          
        );
      })}
    </>
  );
}
