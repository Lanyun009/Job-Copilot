
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InterviewBehavioral from '@/components/interview/InterviewBehavioral';
import InterviewProductSense from '@/components/interview/InterviewProductSense';
import InterviewProductAnalytical from '@/components/interview/InterviewProductAnalytical';

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
          <CardDescription>Practice different types of interview questions with guided frameworks</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="behavioral" className="w-full">
            <TabsList className="mb-4 w-full justify-start">
              <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
              <TabsTrigger value="product-sense">Product Sense</TabsTrigger>
              <TabsTrigger value="product-analytical">Product Analytical</TabsTrigger>
            </TabsList>
            
            <TabsContent value="behavioral">
              <InterviewBehavioral />
            </TabsContent>
            
            <TabsContent value="product-sense">
              <InterviewProductSense />
            </TabsContent>
            
            <TabsContent value="product-analytical">
              <InterviewProductAnalytical />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default InterviewPage;
