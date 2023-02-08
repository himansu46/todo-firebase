import React from "react";
import Listrender from "./Listrender";
import styles from "./Todo.module.css";

export default function Next7Days(props) {
  const date = new Date();
  const filteredList = props.list.filter((task) => {
    const diffTime = task.date - date;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 7 && diffDays >= 0) {
      return true;
    }
    return false;
  });
  return (
    <>
      <h5 style={{ margin: "20px", textShadow: "2.5px 2.5px whitesmoke" }}>
        Next 7 Days
      </h5>
      <div className={styles.container}>
        <div>
          {props.list.length > 0 ? (
            <Listrender list={filteredList} />
          ) : (
            "No items Added"
          )}
        </div>
      </div>
    </>
  );
}
