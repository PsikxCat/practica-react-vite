import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export function TaskForm({ createTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          placeholder='Escribe tu tarea...'
          onChange={(e) => setTitle(e.target.value)}
          value={ title }
          autoFocus
          />

        <textarea
          cols="30" rows="5"
          placeholder='Agrega descripción...'
          onChange={(e) => setDescription(e.target.value)}
          value={ description }
        />

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
