import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: tasks.length,
          value: newTask
        }
      ]);
    }

    setNewTask("");
  }

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function deleteTask(id) {
    return () => {
      setTasks(
        tasks
          .filter(task => task.id !== id)
          // remap ids
          .map((task, i) => ({
            id: i,
            value: task.value
          }))
      );
    };
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newTask}></input>
        <button>Add Task</button>
      </form>
      <ol>
        {tasks.map(task => (
          <li key={task.id} onClick={deleteTask(task.id)}>
            {task.value}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
