import { useEffect } from 'react';
import { useTimerStore } from '../store/useTimerStore';

const CircularTimer = () => {
  const { timeLeft, isRunning, setTimeLeft, mode } = useTimerStore();

  const totalTime = mode === 'pomodoro' ? 25 * 60 : 
                    mode === 'shortBreak' ? 5 * 60 : 15 * 60;
  
  const progress = (timeLeft / totalTime) * 100;
  const strokeDashoffset = 565 - (565 * progress) / 100;

  useEffect(() => {
    let interval: number;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, setTimeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
      <svg className="transform -rotate-90 w-full h-full">
        {/* Background circle */}
        <circle
          cx="50%"
          cy="50%"
          r="90"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="50%"
          cy="50%"
          r="90"
          stroke="white"
          strokeWidth="8"
          fill="none"
          strokeDasharray="565"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl md:text-7xl font-bold text-white">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularTimer;