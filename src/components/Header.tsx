import { Link } from 'react-router-dom';
import { useAppStore } from '../store/useTimerStore';

import logoLight from '../../public/logo_light.svg';
import logoDark from '../../public/logo_dark.svg';
import statisticsLight from '../../public/icons/statistics_light.svg';
import statisticsDark from '../../public/icons/statistics_dark.svg';
import archiveLight from '../../public/icons/archieve_light.svg';
import archiveDark from '../../public/icons/archieve_dark.svg';
import profileLight from '../../public/icons/profile_light.svg';
import profileDark from '../../public/icons/profile_dark.svg';

const Header = () => {
  const theme = useAppStore((state) => state.theme);
  
  const icons = {
    logo: theme === 'light' ? logoLight : logoDark,
    statistics: theme === 'light' ? statisticsLight : statisticsDark,
    archive: theme === 'light' ? archiveLight : archiveDark,
    profile: theme === 'light' ? profileLight : profileDark,
  };

  return (
    <header className={`border-b ${
      theme === 'light' 
        ? 'bg-white border-gray-200' 
        : 'bg-gray-900 border-gray-700'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={icons.logo}
            alt="Pomodoro Logo" 
            className="h-10"
          />
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/statistics" className="hover:opacity-70 transition">
            <img 
              src={icons.statistics} 
              alt="Statistics" 
              className="h-8 w-8"
            />
          </Link>
          
          <Link to="/archive" className="hover:opacity-70 transition">
            <img 
              src={icons.archive}
              alt="Archive" 
              className="h-8 w-8"
            />
          </Link>
          
          <Link to="/profile" className="hover:opacity-70 transition">
            <img 
              src={icons.profile}
              alt="Profile" 
              className="rounded-full h-10 w-10 object-cover"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;