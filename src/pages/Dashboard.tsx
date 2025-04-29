
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Settings, User } from 'lucide-react';
import CompanyCard, { CompanyData } from '@/components/CompanyCard';
import DataSummary from '@/components/DataSummary';
import { useNavigate } from 'react-router-dom';

// Mock company logos
const companyLogos = {
  google: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
  facebook: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
  amazon: "https://cdn-icons-png.flaticon.com/512/5968/5968217.png",
  apple: "https://cdn-icons-png.flaticon.com/512/0/747.png",
  twitter: "https://cdn-icons-png.flaticon.com/512/3670/3670151.png",
  netflix: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
  spotify: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
  microsoft: "https://cdn-icons-png.flaticon.com/512/732/732221.png"
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data
  const stats = {
    totalCompanies: 26,
    highRiskCompanies: 8,
    removedCompanies: 3,
    pendingRequests: 2
  };

  // Mock companies data
  const companiesData: CompanyData[] = [
    {
      id: '1',
      name: 'Google',
      logo: companyLogos.google,
      category: 'Search & Advertising',
      dataPoints: ['Email', 'Search History', 'Location', 'Device Info'],
      riskLevel: 'high',
      status: 'active'
    },
    {
      id: '2',
      name: 'Facebook',
      logo: companyLogos.facebook,
      category: 'Social Media',
      dataPoints: ['Email', 'Photos', 'Friends', 'Interests', 'Location'],
      riskLevel: 'high',
      status: 'active'
    },
    {
      id: '3',
      name: 'Amazon',
      logo: companyLogos.amazon,
      category: 'E-commerce',
      dataPoints: ['Email', 'Purchase History', 'Payment Info', 'Address'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '4',
      name: 'Apple',
      logo: companyLogos.apple,
      category: 'Technology',
      dataPoints: ['Email', 'Device Info', 'App Usage', 'Payment Info'],
      riskLevel: 'medium',
      status: 'pending'
    },
    {
      id: '5',
      name: 'Twitter',
      logo: companyLogos.twitter,
      category: 'Social Media',
      dataPoints: ['Email', 'Tweets', 'Followers', 'Interests'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '6',
      name: 'Netflix',
      logo: companyLogos.netflix,
      category: 'Entertainment',
      dataPoints: ['Email', 'Viewing History', 'Payment Info', 'Preferences'],
      riskLevel: 'low',
      status: 'removed'
    }
  ];

  const filteredCompanies = searchQuery 
    ? companiesData.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : companiesData;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 flex items-center justify-center">
              <Eye className="h-5 w-5 text-white" />
            </div>
            <h1 className="font-bold text-xl">FootprintFriend</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => navigate('/profile')}>
              <User className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => navigate('/settings')}>
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Your Digital Footprint</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalCompanies}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">High Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-500">{stats.highRiskCompanies}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Removed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-500">{stats.removedCompanies}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-amber-500">{stats.pendingRequests}</p>
            </CardContent>
          </Card>
        </div>
        
        <DataSummary stats={stats} />
        
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Companies With Your Data</h2>
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search companies..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="high-risk">High Risk</TabsTrigger>
              <TabsTrigger value="pending">Pending Removal</TabsTrigger>
              <TabsTrigger value="removed">Removed</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="high-risk" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies
                  .filter(company => company.riskLevel === 'high')
                  .map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pending" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies
                  .filter(company => company.status === 'pending')
                  .map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="removed" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies
                  .filter(company => company.status === 'removed')
                  .map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
