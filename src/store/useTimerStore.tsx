import { create } from 'zustand';

interface User {
  uid: string;
  email: string;
  displayName?: string;
}

type Mode = 'pomodoro' | 'shortBreak' | 'longBreak';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  estimatedPomodoros: number;
  completedPomodoros: number;
  createdAt: number;
}

interface AppState {
  user: User | null;
  setUser: (user: User | null) => void;
  
  mode: Mode;
  timeLeft: number;
  isRunning: boolean;
  currentTaskId: string | null;
  
  tasks: Task[];
  
  setMode: (mode: Mode) => void;
  toggleTimer: () => void;
  resetTimer: () => void;
  tick: () => void;
  
  addTask: (title: string, estimatedPomodoros: number) => void;
  completePomodoro: (taskId: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  setCurrentTask: (id: string | null) => void;
}

const TIMES = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

export const useAppStore = create<AppState>((set) => ({
  user: null,
  mode: 'pomodoro',
  timeLeft: TIMES.pomodoro,
  isRunning: false,
  tasks: [],
  currentTaskId: null,

  setUser: (user) => set({ user }),

  setMode: (mode) => set({
    mode,
    timeLeft: TIMES[mode],
    isRunning: false,
  }),

  toggleTimer: () => set((state) => ({ isRunning: !state.isRunning })),

  resetTimer: () => set((state) => ({
    timeLeft: TIMES[state.mode],
    isRunning: false,
  })),

  tick: () => set((state) => {
    if (!state.isRunning || state.timeLeft === 0) return state;
    return { timeLeft: state.timeLeft - 1 };
  }),

  addTask: (title, estimatedPomodoros = 1) => set((state) => ({
    tasks: [...state.tasks, {
      id: crypto.randomUUID(),
      title,
      completed: false,
      estimatedPomodoros,
      completedPomodoros: 0,
      createdAt: Date.now(),
    }],
  })),

  completePomodoro: (taskId) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === taskId
        ? { ...task, completedPomodoros: task.completedPomodoros + 1 }
        : task
    ),
  })),

  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ),
  })),

  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id),
    currentTaskId: state.currentTaskId === id ? null : state.currentTaskId,
  })),

  setCurrentTask: (id) => set({ currentTaskId: id }),
}));