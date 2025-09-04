
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FileText, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Settings, 
  BarChart, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <BarChart className="w-5 h-5" />,
  },
  {
    title: 'Resume Optimization',
    path: '/resume',
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: 'Job Opportunities',
    path: '/jobs',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: 'Network Analysis',
    path: '/network',
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: 'Interview Prep',
    path: '/interview',
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Settings className="w-5 h-5" />,
  },
];

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  // Close sidebar when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);
  
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <>
      <div 
        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      <aside className="md:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 animate-fade-in">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-copilot-primary flex items-center justify-center">
              <span className="text-white font-bold">CC</span>
            </div>
            <h1 className="text-xl font-bold ml-2 text-gray-800">Career Copilot</h1>
          </div>
          
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="py-6 px-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={cn(
                    "nav-link",
                    location.pathname === item.path && "active"
                  )}
                  onClick={onClose}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-700 font-medium">JD</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Senior PM</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
