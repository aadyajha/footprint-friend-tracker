
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface CompanyData {
  id: string;
  name: string;
  logo: string;
  category: string;
  dataPoints: string[];
  riskLevel: 'low' | 'medium' | 'high';
  status: 'active' | 'pending' | 'removed';
}

interface CompanyCardProps {
  company: CompanyData;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'low':
        return <Badge className="bg-green-500">Low Risk</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-500">Medium Risk</Badge>;
      case 'high':
        return <Badge className="bg-red-500">High Risk</Badge>;
      default:
        return null;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="outline" className="border-blue-500 text-blue-500">Active</Badge>;
      case 'pending':
        return <Badge variant="outline" className="border-orange-500 text-orange-500">Pending</Badge>;
      case 'removed':
        return <Badge variant="outline" className="border-green-500 text-green-500">Removed</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3 items-center">
            <div className="bg-secondary rounded-lg p-2 w-12 h-12 flex items-center justify-center">
              <img src={company.logo} alt={company.name} className="max-w-full max-h-full" />
            </div>
            <div>
              <h3 className="font-medium">{company.name}</h3>
              <p className="text-sm text-muted-foreground">{company.category}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {getRiskBadge(company.riskLevel)}
            {getStatusBadge(company.status)}
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm font-medium mb-1">Data collected:</p>
          <div className="flex flex-wrap gap-1">
            {company.dataPoints.slice(0, 3).map((point, index) => (
              <Badge key={index} variant="secondary" className="text-xs">{point}</Badge>
            ))}
            {company.dataPoints.length > 3 && (
              <Badge variant="secondary" className="text-xs">+{company.dataPoints.length - 3} more</Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-end gap-2">
        <Button variant="outline" size="sm">View Details</Button>
        {company.status === 'active' && (
          <Button size="sm">Request Removal</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
