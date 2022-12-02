import React from 'react';
import { PropTypes } from 'prop-types';
import TaskCard from './TaskCard';

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) return <h1>No hay tareas...</h1>;

  const renderTasks = () => {
    return tasks.map(task => (
      <TaskCard
        task={task}
        key={task.id}
        deleteTask={deleteTask}
      />
    ));
  };

  return (
    <main>
        { renderTasks() }
    </main>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func
};

export default TaskList;
