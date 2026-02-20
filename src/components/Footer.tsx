import { useAppStore } from '../store/useTimerStore';

const Footer = () => {
  const theme = useAppStore((state) => state.theme);

  return (
    <footer className={`border-t mt-auto ${
      theme === 'light' 
        ? 'bg-white border-gray-200 text-gray-600' 
        : 'bg-gray-900 border-gray-700 text-gray-400'
    }`}>
      <div className="container mx-auto px-4 py-4 text-center text-sm">
        <p>© 2024 Pomodoro Timer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;