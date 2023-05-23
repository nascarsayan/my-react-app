import { useState, useEffect } from 'preact/hooks';
import './app.css';

interface Task {
  id: string;
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

  const handleSearch = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setSearchText(target.value);
  };

  return (
    <div className={
      "m-2 p-2 border-2 border-blue-500 rounded-sm"}>
      <input
        type="text"
        value={searchText}
        onInput={handleSearch}
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

  const handleAddTask = async () => {
    const newTask = {
      id: Math.random().toString(),
      description: currentTask,
      completed: false,
    };

    // POST request to the backend.
    const response = await fetch(
      "http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
    });
    const task: Task = await response.json();
    console.log(task);
    setTasks([...tasks, task]);
    setCurrentTask("");
  };

  return (
    <div className={
      "m-2 p-2 border-2 border-blue-500 rounded-sm"
      }>
      <input
        type="text"
        placeholder="Add task"
        value={currentTask}
        onInput={handleCurrentTask}
      />
      <button 
        className={
          "ml-2 px-2 py-1 bg-blue-500 text-white rounded-sm"
        }
        onClick={handleAddTask}>Add</button>
    </div>
  );
}

interface TaskListProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  searchText: string;
}

function TaskList({ tasks, setTasks, searchText }: TaskListProps) {
  // function isStrikeThough(completed: boolean) {
  //   if (completed) {
  //     return "line-through";
  //   }
  //   return "";
  // }
  
  return (
    <div>
      <ul className={"m-4 rounded-sm bg-gray-50"}>
        {tasks
          .filter((task) => task.description.includes(searchText))
          .map((task) => (
            <li className={"m-2 p-1 rounded-sm bg-gray-100"}>
              <input
                type="checkbox"
                checked={task.completed}
                className={"mr-2"}
                onClick={async () => {
                  const response = await fetch(
                    `http://localhost:3000/tasks/${task.id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        completed: !task.completed,
                      }),
                  });
                  const updatedTask: Task = await response.json();
                  // const updatedTasks: Task[] = [];
                  // for (const task of tasks) {
                  //   if (task.id === updatedTask.id) {
                  //     updatedTasks.push(updatedTask);
                  //   } else {
                  //     updatedTasks.push(task);
                  //   }
                  // }
                  const updatedTasks = tasks.map((task) => {
                    if (task.id === updatedTask.id) {
                      return updatedTask;
                    }
                    return task;
                  });
                  setTasks(updatedTasks);
                }}
              />
              <span
                // className={isStrikeThough(task.completed)}
                className={`${task.completed ? "line-through" : ""}`}
              >{task.description}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  // Get the list of tasks from the backend instead.
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <>
      <SearchTask searchText={searchText} setSearchText={setSearchText} />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList
        tasks={tasks}
        searchText={searchText}
        setTasks={setTasks} />
    </>
  );
}