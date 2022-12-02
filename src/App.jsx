import React, { useState, useEffect } from 'react';
import { tasks as data } from './data/tasks';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask({ title, description }) {
    setTasks([...tasks, {
      title,
      id: tasks.length + 1,
      description
    }]);
  }

  return (
  <>
    <TaskForm createTask={ createTask }/>
    <TaskList tasks={ tasks }/>
  </>
  );
}
