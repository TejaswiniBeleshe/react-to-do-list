import styles from "./Footer-s.module.css";
export default function FooterCompo({ completed, pending }) {
  // let completed =
  //   todoList.length > 0 ? todoList.filter((ele) => ele.done == true) : 0;
  // let pending = todoList.filter((ele) => ele.done == false);
  // console.log(completed, pending);
  // let { completed, pending } = obj;
  return (
    <div id={styles.foot}>
      <span>completed:{completed}</span>
      <span>Pending:{pending}</span>
    </div>
  );
}
