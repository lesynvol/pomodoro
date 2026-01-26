import { useState } from 'react';
import { useTimerStore } from '../store/useTimerStore';

const TaskList = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTimerStore();
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-white mb-4">Tasks</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What are you working on?"
            className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Add
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-5 h-5 rounded accent-white"
            />
            <span className={`flex-1 text-white ${task.completed ? 'line-through opacity-60' : ''}`}>
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-white/60 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;