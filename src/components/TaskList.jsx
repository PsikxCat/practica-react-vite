import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) return <h1>No hay tareas...</h1>;

  const renderTasks = () => {
    return tasks.map(task => (
      <TaskCard
        task={task}
        key={task.id}
      />
    ));
  };

  return (
    <main>
        { renderTasks() }
    </main>
  );
}

export default TaskList;
