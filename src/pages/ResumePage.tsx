
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Upload, Check, Plus } from 'lucide-react';
import { ProgressRing } from '@/components/ui/progress-ring';

const ResumeTemplates = [
  {
    id: '1',
    name: 'FAANG PM Template',
    description: 'Emphasizes product lifecycle management, cross-functional collaboration, and data-driven decision-making',
    matchRate: 95,
    isRecommended: true,
  },
  {
    id: '2',
    name: 'Startup Template',
    description: 'Highlights 0-to-1 experience and innovation in resource-constrained environments',
    matchRate: 82,
    isRecommended: false,
  },
  {
    id: '3',
    name: 'Enterprise SaaS Template',
    description: 'Focuses on large-scale implementations, stakeholder management, and business metrics',
    matchRate: 78,
    isRecommended: false,
  },
];

const ResumePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Resume Optimization</h2>
          <p className="text-gray-500 mt-1">Craft the perfect resume to land your dream job</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import Resume
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Create New Resume
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="master" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="master">Master Resume</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="ats">ATS Optimization</TabsTrigger>
        </TabsList>
        
        <TabsContent value="master" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Master Resume</CardTitle>
                  <CardDescription>
                    Your comprehensive resume with all experiences. Use this as a base for job-specific versions.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-6 min-h-[300px] border border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Master Resume Yet</h3>
                      <p className="text-sm text-gray-500 mb-4">Upload your existing resume or create a new one</p>
                      <div className="flex gap-3 justify-center">
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload Resume
                        </Button>
                        <Button size="sm">
                          <Plus className="mr-2 h-4 w-4" />
                          Create New
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between border-t pt-6">
                  <p className="text-sm text-gray-500">Last updated: Never</p>
                  <Button variant="outline" disabled>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Resume Stats</CardTitle>
                  <CardDescription>
                    Your resume performance metrics
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex justify-center mb-6">
                    <ProgressRing 
                      value={0} 
                      size={120} 
                      color="#2563eb" 
                      label="ATS Score" 
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Keywords</span>
                        <span className="text-sm text-gray-500">0%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-copilot-primary rounded-full h-2" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Format</span>
                        <span className="text-sm text-gray-500">0%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-copilot-primary rounded-full h-2" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Content Quality</span>
                        <span className="text-sm text-gray-500">0%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-copilot-primary rounded-full h-2" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="templates" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ResumeTemplates.map((template) => (
              <Card key={template.id} className={template.isRecommended ? "border-copilot-primary" : ""}>
                {template.isRecommended && (
                  <div className="bg-copilot-primary text-white text-xs font-semibold px-3 py-1 absolute right-4 top-4 rounded-full">
                    Recommended
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle>{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Match Rate</span>
                      <span className="text-sm text-gray-500">{template.matchRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-copilot-primary rounded-full h-2" 
                        style={{ width: `${template.matchRate}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <Check className="h-4 w-4 text-copilot-success" />
                    <span>ATS-Optimized Layout</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <Check className="h-4 w-4 text-copilot-success" />
                    <span>Industry-Specific Keywords</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-copilot-success" />
                    <span>STAR Format Examples</span>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full">Use This Template</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ats" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>ATS Optimization</CardTitle>
              <CardDescription>
                Analyze your resume against job descriptions to improve match rate
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-dashed border-gray-300">
                  <h3 className="text-base font-medium mb-3">Job Description</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Paste the job description here to analyze keyword match
                  </p>
                  <textarea
                    className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-copilot-primary text-sm"
                    placeholder="Paste job description here..."
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-dashed border-gray-300">
                  <h3 className="text-base font-medium mb-3">Your Resume</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Upload or paste your resume content for analysis
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Resume
                    </Button>
                    <p className="text-sm text-center">or</p>
                    <textarea
                      className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-copilot-primary text-sm"
                      placeholder="Paste resume content here..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full">Analyze Resume Match</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumePage;
