import React from "react";
import Listrender from "./Listrender";
import styles from "./Todo.module.css";
export default function Today(props) {
  const date = new Date();
  const filteredList = props.list.filter((task) => {
    if (date.getFullYear() !== task.date.getFullYear()) {
      return false;
    }
    if (date.getMonth() !== task.date.getMonth()) {
      return false;
    }
    if (date.getDate() !== task.date.getDate()) {
      return false;
    }
    return true;
  });
  return (
    <>
      <h5 style={{ margin: "20px", textShadow: "2.5px 2.5px whitesmoke" }}>
        Today
      </h5>
      <div className={styles.container}>
        <div>
          {props.list.length > 0 ? (
            <>
              {" "}
              <Listrender list={filteredList} />{" "}
              
            </>
          ) : (
            "No items Added"
          )}
        </div>
      </div>
    </>
  );
}
