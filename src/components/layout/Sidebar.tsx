
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FileText, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Settings, 
  BarChart 
} from 'lucide-react';
import { cn } from '@/lib/utils';

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

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="hidden md:flex flex-col w-64 bg-sidebar border-r border-gray-200 h-screen sticky top-0">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-copilot-primary flex items-center justify-center">
            <span className="text-white font-bold">CC</span>
          </div>
          <h1 className="text-xl font-bold ml-2 text-gray-800">Career Copilot</h1>
        </div>
        <p className="text-xs text-gray-500 mt-1">Your Job Search Assistant</p>
      </div>
      
      <nav className="flex-1 py-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={cn(
                  "nav-link",
                  location.pathname === item.path && "active"
                )}
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
            <span className="text-gray-700 font-medium">LY</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">Senior PM</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
