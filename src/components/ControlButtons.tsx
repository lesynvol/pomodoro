import { useTimerStore } from '../store/useTimerStore';

const ControlButtons = () => {
  const { isRunning, toggleTimer, resetTimer } = useTimerStore();

  return (
    <div className="flex gap-4 justify-center mt-8">
      <button
        onClick={toggleTimer}
        className="px-12 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        {isRunning ? 'PAUSE' : 'START'}
      </button>
      <button
        onClick={resetTimer}
        className="px-8 py-4 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-all"
      >
        Reset
      </button>
    </div>
  );
};

export default ControlButtons;