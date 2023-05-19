import { useState } from 'preact/hooks';
import './app.css';

function SearchTask() {
  return (
    <div>
      <input type="text" placeholder="Search task" />
    </div>
  );
}
function AddTask() {
  return (
    <div>
      <input type="text" placeholder="Add task" />
      <button>Add</button>
    </div>
  );
}
function TaskList() {
  return (
    <div>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
      </ul>
    </div>
  );
}

export function App() {
  return (
    <>
      <SearchTask/>
      <AddTask/>
      <TaskList/>
    </>
  )
}