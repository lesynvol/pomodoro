import ModeSelector from '../components/ModeSelector';
import CircularTimer from '../components/CircularTimer';
import ControlButtons from '../components/ControlButtons';
import TaskList from '../components/TaskList';

const Timer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 p-4 md:p-8">
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
          Pomodoro Timer
        </h1>
        
        <ModeSelector />
        <CircularTimer />
        <ControlButtons />
        <TaskList />
      </div>
    </div>
  );
};

export default Timer;