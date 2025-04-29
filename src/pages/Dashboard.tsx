
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Settings, User, Eye } from 'lucide-react';
import CompanyCard, { CompanyData } from '@/components/CompanyCard';
import DataSummary from '@/components/DataSummary';
import { useNavigate } from 'react-router-dom';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination';

// Mock company logos using generic icons
const getGenericLogo = (category) => {
  const categories = {
    'Search & Advertising': 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
    'Social Media': 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
    'E-commerce': 'https://cdn-icons-png.flaticon.com/512/5968/5968217.png',
    'Technology': 'https://cdn-icons-png.flaticon.com/512/0/747.png',
    'Entertainment': 'https://cdn-icons-png.flaticon.com/512/5977/5977590.png',
    'Communication': 'https://cdn-icons-png.flaticon.com/512/3670/3670151.png',
    'Travel': 'https://cdn-icons-png.flaticon.com/512/174/174872.png',
    'Finance': 'https://cdn-icons-png.flaticon.com/512/174/174861.png',
    'Health': 'https://cdn-icons-png.flaticon.com/512/3140/3140348.png',
    'Education': 'https://cdn-icons-png.flaticon.com/512/3976/3976625.png',
    'News': 'https://cdn-icons-png.flaticon.com/512/2965/2965879.png',
    'Food & Dining': 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
    'Gaming': 'https://cdn-icons-png.flaticon.com/512/686/686589.png',
    'Productivity': 'https://cdn-icons-png.flaticon.com/512/2991/2991112.png',
    'Cloud Storage': 'https://cdn-icons-png.flaticon.com/512/5968/5968793.png',
    'Business Services': 'https://cdn-icons-png.flaticon.com/512/5968/5968896.png',
    'Software': 'https://cdn-icons-png.flaticon.com/512/5968/5968493.png',
    'Marketing': 'https://cdn-icons-png.flaticon.com/512/5968/5968872.png',
    'Web Publishing': 'https://cdn-icons-png.flaticon.com/512/174/174881.png',
    'Transportation': 'https://cdn-icons-png.flaticon.com/512/5969/5969229.png',
    'Professional Network': 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
    'Dating': 'https://cdn-icons-png.flaticon.com/512/2097/2097276.png',
    'Fitness': 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png',
    'Smart Home': 'https://cdn-icons-png.flaticon.com/512/5266/5266248.png',
    'Government': 'https://cdn-icons-png.flaticon.com/512/2166/2166903.png',
    'Security': 'https://cdn-icons-png.flaticon.com/512/2889/2889676.png',
    'Cryptocurrency': 'https://cdn-icons-png.flaticon.com/512/5968/5968260.png',
    'Retail': 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png',
    'Streaming': 'https://cdn-icons-png.flaticon.com/512/5969/5969008.png',
    'Banking': 'https://cdn-icons-png.flaticon.com/512/2830/2830289.png',
    'Insurance': 'https://cdn-icons-png.flaticon.com/512/2716/2716305.png'
  };
  
  return categories[category] || 'https://cdn-icons-png.flaticon.com/512/3617/3617073.png'; // Default icon
};

// Mock company logos for popular services
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
  
  // Mock data - expanded stats
  const stats = {
    totalCompanies: 215,
    highRiskCompanies: 48,
    removedCompanies: 12,
    pendingRequests: 23
  };

  // Helper function to generate company data
  const generateCompanies = () => {
    const categories = [
      'Social Media', 'E-commerce', 'Technology', 'Entertainment', 'Communication', 'Travel',
      'Finance', 'Health', 'Education', 'News', 'Food & Dining', 'Gaming', 'Productivity',
      'Cloud Storage', 'Business Services', 'Software', 'Marketing', 'Web Publishing',
      'Transportation', 'Professional Network', 'Dating', 'Fitness', 'Smart Home',
      'Government', 'Security', 'Cryptocurrency', 'Retail', 'Streaming', 'Banking', 'Insurance',
      'Search & Advertising'
    ];

    const riskLevels: Array<'low' | 'medium' | 'high'> = ['low', 'medium', 'high'];
    const statuses: Array<'active' | 'pending' | 'removed'> = ['active', 'pending', 'removed'];

    // Common data points
    const commonDataPoints = [
      'Email', 'Name', 'Address', 'Phone Number', 'Date of Birth', 'Location', 'IP Address',
      'Device Info', 'Browser History', 'Cookies', 'Search History', 'Photos', 'Videos',
      'Payment Info', 'Credit Card', 'Bank Details', 'Purchase History', 'Interests',
      'Preferences', 'Social Connections', 'Messages', 'Comments', 'Reviews', 'Health Data',
      'Biometric Data', 'Voice Data', 'Calendar Data', 'Documents', 'Work History',
      'Education History', 'Political Views', 'Religious Views', 'Sexual Orientation',
      'Income Level', 'Assets', 'Debts', 'Credit Score', 'Insurance Info', 'Medical History',
      'Family Members', 'Emergency Contacts', 'Government ID', 'Passport Number',
      'Driver License', 'Social Security Number', 'Tax Info'
    ];

    // Known companies with their specific data
    const knownCompanies = [
      {
        id: '1',
        name: 'Google',
        logo: companyLogos.google,
        category: 'Search & Advertising',
        dataPoints: ['Email', 'Search History', 'Location', 'Device Info', 'Browsing Habits', 'Contacts', 'Calendar Data', 'Documents', 'Photos', 'Videos', 'Voice Data'],
        riskLevel: 'high',
        status: 'active'
      },
      {
        id: '2',
        name: 'Facebook',
        logo: companyLogos.facebook,
        category: 'Social Media',
        dataPoints: ['Email', 'Photos', 'Friends', 'Interests', 'Location', 'Date of Birth', 'Messages', 'Political Views', 'Religious Views', 'Relationship Status', 'Family Members'],
        riskLevel: 'high',
        status: 'active'
      },
      {
        id: '3',
        name: 'Amazon',
        logo: companyLogos.amazon,
        category: 'E-commerce',
        dataPoints: ['Email', 'Purchase History', 'Payment Info', 'Address', 'Browsing History', 'Wishlist', 'Reviews', 'Credit Card', 'Search History'],
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

    // Generate additional companies to reach 215 total
    const generatedCompanies = [];
    const companyNames = [
      "Acme Corp", "Globex", "Initech", "Umbrella Corp", "Stark Industries", "Cyberdyne Systems", "Wayne Enterprises", "Soylent Corp", "Weyland-Yutani", "Aperture Science",
      "Cybertron Inc", "Tyrell Corp", "OsCorp", "Massive Dynamic", "Dharma Initiative", "Wonka Industries", "Dunder Mifflin", "Sterling Cooper", "Nakatomi Trading", "Virtucon",
      "Monsters Inc", "Buy n Large", "Oceanic Airlines", "Rekall", "Blue Sun", "Omni Consumer Products", "Hanso Foundation", "Prestige Imports", "Los Pollos Hermanos", "CHOAM",
      "Spacely Sprockets", "Sirius Cybernetics", "Gringotts", "Acme Corp", "LexCorp", "Macrosoft", "Pied Piper", "Hooli", "Massive Entertainment", "InGen",
      "Rekall", "Goliath National Bank", "Krusty Krab", "Paper Street Soap", "Gekko & Co", "Viridian Dynamics", "Ewing Oil", "Powell Motors", "Taco Gringo", "Rent-A-Swag",
      "Cyberdine", "Digital Army", "XhibitCorp", "Binford Tools", "Stark Solutions", "HammerCorp", "InterPlanetary", "Earth Station", "WorldWide", "Galactic Trading",
      "Financial Systems", "Cyber Security Inc", "Viking Systems", "Happy Life", "Family First", "Osato Chemicals", "Supreme Bytes", "Cloud Tech", "Blue Systems", "Aurora Tech",
      "Absolute Zero", "Eastern Promises", "Western Solutions", "Northern Trust", "Southern Comfort", "Atlantic Systems", "Pacific Rim", "Galaxy Corp", "Nebula Networks", "Solar Tech",
      "Lunar Landing", "Mars Colonization", "Jupiter Ascension", "Saturn Rings", "Uranus Mining", "Neptune Waters", "Pluto Dwarf", "Mercury Heat", "Venus Cloud", "Earth Resources",
      "Universal Games", "Parsec Travel", "Light Years", "Quasar Tech", "Black Hole Insurance", "Neutron Star", "Asteroid Mining", "Cosmic Consolidation", "Meteor Strike",
      "Red Giant Energy", "White Dwarf Technology", "Pulsar Navigation", "Gamma Ray Protection", "X-Ray Vision", "Ultraviolet Protection", "Infrared Detection", "Radio Wave Communications", "Microwave Technology", "Satellite Systems"
    ];
    
    // Add 175+ more companies to reach 215 total
    for (let i = 30; i < 215; i++) {
      const name = companyNames[i % companyNames.length] + (Math.floor(i / companyNames.length) > 0 ? ` ${Math.floor(i / companyNames.length) + 1}` : '');
      const category = categories[Math.floor(Math.random() * categories.length)];
      const numDataPoints = Math.floor(Math.random() * 10) + 2; // 2-12 data points
      const dataPoints = [];
      
      // Select random data points
      for (let j = 0; j < numDataPoints; j++) {
        const dataPoint = commonDataPoints[Math.floor(Math.random() * commonDataPoints.length)];
        if (!dataPoints.includes(dataPoint)) {
          dataPoints.push(dataPoint);
        }
      }
      
      generatedCompanies.push({
        id: (i + 1).toString(),
        name,
        logo: getGenericLogo(category),
        category,
        dataPoints,
        riskLevel: riskLevels[Math.floor(Math.random() * riskLevels.length)],
        status: Math.random() > 0.8 ? (Math.random() > 0.5 ? 'pending' : 'removed') : 'active'
      });
    }
    
    return [...knownCompanies, ...generatedCompanies];
  };

  // Generate the full companies data
  const companiesData: CompanyData[] = generateCompanies();

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

  // Enhanced pagination - show more page numbers and ellipsis
  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    
    // Always show first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink 
          isActive={currentPage === 1} 
          onClick={() => paginate(1)}>
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    // Show ellipsis if not starting from page 2
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-start">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    // Calculate range of pages to show
    let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 2);
    
    if (currentPage <= 3) {
      startPage = 2;
      endPage = Math.min(totalPages - 1, maxVisiblePages);
    } else if (currentPage >= totalPages - 2) {
      endPage = totalPages - 1;
      startPage = Math.max(2, endPage - (maxVisiblePages - 2));
    }
    
    // Add middle page numbers
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={currentPage === i} 
            onClick={() => paginate(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Show ellipsis if not ending at second-to-last page
    if (endPage < totalPages - 1) {
      items.push(
        <PaginationItem key="ellipsis-end">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    // Always show last page if there is more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink 
            isActive={currentPage === totalPages} 
            onClick={() => paginate(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
  };

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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold">Companies With Your Data ({filteredCompanies.length} found)</h2>
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
            <TabsList className="mb-4">
              <TabsTrigger value="all">All ({companiesData.length})</TabsTrigger>
              <TabsTrigger value="high-risk">High Risk ({companiesData.filter(c => c.riskLevel === 'high').length})</TabsTrigger>
              <TabsTrigger value="pending">Pending Removal ({companiesData.filter(c => c.status === 'pending').length})</TabsTrigger>
              <TabsTrigger value="removed">Removed ({companiesData.filter(c => c.status === 'removed').length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => paginate(currentPage - 1)} 
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                    
                    {renderPaginationItems()}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => paginate(currentPage + 1)}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
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
                  .slice((currentPage - 1) * companiesPerPage, currentPage * companiesPerPage)
                  .map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))
                }
              </div>
            </TabsContent>
            
            <TabsContent value="pending" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies
                  .filter(company => company.status === 'pending')
                  .slice((currentPage - 1) * companiesPerPage, currentPage * companiesPerPage)
                  .map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))
                }
              </div>
            </TabsContent>
            
            <TabsContent value="removed" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies
                  .filter(company => company.status === 'removed')
                  .slice((currentPage - 1) * companiesPerPage, currentPage * companiesPerPage)
                  .map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
