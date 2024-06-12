import React from "react";
import styles from "./Eachitem-s.module.css";
export default function EachItem({ item, todoList, setTodoList }) {
  let i = 0;
  function handleRemove(item) {
    //1.
    // console.log(e.target.parentElement);
    // e.target.parentElement.remove();
    // todoList.splice(e.target.id, 1);
    // console.log(todoList);
    //2.
    // console.log(e.target.id);
    // setTodoList(todoList.filter((ele, i) => i != e.target.id));
    // console.log(todoList);
    // //3.
    // console.log(item);
    // // e.target.parentElement.remove();
    setTodoList(todoList.filter((ele) => ele.mes !== item.mes));
    // console.log(todoList);
  }

  function handleMark(name) {
    let newArr = todoList.map((ele) =>
      ele.mes == name ? { ...ele, done: !ele.done } : ele
    );
    setTodoList(newArr);
  }

  let className = item.done ? styles.completed : "";

  return (
    <div className={styles.eachli}>
      <span className={className} onClick={() => handleMark(item.mes)}>
        {item.mes}
      </span>
      <span
        className={styles.remove}
        id={++i}
        onClick={() => handleRemove(item)}
      >
        X
      </span>
    </div>
  );
}
