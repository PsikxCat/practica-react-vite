import React from 'react';
import { PropTypes } from 'prop-types';

function TaskCard({ task, deleteTask }) {
  return (
    <div>
      <h1>{ task.title }</h1>
      <p>{ task.description }</p>
      <button onClick={(e) => { deleteTask(task.id); }}>
        Eliminar tarea
      </button>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func
};

export default TaskCard;
