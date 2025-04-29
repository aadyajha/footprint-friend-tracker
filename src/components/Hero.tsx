
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Discover and Manage</span> Your Digital Footprint
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find out which companies collect your data, assess your privacy risk, and take control of your online presence with FootprintFriend.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600">
                Get Started — It's Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </div>
          
          <div className="mt-12 p-4 bg-secondary rounded-xl text-sm text-muted-foreground">
            <p>
              We help you track and manage data from <span className="font-semibold">300+ companies</span> including Google, Facebook, Amazon, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
