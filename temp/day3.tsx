import { useState } from "preact/hooks";
import "./app.css";

function Tasks() {
  const [currentTask, setCurrentTask] = useState<string>("");

  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div className="tasks">
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={currentTask}
          onChange={(e) => setCurrentTask((e.target as HTMLInputElement).value)}
        />
        <button
          onClick={() => {
            if (tasks.length === 5) {
              alert("You can't add more than 5 tasks");
              setCurrentTask("");
              return;
            }
            setTasks([...tasks, currentTask]);
            setCurrentTask("");
          }}
          className={"bg-green-400"}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}className</li>
        ))}
      </ul>
    </div>
  );
}

export function App() {
  return (
    <>
      <Tasks />
    </>
  );
}
