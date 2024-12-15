import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("додаткова");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert(
        "Поле не може бути порожнім (якщо нічого не хочеш дивитися то ізгой)"
      );
      return;
    }
    // if (task.length > 5) {
    //   alert("Поле не може бути менше 5");
    //   return;
    // }
    console.log(task);
    props.addTask(task, priority);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setTask(event.target.value)}
          value={task}
          type="text"
          placeholder="Введіть аніме"
        />
        <select
          className="btn"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="додаткова">додаткова</option>
          <option value="поточна">поточна</option>
          <option value="важлива">важлива</option>
        </select>

        <button type="submit" className="btn">
          Додати аніме
        </button>
      </form>
    </div>
  );
}
