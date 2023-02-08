import React, { useState, useRef } from "react";
import styles from "./Todo.module.css";
export default function INBOX(props) {
  const [newTask, setNewTask] = useState(false);
  const titleRef = useRef("");
  const calendarRef = useRef("");
  const newTaskHandler = () => {
    setNewTask(true);
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value === "") {
      window.alert("Please enter a title");
      return;
    }
    let newObj = {
      number: props.list.length + 1,
      title: titleRef.current.value,
      date: new Date(calendarRef.current.value),
    };
    props.append(newObj);
    setNewTask(false);
  };

  const pull = (index) => {
 
    props.deleteHandle(index);
  };

  const cancelHandler = () => {
    setNewTask(false);
    calendarRef.current.focus();
    calendarRef.current.blur();
  };
  return (
    <>
      <h5 style={{ margin: "20px", textShadow: "2.5px 2.5px whitesmoke" }}>
        INBOX
      </h5>
      <div className={styles.container}>
        {!newTask && (
          <button
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingBottom: "5px",
              paddingTop: "5px",
              fontSize: "17px",
            }}
            class="btn btn-dark btn-sm "
            onClick={newTaskHandler}
          >
            +Add New Item
          </button>
        )}
        {newTask && (
          <form action="">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                style={{
                  borderRadius: "5px",
                  backgroundColor: "lightgray",
                  fontWeight: "600",
                  textAlign: "center",
                  color: "black",
                }}
                type="text"
                name=""
                id=""
                ref={titleRef}
                placeholder="Add Item"
              />
              <input
                style={{
                  borderRadius: "5px",
                  backgroundColor: "lightgray",
                  fontWeight: "600",
                  textAlign: "center",
                }}
                type="date"
                ref={calendarRef}
                // defaultValue="2023-02-01"
                defaultValue={new Date()}
              />
              <button class="btn btn-success" onClick={addHandler}>
                Add Task
              </button>

              <button class="btn btn-danger" onClick={cancelHandler}>
                Cancel
              </button>
            </div>
          </form>
        )}
        <div>
          {props.list.map((list,index) => {
            return (
              <div key={index}>
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
                  <h5 style={{ marginLeft: "10px" }}>{list.title}</h5>
                  <h5 style={{ marginRight: "10px" }}>
                    {list.date.toLocaleDateString()}
                  </h5>
                  <button
                    className="btn btn-outline-danger btn-sm "
                    onClick={() => {
                      pull(list.number);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
