
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
            <h4 className="font-medium text-green-700">1. Clarify</h4>
            <p className="text-sm mt-1">Take your time to understand the problem with a 30s pause.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">2. Product Mission & Goal</h4>
            <p className="text-sm mt-1">What problem are we solving? Why does it matter to users and the company?</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">3. User Segmentation</h4>
            <p className="text-sm mt-1">Identify user segments and their unique needs.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">4. User Needs & Pain Points</h4>
            <p className="text-sm mt-1">Current user journey, friction points, and their significance.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">5. Solutions</h4>
            <p className="text-sm mt-1">Propose solutions that address the identified pain points.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-medium text-green-700">6. Metrics</h4>
            <p className="text-sm mt-1">Define how to measure the success of your solution.</p>
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
                        <h4 className="text-sm font-medium text-green-700">1. Clarify</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="Take time to understand the problem (30s pause). What clarifying questions would you ask?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-green-700">2. Product Mission & Goal</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What problem are we solving? Why does it matter to users and the company? What alternatives exist? Why should the company care?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-green-700">3. User Segmentation</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What are the broad user segments? How can we further segment into specific users? Does each segment have unique needs?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-green-700">4. User Needs & Pain Points</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What steps would users take today? What friction exists at each step? How significant is it? Should the company care about these pain points?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-green-700">5. Solutions</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="What solutions would you propose to address the identified pain points?"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-green-700">6. Metrics</h4>
                        <textarea 
                          className="mt-2 w-full rounded-md border border-gray-300 p-3 text-sm min-h-[80px]" 
                          placeholder="How would you measure the success of your solution?"
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
