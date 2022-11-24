import React, { useState, useEffect } from 'react';
import { tasks as data } from './tasks';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  const renderTasks = () => {
    return tasks.map(task => (
      <div key={task.id}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
    ));
  };

  return (
    <div>
        { renderTasks() }
    </div>
  );
}
