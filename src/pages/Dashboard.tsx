
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Settings, User, Eye } from 'lucide-react';
import CompanyCard, { CompanyData } from '@/components/CompanyCard';
import DataSummary from '@/components/DataSummary';
import { useNavigate } from 'react-router-dom';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// Mock company logos
const companyLogos = {
  google: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
  facebook: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
  amazon: "https://cdn-icons-png.flaticon.com/512/5968/5968217.png",
  apple: "https://cdn-icons-png.flaticon.com/512/0/747.png",
  twitter: "https://cdn-icons-png.flaticon.com/512/3670/3670151.png",
  netflix: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
  spotify: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
  microsoft: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  linkedin: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
  instagram: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  tiktok: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
  snapchat: "https://cdn-icons-png.flaticon.com/512/174/174870.png",
  pinterest: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
  reddit: "https://cdn-icons-png.flaticon.com/512/3670/3670226.png",
  youtube: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  discord: "https://cdn-icons-png.flaticon.com/512/5968/5968759.png",
  zoom: "https://cdn-icons-png.flaticon.com/512/4138/4138124.png",
  uber: "https://cdn-icons-png.flaticon.com/512/5969/5969229.png",
  airbnb: "https://cdn-icons-png.flaticon.com/512/2111/2111320.png",
  paypal: "https://cdn-icons-png.flaticon.com/512/174/174861.png",
  adobe: "https://cdn-icons-png.flaticon.com/512/5968/5968493.png",
  dropbox: "https://cdn-icons-png.flaticon.com/512/5968/5968793.png",
  shopify: "https://cdn-icons-png.flaticon.com/512/825/825500.png",
  slack: "https://cdn-icons-png.flaticon.com/512/5968/5968890.png",
  mailchimp: "https://cdn-icons-png.flaticon.com/512/5968/5968859.png",
  wordpress: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
  salesforce: "https://cdn-icons-png.flaticon.com/512/5968/5968896.png",
  hubspot: "https://cdn-icons-png.flaticon.com/512/5968/5968872.png",
  oracle: "https://cdn-icons-png.flaticon.com/512/5969/5969073.png"
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 9;
  
  // Mock data
  const stats = {
    totalCompanies: 42,
    highRiskCompanies: 14,
    removedCompanies: 5,
    pendingRequests: 8
  };

  // Expanded mock companies data
  const companiesData: CompanyData[] = [
    {
      id: '1',
      name: 'Google',
      logo: companyLogos.google,
      category: 'Search & Advertising',
      dataPoints: ['Email', 'Search History', 'Location', 'Device Info', 'Browsing Habits', 'Contacts'],
      riskLevel: 'high',
      status: 'active'
    },
    {
      id: '2',
      name: 'Facebook',
      logo: companyLogos.facebook,
      category: 'Social Media',
      dataPoints: ['Email', 'Photos', 'Friends', 'Interests', 'Location', 'Date of Birth', 'Messages', 'Political Views'],
      riskLevel: 'high',
      status: 'active'
    },
    {
      id: '3',
      name: 'Amazon',
      logo: companyLogos.amazon,
      category: 'E-commerce',
      dataPoints: ['Email', 'Purchase History', 'Payment Info', 'Address', 'Browsing History', 'Wishlist', 'Reviews'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '4',
      name: 'Apple',
      logo: companyLogos.apple,
      category: 'Technology',
      dataPoints: ['Email', 'Device Info', 'App Usage', 'Payment Info', 'Health Data', 'Photos', 'Messages'],
      riskLevel: 'medium',
      status: 'pending'
    },
    {
      id: '5',
      name: 'Twitter',
      logo: companyLogos.twitter,
      category: 'Social Media',
      dataPoints: ['Email', 'Tweets', 'Followers', 'Interests', 'Location', 'Phone Number', 'Direct Messages'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '6',
      name: 'Netflix',
      logo: companyLogos.netflix,
      category: 'Entertainment',
      dataPoints: ['Email', 'Viewing History', 'Payment Info', 'Preferences', 'Device Info'],
      riskLevel: 'low',
      status: 'removed'
    },
    {
      id: '7',
      name: 'Microsoft',
      logo: companyLogos.microsoft,
      category: 'Technology',
      dataPoints: ['Email', 'Documents', 'Search History', 'Payment Info', 'Calendar', 'Contacts'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '8',
      name: 'LinkedIn',
      logo: companyLogos.linkedin,
      category: 'Professional Network',
      dataPoints: ['Email', 'Work History', 'Connections', 'Skills', 'Education', 'Endorsements', 'Messages'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '9',
      name: 'Instagram',
      logo: companyLogos.instagram,
      category: 'Social Media',
      dataPoints: ['Email', 'Photos', 'Followers', 'Interests', 'Direct Messages', 'Location Tags', 'Stories'],
      riskLevel: 'high',
      status: 'active'
    },
    {
      id: '10',
      name: 'TikTok',
      logo: companyLogos.tiktok,
      category: 'Social Media',
      dataPoints: ['Email', 'Videos', 'Comments', 'Preferences', 'Device Info', 'Browsing Patterns'],
      riskLevel: 'high',
      status: 'active'
    },
    {
      id: '11',
      name: 'Snapchat',
      logo: companyLogos.snapchat,
      category: 'Social Media',
      dataPoints: ['Email', 'Photos', 'Friends', 'Location', 'Device Info', 'Messages'],
      riskLevel: 'high',
      status: 'active'
    },
    {
      id: '12',
      name: 'Pinterest',
      logo: companyLogos.pinterest,
      category: 'Social Media',
      dataPoints: ['Email', 'Pins', 'Boards', 'Interests', 'Search History'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '13',
      name: 'Reddit',
      logo: companyLogos.reddit,
      category: 'Social Media',
      dataPoints: ['Email', 'Posts', 'Comments', 'Subscriptions', 'Upvotes', 'Interests'],
      riskLevel: 'medium',
      status: 'removed'
    },
    {
      id: '14',
      name: 'YouTube',
      logo: companyLogos.youtube,
      category: 'Entertainment',
      dataPoints: ['Email', 'Watch History', 'Search History', 'Comments', 'Subscriptions', 'Uploads'],
      riskLevel: 'high',
      status: 'active'
    },
    {
      id: '15',
      name: 'Spotify',
      logo: companyLogos.spotify,
      category: 'Entertainment',
      dataPoints: ['Email', 'Playlists', 'Listening History', 'Preferences', 'Payment Info', 'Contacts'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '16',
      name: 'Discord',
      logo: companyLogos.discord,
      category: 'Communication',
      dataPoints: ['Email', 'Messages', 'Server Memberships', 'Voice Data', 'Friends List'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '17',
      name: 'Zoom',
      logo: companyLogos.zoom,
      category: 'Communication',
      dataPoints: ['Email', 'Meeting Recordings', 'Chat History', 'Account Info', 'Contact List'],
      riskLevel: 'medium',
      status: 'pending'
    },
    {
      id: '18',
      name: 'Uber',
      logo: companyLogos.uber,
      category: 'Transportation',
      dataPoints: ['Email', 'Location History', 'Payment Info', 'Phone Number', 'Travel Patterns'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '19',
      name: 'Airbnb',
      logo: companyLogos.airbnb,
      category: 'Travel',
      dataPoints: ['Email', 'Booking History', 'Payment Info', 'ID Documents', 'Messages', 'Reviews'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '20',
      name: 'PayPal',
      logo: companyLogos.paypal,
      category: 'Finance',
      dataPoints: ['Email', 'Transaction History', 'Bank Info', 'Address', 'Phone Number'],
      riskLevel: 'high',
      status: 'active'
    },
    {
      id: '21',
      name: 'Adobe',
      logo: companyLogos.adobe,
      category: 'Software',
      dataPoints: ['Email', 'Usage Data', 'Payment Info', 'Projects', 'Assets'],
      riskLevel: 'low',
      status: 'active'
    },
    {
      id: '22',
      name: 'Dropbox',
      logo: companyLogos.dropbox,
      category: 'Cloud Storage',
      dataPoints: ['Email', 'Files', 'Usage Patterns', 'Device Info', 'Sharing History'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '23',
      name: 'Shopify',
      logo: companyLogos.shopify,
      category: 'E-commerce',
      dataPoints: ['Email', 'Purchase History', 'Payment Info', 'Browsing History', 'Wishlist'],
      riskLevel: 'low',
      status: 'pending'
    },
    {
      id: '24',
      name: 'Slack',
      logo: companyLogos.slack,
      category: 'Communication',
      dataPoints: ['Email', 'Messages', 'Files', 'Workspace Info', 'User Status'],
      riskLevel: 'medium',
      status: 'removed'
    },
    {
      id: '25',
      name: 'Mailchimp',
      logo: companyLogos.mailchimp,
      category: 'Marketing',
      dataPoints: ['Email', 'Campaign Interactions', 'Subscription Preferences'],
      riskLevel: 'low',
      status: 'removed'
    },
    {
      id: '26',
      name: 'WordPress',
      logo: companyLogos.wordpress,
      category: 'Web Publishing',
      dataPoints: ['Email', 'Content', 'Comments', 'Analytics', 'Subscriptions'],
      riskLevel: 'low',
      status: 'active'
    },
    {
      id: '27',
      name: 'Salesforce',
      logo: companyLogos.salesforce,
      category: 'Business Services',
      dataPoints: ['Email', 'Contact Info', 'Sales Data', 'Activity History', 'Documents'],
      riskLevel: 'medium',
      status: 'active'
    },
    {
      id: '28',
      name: 'HubSpot',
      logo: companyLogos.hubspot,
      category: 'Marketing',
      dataPoints: ['Email', 'Contact Info', 'Form Submissions', 'Website Activity', 'Downloads'],
      riskLevel: 'medium',
      status: 'pending'
    },
    {
      id: '29',
      name: 'Oracle',
      logo: companyLogos.oracle,
      category: 'Business Services',
      dataPoints: ['Email', 'Account Info', 'Usage Data', 'Support History'],
      riskLevel: 'medium',
      status: 'active'
    }
  ];

  const filteredCompanies = searchQuery 
    ? companiesData.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : companiesData;

  // Pagination logic
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);
  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
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
                {currentCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
              
              {filteredCompanies.length > companiesPerPage && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => paginate(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {[...Array(Math.min(totalPages, 5))].map((_, index) => {
                      let pageNum;
                      
                      // Logic to show pages around current page
                      if (totalPages <= 5) {
                        pageNum = index + 1;
                      } else if (currentPage <= 3) {
                        pageNum = index + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + index;
                      } else {
                        pageNum = currentPage - 2 + index;
                      }
                      
                      return (
                        <PaginationItem key={index}>
                          <PaginationLink
                            isActive={pageNum === currentPage}
                            onClick={() => paginate(pageNum)}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => paginate(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </TabsContent>
            
            <TabsContent value="high-risk" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies
                  .filter(company => company.riskLevel === 'high')
                  .slice(indexOfFirstCompany, indexOfLastCompany)
                  .map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
              </div>
              
              {filteredCompanies.filter(company => company.riskLevel === 'high').length > companiesPerPage && (
                <Pagination className="mt-8">
                  {/* Similar pagination logic for high-risk tab */}
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious onClick={() => paginate(currentPage - 1)} />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink isActive={true}>{currentPage}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext onClick={() => paginate(currentPage + 1)} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
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
