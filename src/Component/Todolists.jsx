import EachItem from "./Eachitem";
import styles from "./Todo-s.module.css";

export default function TodoListCompo({ todoList, setTodoList }) {
  let i = 0;
  let newCopy = [...todoList];
  let sortedTodo = newCopy.sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.list}>
      {sortedTodo.map((ele) => (
        <EachItem
          item={ele}
          key={++i}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}
