
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const InterviewProductSense: React.FC = () => {
  const questions = [
    {
      id: '1',
      question: 'Design a product to help people find and book travel accommodations.',
      category: 'Product Design'
    },
    {
      id: '2',
      question: 'How would you improve Facebook Marketplace?',
      category: 'Product Improvement'
    },
    {
      id: '3',
      question: 'Design a product to help remote teams collaborate more effectively.',
      category: 'Product Design'
    },
    {
      id: '4',
      question: 'How would you design a product for elderly users?',
      category: 'User-Centered Design'
    },
    {
      id: '5',
      question: 'Design a new feature for a food delivery app.',
      category: 'Feature Design'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Product Sense Framework</h3>
        <p className="text-sm text-gray-700 mb-4">Use this structured approach for product design questions:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">Problem Statement</h4>
            <p className="text-sm mt-1">Define the core problem you're trying to solve.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">Clarifying Questions</h4>
            <p className="text-sm mt-1">Ask questions to better understand the problem scope.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">Target Users</h4>
            <p className="text-sm mt-1">Identify who will use this product and their needs.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">Pain Points</h4>
            <p className="text-sm mt-1">List key user pain points (1, 2, 3) to address.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">Prioritization</h4>
            <p className="text-sm mt-1">Decide which pain points to address first and why.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">Outcome & Success Metrics</h4>
            <p className="text-sm mt-1">Define the desired outcome and how to measure success.</p>
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
                        <h4 className="text-sm font-medium text-green-700">Problem Statement</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What is the core problem you're trying to solve?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-green-700">Clarifying Questions</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What questions would you ask to better understand the problem?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-green-700">Target Users</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="Who are the primary users? What are their characteristics?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-green-700">Pain Points</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="List 3 key pain points the users experience..."
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-green-700">Prioritization</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="How would you prioritize addressing these pain points?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-green-700">Outcome & Success Metrics</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What's the desired outcome? How will you measure success?"
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

export default InterviewProductSense;
