import { useState } from 'preact/hooks';
import './app.css';

// create a function Tasks which will return a div with a class of tasks
// User can add tasks to the list by typing in the input and clicking the add button
// User can delete tasks by clicking the delete button
// User can mark tasks as complete by clicking the checkbox

interface ITask {
  description: string;
}

function Tasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>('');

  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <div className="tasks__input">
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask((e.target as HTMLInputElement).value)}
        />
        <button
          onClick={() => {
            setTasks([...tasks, { description: task }]);
            setTask('');
          }}
        >
          Add
        </button>
      </div>
      <div className="tasks__list">
        {tasks.map((task: ITask) => (
          <div>
            {/* <input type="checkbox" /> */}
            <span>
              {task.description}
            </span>
            <button
              onClick={() => {
                setTasks(tasks.filter((t) => t.description !== task.description));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export function App() {
  return (
    <>
      <Tasks />
    </>
  )
}

