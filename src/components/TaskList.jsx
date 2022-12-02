import React from 'react';
import { PropTypes } from 'prop-types';
import TaskCard from './TaskCard';
export function TaskList({ tasks }) {
  if (tasks.length === 0) return <h1>No hay tareas...</h1>;

  const renderTasks = () => {
    return tasks.map(task => (
      <TaskCard task={task} key={task.id} />
    ));
  };

  return (
    <main>
        { renderTasks() }
    </main>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array
};
