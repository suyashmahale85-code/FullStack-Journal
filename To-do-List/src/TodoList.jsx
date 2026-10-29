import { useState } from "react";
function TodoList() {
  const [Task, setTask] = useState(["Eat Breakfest","walk the dog","Go to gym",]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function AddTask() {
    if (newTask.trim() != "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }



  function DeleteTask(index) {
    let updatedTask = Task.filter((element, i) => i != index);
    setTask(updatedTask);
  }

  function MoveUP(index) {
    if (index > 0) {
      let updatedTask = [...Task];
        [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];

      setTask(updatedTask);
    }
  }

  function Movedown(index) {
    if (index < Task.length - 1) {
      let updatedTask = [...Task] ; 
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTask(updatedTask);
    }
  }
  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <input type="text" placeholder="Enter Task..."value={newTask}  onChange={handleInputChange}
        />
        <button onClick={AddTask} className="Add-btn">
          Add Task
        </button>
        <ol>
          {Task.map((element, index) => (
            <li className="text" key={index}>
              <span>{element}</span>
              <button className="delete-btn" onClick={() => DeleteTask(index)}>
                DELETE
              </button>
              <button className="move-btn" onClick={() => MoveUP(index)}>
                👆
              </button>

              <button className="move-btn" onClick={() => Movedown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default TodoList;
