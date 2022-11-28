import React, { useState, useEffect } from 'react';
import { tasks as data } from './tasks';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  function createTask(taskTitle) {
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length + 1,
      description: 'Nueva tarea'
    }]);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
  <>
    <TaskForm createTask={ createTask }/>
    <TaskList tasks={ tasks }/>
  </>
  );
}
