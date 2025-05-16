
import React from 'react';
import { cn } from '@/lib/utils';

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'application' | 'interview' | 'offer' | 'network';
}

const activityData: ActivityItem[] = [
  {
    id: '1',
    title: 'Amazon Application',
    description: 'Resume optimized and submitted for Senior PM position',
    time: '2 hours ago',
    type: 'application',
  },
  {
    id: '2',
    title: 'LinkedIn Connection',
    description: 'New connection with Engineering Manager at Meta',
    time: '3 hours ago',
    type: 'network',
  },
  {
    id: '3',
    title: 'Google Interview',
    description: 'Initial screening scheduled for next Tuesday',
    time: '1 day ago',
    type: 'interview',
  },
  {
    id: '4',
    title: 'Microsoft Offer',
    description: 'Offer received for Principal PM position',
    time: '3 days ago',
    type: 'offer',
  },
  {
    id: '5',
    title: 'Airbnb Application',
    description: 'Resume optimized and submitted for Senior PM position',
    time: '4 days ago',
    type: 'application',
  },
];

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-lg">Recent Activity</h3>
      </div>
      
      <div className="divide-y divide-gray-100">
        {activityData.map((item) => (
          <div key={item.id} className="px-6 py-4 flex items-start gap-4">
            <div 
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0",
                item.type === 'application' && "bg-blue-100 text-blue-600",
                item.type === 'interview' && "bg-purple-100 text-purple-600",
                item.type === 'offer' && "bg-green-100 text-green-600",
                item.type === 'network' && "bg-amber-100 text-amber-600",
              )}
            >
              <span className="text-sm font-medium uppercase">
                {item.type.charAt(0)}
              </span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-medium">{item.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <p className="text-xs text-gray-400 mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <button className="text-sm text-copilot-primary font-medium">
          View all activity
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;
