
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const InterviewPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Interview Preparation</h2>
          <p className="text-gray-500 mt-1">Prepare for interviews with company-specific guidance</p>
        </div>
        
        <div className="flex gap-3">
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            Start Practice
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Interview Preparation</CardTitle>
          <CardDescription>Coming soon! This feature is under development.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <MessageSquare className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">Interview Preparation Module</h3>
          <p className="text-sm text-gray-500 text-center max-w-md mb-6">
            This module will help you prepare for interviews with company-specific questions, 
            guidance on evaluation criteria, and AI-powered practice sessions with feedback.
          </p>
          <Button>Join Waitlist</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default InterviewPage;
