import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className='text-3xl text-white font-bold mb-3 text-center'>
        No hay tareas...
      </h1>
    );
  }

  const renderTasks = () => {
    return (
      <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    );
  };

  return <main>{renderTasks()}</main>;
}

export default TaskList;
