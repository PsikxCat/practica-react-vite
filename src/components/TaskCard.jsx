import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { TaskContext } from '../context/TaskContext';
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

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
};

export default TaskCard;
