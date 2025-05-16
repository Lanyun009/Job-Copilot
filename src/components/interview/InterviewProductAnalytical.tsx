
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const InterviewProductAnalytical: React.FC = () => {
  const questions = [
    {
      id: '1',
      question: "Your product's active users decreased by 20% this month. How would you investigate?",
      category: 'Metrics Analysis'
    },
    {
      id: '2',
      question: 'How would you measure the success of a new feature in a messaging app?',
      category: 'Success Metrics'
    },
    {
      id: '3',
      question: 'You need to decide whether to launch a feature. What metrics would you consider?',
      category: 'Decision Making'
    },
    {
      id: '4',
      question: 'How would you analyze whether a subscription model would work for your product?',
      category: 'Business Model'
    },
    {
      id: '5',
      question: 'Your company wants to enter a new market. How would you analyze the opportunity?',
      category: 'Market Analysis'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Product Analytical Framework</h3>
        <p className="text-sm text-gray-700 mb-4">Use this approach for analytical and metrics-based questions:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-purple-700">Define the Problem</h4>
            <p className="text-sm mt-1">Clearly articulate what you're trying to analyze.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-purple-700">Key Metrics</h4>
            <p className="text-sm mt-1">Identify the relevant metrics to examine.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-purple-700">Data Collection</h4>
            <p className="text-sm mt-1">Describe how you would gather necessary data.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-purple-700">Analysis Approach</h4>
            <p className="text-sm mt-1">Outline how you would analyze the collected data.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-purple-700">Possible Hypotheses</h4>
            <p className="text-sm mt-1">Provide potential explanations for observed patterns.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-purple-700">Recommendations</h4>
            <p className="text-sm mt-1">Suggest actions based on your analysis.</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Practice Questions</h3>
        
        <Accordion type="single" collapsible className="w-full">
          {questions.map((q) => (
            <AccordionItem key={q.id} value={q.id}>
              <AccordionTrigger className="text-left">
                <div>
                  <span className="text-sm font-medium">{q.question}</span>
                  <div className="text-xs mt-1 text-gray-500">Category: {q.category}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-purple-700">Define the Problem</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What specifically are you trying to analyze or understand?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-purple-700">Key Metrics</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What metrics would you look at and why?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-purple-700">Data Collection</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="How would you collect the necessary data?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-purple-700">Analysis Approach</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="Describe your approach to analyzing this data..."
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-purple-700">Possible Hypotheses</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What are 2-3 possible explanations for what you might observe?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-purple-700">Recommendations</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What actions would you recommend based on your analysis?"
                        />
                      </div>
                      
                      <div className="flex justify-end pt-2">
                        <Button size="sm">Save Response</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default InterviewProductAnalytical;
