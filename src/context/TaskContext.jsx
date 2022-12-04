import React, { createContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask({ title, description }) {
    setTasks([...tasks, {
      title,
      id: tasks.length + 1,
      description
    }]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask,
    }}>
      { children }
    </TaskContext.Provider>
  );
}

TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
