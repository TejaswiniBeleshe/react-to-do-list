import styles from "./Todo-s.module.css";
import React, { useState } from "react";

export default function TodosCompo({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({ mes: "", done: false });
  function handleSubmit(e) {
    //   alert(todo);
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({ mes: "", done: false });
    // console.log(todo);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.ip}>
        <input
          type="text"
          value={todo.mes}
          placeholder="Enter Here.."
          onChange={(e) => setTodo({ ...todo, mes: e.target.value })}
        />
        <button type="submit">ADD</button>
        {/* <input type="button" value="submit" onClick={(e) => handle(e)} /> */}
      </div>
    </form>
  );
}
