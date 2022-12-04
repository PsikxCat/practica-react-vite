import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
  <section className='bg-zinc-900 h-screen'>
    <div className="container mx-auto">
      <TaskForm />
      <TaskList />
    </div>
  </section>
  );
}

export default App;
