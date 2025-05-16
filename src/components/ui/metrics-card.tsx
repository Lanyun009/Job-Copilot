
import React from 'react';
import { cn } from '@/lib/utils';

interface MetricsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function MetricsCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
  ...props
}: MetricsCardProps) {
  return (
    <div
      className={cn("metrics-card", className)}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h4 className="text-2xl font-semibold mt-1">{value}</h4>
        </div>
        {icon && <div className="text-copilot-primary">{icon}</div>}
      </div>
      
      {(description || trend) && (
        <div className="mt-2 flex items-center gap-2">
          {trend && (
            <span 
              className={cn(
                "text-xs font-medium",
                trend.isPositive ? "text-copilot-success" : "text-copilot-danger"
              )}
            >
              {trend.isPositive ? "+" : ""}{trend.value}%
            </span>
          )}
          {description && (
            <span className="text-xs text-gray-500">{description}</span>
          )}
        </div>
      )}
    </div>
  );
}
