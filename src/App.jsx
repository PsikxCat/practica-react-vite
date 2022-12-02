import React, { useState, useEffect } from 'react';
import { tasks as data } from './data/tasks';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
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

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
  <>
    <TaskForm createTask={ createTask }/>
    <TaskList tasks={ tasks } deleteTask={ deleteTask }/>
  </>
  );
}

export default App;
