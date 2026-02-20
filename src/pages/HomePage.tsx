import Layout from '../components/Layout';
import { useAppStore } from '../store/useTimerStore';
import emptyStateImage from '../../public/emptyStateImage.png';

const HomePage = () => {
  const { tasks, theme } = useAppStore();
  const isEmpty = tasks.length === 0;

  const handleAddTask = () => {
    console.log('Add task clicked');
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-16">
            <img 
              src={emptyStateImage} 
              alt="No tasks" 
              className="w-60 mb-8"
            />
            <h2 className={`text-3xl font-medium mb-6 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              No tasks yet...
            </h2>
            <button
              onClick={handleAddTask}
              className={`px-8 py-2 rounded-lg border font-medium cursor-pointer ${
                theme === 'light'
                  ? 'border-gray-900 text-gray-800 hover:bg-gray-900 hover:text-white'
                  : 'border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-gray-900'
              }`}
            >
              Add task
            </button>
          </div>
        ) : (
          <div>
            <h1 className={`text-2xl font-bold mb-6 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Мої завдання
            </h1>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;