import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export function TaskForm({ createTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      id: 4,
      description: 'Soy una nueva tarea'
    };

    createTask(newTask);
  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          placeholder='Escribe tu tarea...'
          onChange={(e) => setTitle(e.target.value)} />

        <button>
          Guardar
        </button>
      </form>
    </>
  );
}

TaskForm.propTypes = {
  createTask: PropTypes.func.isRequired
};
