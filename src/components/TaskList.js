import React from "react";

export default function TaskList(props) {
  return (
    <ul className="list">
      {props.list.map((task) => (
        <li className="task" key={task.id}>
          <p
            className={task.isComlete ? "complete" : "text"}
            style={{ color: task.color }}
            onClick={() => props.completeTask(task.id)}
          >
            {task.priority === "додаткова" && <span>❤</span>}
            {task.priority === "поточна" && <span>❤❤</span>}
            {task.priority === "важлива" && <span>❤❤❤</span>}
            {task.text}
          </p>
          <button
            onClick={() => props.deleteTask(task.id)}
            className="btnn"
            type="button"
          >
            Подивився?
          </button>
        </li>
      ))}
    </ul>
  );
}
