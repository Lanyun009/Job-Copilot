
import React from 'react';
import { Calendar, Clock, Building } from 'lucide-react';

interface InterviewItem {
  id: string;
  company: string;
  position: string;
  date: string;
  time: string;
  interviewer?: string;
  type: string;
}

const interviewData: InterviewItem[] = [
  {
    id: '1',
    company: 'Google',
    position: 'Senior Product Manager',
    date: 'Tue, May 20, 2025',
    time: '10:00 AM PST',
    interviewer: 'Sarah Chen, Director of Product',
    type: 'Initial Screening',
  },
  {
    id: '2',
    company: 'Airbnb',
    position: 'Group Product Manager',
    date: 'Thu, May 22, 2025',
    time: '2:30 PM PST',
    type: 'Technical Interview',
  },
  {
    id: '3',
    company: 'Meta',
    position: 'Product Lead',
    date: 'Fri, May 23, 2025',
    time: '11:15 AM PST',
    interviewer: 'Michael Wong, VP of Product',
    type: 'Behavioral Round',
  },
];

const UpcomingInterviews: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-lg">Upcoming Interviews</h3>
        <p className="text-sm text-gray-500 mt-1">Scheduled interviews for next 7 days</p>
      </div>
      
      <div className="divide-y divide-gray-100">
        {interviewData.map((interview) => (
          <div key={interview.id} className="p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-base">{interview.company}</h4>
              <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                {interview.type}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mt-1">{interview.position}</p>
            
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">{interview.date}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">{interview.time}</span>
              </div>
            </div>
            
            {interview.interviewer && (
              <div className="mt-2 flex items-center">
                <Building className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">{interview.interviewer}</span>
              </div>
            )}
            
            <div className="mt-3">
              <button className="text-sm font-medium text-copilot-primary">
                Prepare for Interview
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <button className="text-sm text-copilot-primary font-medium">
          View all interviews
        </button>
      </div>
    </div>
  );
};

export default UpcomingInterviews;
