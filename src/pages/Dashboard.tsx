
import React from 'react';
import ApplicationMetrics from '@/components/dashboard/ApplicationMetrics';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import JobMatchChart from '@/components/dashboard/JobMatchChart';
import UpcomingInterviews from '@/components/dashboard/UpcomingInterviews';
import { Button } from '@/components/ui/button';
import { ProgressRing } from '@/components/ui/progress-ring';
import { ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome back, Lan!</h2>
          <p className="text-gray-500 mt-1">Here's what's happening with your job search</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline">View Applications</Button>
          <Button>
            Track New Job
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <ApplicationMetrics />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <JobMatchChart />
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-lg">Job Search Readiness</h3>
            <p className="text-sm text-gray-500 mt-1">Your profile completeness</p>
          </div>
          
          <div className="p-6 flex flex-col items-center">
            <ProgressRing value={78} size={120} color="#2563eb" label="Overall Score" />
            
            <div className="mt-8 w-full space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Resume</span>
                  <span className="text-sm text-gray-500">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-copilot-success rounded-full h-2" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Network</span>
                  <span className="text-sm text-gray-500">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-copilot-primary rounded-full h-2" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Interview Prep</span>
                  <span className="text-sm text-gray-500">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-copilot-info rounded-full h-2" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
            
            <Button className="mt-6 w-full">Improve Your Profile</Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityFeed />
        <UpcomingInterviews />
      </div>
    </div>
  );
};

export default Dashboard;
