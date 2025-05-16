
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Search, 
  ChevronDown, 
  Star, 
  MapPin, 
  Building, 
  Clock, 
  BarChart, 
  Briefcase, 
  Filter 
} from 'lucide-react';
import { MetricsCard } from '@/components/ui/metrics-card';

const jobOpportunities = [
  {
    id: '1',
    title: 'Senior Product Manager',
    company: 'Amazon',
    location: 'Seattle, WA (Remote option)',
    type: 'Full-time',
    salary: '$160K - $210K',
    posted: '2 days ago',
    matchRate: 94,
    isHot: true,
  },
  {
    id: '2',
    title: 'Group Product Manager',
    company: 'Meta',
    location: 'Menlo Park, CA',
    type: 'Full-time',
    salary: '$180K - $220K',
    posted: '3 days ago',
    matchRate: 87,
    isHot: true,
  },
  {
    id: '3',
    title: 'Product Lead - AI/ML',
    company: 'Google',
    location: 'Mountain View, CA (Hybrid)',
    type: 'Full-time',
    salary: '$175K - $225K',
    posted: '1 week ago',
    matchRate: 82,
    isHot: false,
  },
  {
    id: '4',
    title: 'Senior PM - Platform',
    company: 'Microsoft',
    location: 'Redmond, WA',
    type: 'Full-time',
    salary: '$150K - $200K',
    posted: '2 weeks ago',
    matchRate: 78,
    isHot: false,
  },
];

const JobsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Job Opportunities</h2>
          <p className="text-gray-500 mt-1">Discover and track the perfect job matches</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button>
            <Briefcase className="mr-2 h-4 w-4" />
            Track New Job
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricsCard
          title="Matching Jobs"
          value="24"
          description="Based on your profile"
          icon={<BarChart className="h-5 w-5" />}
        />
        
        <MetricsCard
          title="Average Match Rate"
          value="82%"
          description="Across all tracked jobs"
          icon={<BarChart className="h-5 w-5" />}
        />
        
        <div className="relative">
          <div className="bg-white rounded-lg border border-gray-100 p-4 flex items-center w-full shadow-sm">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for jobs, companies, or keywords..."
              className="flex-1 border-none p-0 focus:outline-none text-sm"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Best Matches (24)</h3>
        
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Sort by:</span>
          <button className="flex items-center text-sm font-medium">
            Match Rate
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {jobOpportunities.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-9 p-6">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium">{job.title}</h3>
                      {job.isHot && (
                        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full font-medium">
                          Hot
                        </span>
                      )}
                    </div>
                    <Button variant="ghost" size="icon">
                      <Star className="h-5 w-5 text-gray-400" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Building className="mr-1.5 h-4 w-4 text-gray-400" />
                      <span className="text-sm">{job.company}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin className="mr-1.5 h-4 w-4 text-gray-400" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-1.5 h-4 w-4 text-gray-400" />
                      <span className="text-sm">Posted {job.posted}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {job.salary}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button size="sm">Track This Job</Button>
                  </div>
                </div>
                
                <div className="md:col-span-3 bg-gray-50 p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-100">
                  <div className="mb-2">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-copilot-primary">
                      <span className="text-xl font-bold">{job.matchRate}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 text-center">Match Rate</p>
                  
                  <div className="w-full mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-500">Skills</span>
                      <span className="text-xs text-gray-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-copilot-primary rounded-full h-1.5" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div className="w-full mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-500">Experience</span>
                      <span className="text-xs text-gray-500">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-copilot-primary rounded-full h-1.5" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="w-full mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-500">Location</span>
                      <span className="text-xs text-gray-500">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-copilot-primary rounded-full h-1.5" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Button variant="outline">
          Load More Jobs
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default JobsPage;
