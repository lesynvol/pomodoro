import { useTimerStore } from '../store/useTimerStore';

const ModeSelector = () => {
  const { mode, setMode } = useTimerStore();

  const modes = [
    { key: 'pomodoro', label: 'Pomodoro' },
    { key: 'shortBreak', label: 'Short Break' },
    { key: 'longBreak', label: 'Long Break' }
  ] as const;

  return (
    <div className="flex gap-2 justify-center mb-8 flex-wrap">
      {modes.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setMode(key)}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            mode === key
              ? 'bg-white text-purple-600 shadow-lg'
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ModeSelector;