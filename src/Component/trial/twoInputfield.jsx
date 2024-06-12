import React, { useState } from "react";
import styles from "./Input.module.css";

export default function TwoFields() {
  const [val, setVal] = useState({ fname: "", lname: "" });
  const [objs, setObjs] = useState([]);
  function handler(e) {
    e.preventDefault();
    setObjs([...objs, val]);
    setVal({ fname: "", lname: "" });
  }
  function callHere(e) {
    if (e.target.id) {
      e.target.style.textDecoration = "line-through";
    }
  }
  let i = 0;
  return (
    <div>
      <input
        type="text"
        value={val.fname}
        key="1"
        onChange={(e) => setVal({ ...val, fname: e.target.value })}
      />
      <input
        type="text"
        value={val.lname}
        key="2"
        onChange={(e) => setVal({ ...val, lname: e.target.value })}
      />
      <button type="submit" onClick={(e) => handler(e)} id={styles.btn}>
        click
      </button>
      <div className="list" onClick={(e) => callHere(e)}>
        <ul>
          {objs.map((obj) => (
            <li key={++i} id={++i}>
              {obj.fname}-{obj.lname}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
