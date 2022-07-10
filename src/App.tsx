import { useState } from "react";
import { FormNewTask } from "./FormNewTask";
import { Header } from "./Header";
import { Tasks } from "./Tasks";
import { v4 as uuid } from 'uuid';

export interface Task {
  id: string;
  text: string;
  isComplete: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(task: string) {
    setTasks(() => [...tasks, {
      text: task,
      id: uuid(),
      isComplete: false,
    }]);
  };

  function handleToggleCompleteState(id: string) {
    const taskIndex = tasks.findIndex(task => task.id === id);

    const newTasks = tasks.map((task, i) => (
      i === taskIndex ? {
        ...task,
        isComplete: !task.isComplete
      } : task
    ));
    
    setTasks(newTasks);
  };

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <>
      <Header />
      <FormNewTask onAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
        onToggleCompleteState={handleToggleCompleteState}
        onHandleDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default App;
