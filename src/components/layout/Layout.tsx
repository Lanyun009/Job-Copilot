
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileSidebar from './MobileSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const getPageTitle = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Dashboard';
    case '/resume':
      return 'Resume Optimization';
    case '/jobs':
      return 'Job Opportunities';
    case '/network':
      return 'Network Analysis';
    case '/interview':
      return 'Interview Preparation';
    case '/settings':
      return 'Settings';
    default:
      return 'Career Copilot';
  }
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  
  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <MobileSidebar isOpen={mobileSidebarOpen} onClose={toggleMobileSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header toggleMobileSidebar={toggleMobileSidebar} title={pageTitle} />
        
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
