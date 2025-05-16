
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
          <p className="text-gray-500 mt-1">Manage your account and preferences</p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Coming soon! This feature is under development.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <Settings className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">Settings Module</h3>
          <p className="text-sm text-gray-500 text-center max-w-md mb-6">
            This module will allow you to manage your account settings, notification preferences,
            privacy controls, and subscription options.
          </p>
          <Button>Join Waitlist</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
