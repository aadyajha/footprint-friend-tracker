
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Eye, ArrowRight } from 'lucide-react';

const Index = () => {
  // Features section data
  const features = [
    {
      icon: <Eye className="h-12 w-12 text-brand-500" />,
      title: "Discover Your Digital Footprint",
      description: "See which companies collect and store your personal data across the internet and understand what information they have."
    },
    {
      icon: <Shield className="h-12 w-12 text-brand-500" />,
      title: "Assess Your Privacy Risk",
      description: "Get a personalized risk score based on your online presence and learn how to minimize your exposure."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-brand-500" />,
      title: "Request Data Removal",
      description: "We help you send data removal requests to companies to reduce your digital footprint and enhance your privacy."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Connect Your Email",
      description: "Sign up using your email to start tracking your digital footprint across the web."
    },
    {
      step: "2",
      title: "Discover Your Exposure",
      description: "We'll show you which companies have your data and what kind of information they store."
    },
    {
      step: "3",
      title: "Take Control",
      description: "Request data removal from companies directly through our platform with just a few clicks."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Take Control of Your Online Presence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              FootprintFriend helps you discover, understand, and manage your digital footprint across the internet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-white to-secondary">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How FootprintFriend Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our simple process helps you gain visibility and control over your personal data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {howItWorks.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-xl mb-6">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <ArrowRight className="text-brand-300 w-10 h-10 -translate-x-1/2" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600">
                Start Your Free Scan
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-brand-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-br from-brand-600 to-brand-400 p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take control of your data?</h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of users who have discovered and managed their digital footprint with FootprintFriend.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-brand-600 hover:bg-gray-100">
                Get Started for Free
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
