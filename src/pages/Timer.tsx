import Header from '../components/Header';
import { useAppStore } from '../store/useTimerStore';

const Timer = () => {
  const { theme, toggleTheme } = useAppStore();

  return (
    <div className={theme === 'light' ? 'bg-white min-h-screen' : 'bg-gray-900 min-h-screen'}>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    </div>
  );
};

export default Timer;