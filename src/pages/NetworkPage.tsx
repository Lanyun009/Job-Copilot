
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const NetworkPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Network Analysis</h2>
          <p className="text-gray-500 mt-1">Leverage your connections for referrals and insights</p>
        </div>
        
        <div className="flex gap-3">
          <Button>
            <Users className="mr-2 h-4 w-4" />
            Import Connections
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Network Analysis</CardTitle>
          <CardDescription>Coming soon! This feature is under development.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">Network Analysis Module</h3>
          <p className="text-sm text-gray-500 text-center max-w-md mb-6">
            This module will analyze your professional network to identify strong and weak connections 
            for referrals at target companies. Import your LinkedIn connections to get started.
          </p>
          <Button>Join Waitlist</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NetworkPage;
