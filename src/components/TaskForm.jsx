import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const { createTask } = useContext(TaskContext);

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
    <div className='max-w-md mx-auto'>
      <form
        className='bg-slate-900 p-10 mb-4'
        onSubmit={ handleSubmit }
      >
        <h1 className='text-2xl text-white font-bold mb-3'>
          Crea tu tarea
        </h1>
        <input
          className='bg-slate-300 p-2 w-full mb-2'
          onChange={(e) => setTitle(e.target.value)}
          value={ title }
          type="text"
          placeholder='Escribe tu tarea...'
          autoFocus
        />
        <textarea
          className='bg-slate-300 p-2 w-full'
          onChange={(e) => setDescription(e.target.value)}
          value={ description }
          cols="30" rows="3"
          placeholder='Agrega descripción...'
        />
        <button
          className='bg-indigo-500 rounded-md px-2 py-1 mt-4 hover:bg-indigo-400'>
          Guardar tarea
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
