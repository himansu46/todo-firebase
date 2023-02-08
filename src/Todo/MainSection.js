import React, { useState } from "react";
import Inbox from "./Inbox";
import Next7Days from "./Next7Days";
import Today from "./Today";


export default function MainSection(props) {

  
  
  const [filteredList, setFilteredList] = useState([]);
  

  const addToList = (obj) => {
  const newList=  [...filteredList,obj]
  
    setFilteredList(newList);
  };

 
  
  const deleteHandle = (index) => {

   const updatedlist= filteredList.filter((item) => {
    return item.number !== index
            
    })
    
setFilteredList(updatedlist);

  };

 
  return (
    <div>
      {props.active === "INBOX" && (
        <Inbox
          list={filteredList}
          append={addToList}
          deleteHandle={deleteHandle}
        />
      )}
      {props.active === "TODAY" && <Today list={filteredList} />}
      {props.active === "NEXT" && <Next7Days list={filteredList} />}
    </div>
  );
}
