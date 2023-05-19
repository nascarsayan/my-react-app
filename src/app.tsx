import { useState } from 'preact/hooks';
import './app.css';

interface Task {
  description: string;
  completed: boolean;
}

interface SearchTaskProps {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

function SearchTask(
  {
    searchText,
    setSearchText
  }: SearchTaskProps
  ) {
  // TODO: Implement search over tasks

  const handleSearch = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setSearchText(target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search task"
      />
    </div>
  );
}


interface AddTaskProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

function AddTask({ setTasks, tasks }: AddTaskProps) {
  const [currentTask, setCurrentTask] = useState<string>("");

  const handleCurrentTask = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setCurrentTask(target.value);
  };

  const handleAddTask = () => {
    const newTask = {
      description: currentTask,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setCurrentTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add task"
        value={currentTask}
        onChange={handleCurrentTask}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}
function TaskList({ tasks }: { tasks: Task[] }) {
  // TODO: Filter tasks based on search text
  return (
    <div>
      <ul>
        {
          tasks.map((task) => (
              <li>
                {task.description}
              </li>
            )
          )
        }
      </ul>
    </div>
  );
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  return (
    <>
      <SearchTask
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
      />
      <TaskList tasks={tasks}/>
    </>
  )
}