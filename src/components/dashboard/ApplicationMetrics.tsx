
import React from 'react';
import { BarChart, ArrowUpRight, ArrowDownRight, Clock, Star } from 'lucide-react';
import { MetricsCard } from '@/components/ui/metrics-card';

const ApplicationMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricsCard
        title="ATS Success Rate"
        value="92%"
        description="Last 30 days"
        trend={{ value: 12, isPositive: true }}
        icon={<ArrowUpRight className="h-5 w-5" />}
      />
      
      <MetricsCard
        title="Interview Conversion"
        value="54%"
        description="First-round rate"
        trend={{ value: 8, isPositive: true }}
        icon={<BarChart className="h-5 w-5" />}
      />
      
      <MetricsCard
        title="Offer Rate"
        value="28%"
        description="Full loop conversion"
        trend={{ value: 2, isPositive: false }}
        icon={<ArrowDownRight className="h-5 w-5" />}
      />
      
      <MetricsCard
        title="Median Response"
        value="4.2 days"
        description="From application"
        icon={<Clock className="h-5 w-5" />}
      />
    </div>
  );
};

export default ApplicationMetrics;
