import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedListKV")) ?? [];
  });
  const addTask = (task, priority) => {
    const newTask = {
      id: Math.floor(Math.random() * 9000) + 1000,
      text: task,
      isComlete: false,
      priority: priority,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };
    setList([...list, newTask]);
  };

  const deleteTask = (id) => {
    console.log("видалити", id);
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  };

  const completeTask = (id) => {
    console.log("задача виконана");
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, isComlete: !task.isComlete };
      } else {
        return task;
      }
    });
    setList(newList);
  };

  useEffect(() => {
    localStorage.setItem("savedListKV", JSON.stringify(list));
  }, [list]);

  return (
    <div className="main">
      <h2 className="title">План подивитися анімешки</h2>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}
