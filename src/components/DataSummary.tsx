
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface DataSummaryProps {
  stats: {
    totalCompanies: number;
    highRiskCompanies: number;
    removedCompanies: number;
    pendingRequests: number;
  };
}

const DataSummary: React.FC<DataSummaryProps> = ({ stats }) => {
  const pieChartData = [
    { name: "High Risk", value: stats.highRiskCompanies, color: "#ef4444" },
    { name: "Medium Risk", value: stats.totalCompanies - stats.highRiskCompanies - stats.removedCompanies, color: "#f59e0b" },
    { name: "Removed", value: stats.removedCompanies, color: "#10b981" },
  ];

  const progressPercentage = Math.round((stats.removedCompanies / stats.totalCompanies) * 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Privacy Risk Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-4xl font-bold">{100 - progressPercentage}</span>
              <span className="text-sm text-muted-foreground ml-1">/100</span>
              <p className="text-sm text-muted-foreground mt-1">
                {progressPercentage}% of your data has been removed
              </p>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium">Risk Level:</span>
              <p className={`font-medium ${progressPercentage < 30 ? 'text-red-500' : progressPercentage < 70 ? 'text-yellow-500' : 'text-green-500'}`}>
                {progressPercentage < 30 ? 'High' : progressPercentage < 70 ? 'Medium' : 'Low'}
              </p>
            </div>
          </div>

          <Progress className="h-2 mt-4" value={progressPercentage} />
          
          <div className="flex justify-between mt-2">
            <span className="text-xs text-muted-foreground">High Risk</span>
            <span className="text-xs text-muted-foreground">Low Risk</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Data Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom"
                  align="center"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataSummary;
