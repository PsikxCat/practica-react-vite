import React from 'react';
import { PropTypes } from 'prop-types';

// se corto la importacion del array y se paso al componente App

export function TaskList({ tasks }) {
  if (tasks.length === 0) return <h1>No hay tareas...</h1>;

  const renderTasks = () => {
    return tasks.map(task => (
      <div key={ task.id }>
        <h1>{ task.title }</h1>
        <p>{ task.description }</p>
      </div>
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
