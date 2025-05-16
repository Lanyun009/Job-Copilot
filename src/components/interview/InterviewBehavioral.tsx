
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const InterviewBehavioral: React.FC = () => {
  const questions = [
    {
      id: '1',
      question: 'Tell me about a time when you had to manage a difficult stakeholder.',
      category: 'Leadership'
    },
    {
      id: '2',
      question: 'Describe a situation where you had to make a difficult decision with limited information.',
      category: 'Decision Making'
    },
    {
      id: '3',
      question: 'Give me an example of when you had to persuade a team to adopt your approach.',
      category: 'Influence'
    },
    {
      id: '4',
      question: 'Describe a time when you failed to meet an objective and what you learned.',
      category: 'Learning'
    },
    {
      id: '5',
      question: 'Tell me about a time when you had to resolve a conflict within your team.',
      category: 'Conflict Resolution'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-3">STAR Framework for Behavioral Questions</h3>
        <p className="text-sm text-gray-700 mb-4">Follow this framework to structure your answers effectively:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-blue-700">Situation</h4>
            <p className="text-sm mt-1">Set the context with specific details about the situation you were in.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-blue-700">Task</h4>
            <p className="text-sm mt-1">Describe your responsibility or the challenge you were facing.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-blue-700">Action</h4>
            <p className="text-sm mt-1">Explain what you did to address the challenge. Be specific about YOUR contributions.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-blue-700">Result</h4>
            <p className="text-sm mt-1">Share the outcomes of your actions, preferably with quantifiable metrics.</p>
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
                        <h4 className="text-sm font-medium text-blue-700">Situation</h4>
                        <p className="text-sm mt-1 text-gray-500">Describe the context...</p>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="Start with a specific situation that provides context..."
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-blue-700">Task</h4>
                        <p className="text-sm mt-1 text-gray-500">What was your objective?</p>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="Explain what you were trying to achieve..."
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-blue-700">Action</h4>
                        <p className="text-sm mt-1 text-gray-500">What steps did you take?</p>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="Detail the specific actions you took..."
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-blue-700">Result</h4>
                        <p className="text-sm mt-1 text-gray-500">What was the outcome?</p>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="Share the impact and results, with metrics if possible..."
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

export default InterviewBehavioral;
