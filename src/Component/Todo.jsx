import React, { useState } from "react";
// import "../App.css";
import TodosCompo from "./Todoitem";
import TodoListCompo from "./Todolists";
import FooterCompo from "./Footer";

export default function InputCompo() {
  const [todoList, setTodoList] = useState([]);
  let completed = todoList.filter((ele) => ele.done == true).length;
  // let pending = todoList.length - completed.length;
  let pending = todoList.length - completed;
  return (
    <main>
      <TodosCompo todoList={todoList} setTodoList={setTodoList} />
      <TodoListCompo todoList={todoList} setTodoList={setTodoList} />
      <FooterCompo completed={completed} pending={pending} />
    </main>
  );
}
