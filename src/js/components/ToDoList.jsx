import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container w-25 p-4 shadow">
        <h2 className="text-center mb-4">To-Do List</h2>
        <div className="d-flex mb-3">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a task..."
            className="form-control"
          />
          <button
            onClick={addTask}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
        <ul style={{listStyleType:"none"}} className="gap-3">
          {tasks.length === 0 ? (
            <li className="text-center text-muted">No tasks, add a task</li>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center mb-2"
              >
                {task}
                <button
                  onClick={() => removeTask(index)}
                  className="btn btn-danger btn-sm"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
