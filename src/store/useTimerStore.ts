import { create } from 'zustand';

type Mode = 'pomodoro' | 'shortBreak' | 'longBreak';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  pomodoros: number;
}

interface TimerState {
  mode: Mode;
  timeLeft: number;
  isRunning: boolean;
  tasks: Task[];
  currentTaskId: string | null;
  
  setMode: (mode: Mode) => void;
  setTimeLeft: (time: number) => void;
  toggleTimer: () => void;
  resetTimer: () => void;
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  setCurrentTask: (id: string) => void;
}

const POMODORO_TIME = 25 * 60;
const SHORT_BREAK = 5 * 60;
const LONG_BREAK = 15 * 60;

export const useTimerStore = create<TimerState>((set) => ({
  mode: 'pomodoro',
  timeLeft: POMODORO_TIME,
  isRunning: false,
  tasks: [],
  currentTaskId: null,

  setMode: (mode) => {
    const time = mode === 'pomodoro' ? POMODORO_TIME : 
                 mode === 'shortBreak' ? SHORT_BREAK : LONG_BREAK;
    set({ mode, timeLeft: time, isRunning: false });
  },

  setTimeLeft: (time) => set({ timeLeft: time }),
  
  toggleTimer: () => set((state) => ({ isRunning: !state.isRunning })),
  
  resetTimer: () => set((state) => ({
    timeLeft: state.mode === 'pomodoro' ? POMODORO_TIME :
              state.mode === 'shortBreak' ? SHORT_BREAK : LONG_BREAK,
    isRunning: false
  })),

  addTask: (title) => set((state) => ({
    tasks: [...state.tasks, {
      id: Date.now().toString(),
      title,
      completed: false,
      pomodoros: 0
    }]
  })),

  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  })),

  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  })),

  setCurrentTask: (id) => set({ currentTaskId: id })
}));