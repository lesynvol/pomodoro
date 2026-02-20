import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useAppStore } from '../store/useTimerStore';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useAppStore((state) => state.theme);

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
    }`}>
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;