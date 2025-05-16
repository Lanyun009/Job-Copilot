
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, Menu } from 'lucide-react';

interface HeaderProps {
  toggleMobileSidebar: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileSidebar, title }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMobileSidebar}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            <span className="sr-only">Notifications</span>
          </Button>
          
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">Upgrade Plan</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
