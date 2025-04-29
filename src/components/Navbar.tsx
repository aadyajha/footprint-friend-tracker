
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';
import { LogIn, Eye } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <nav className="w-full py-4 px-4 md:px-8 flex items-center justify-between border-b">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 flex items-center justify-center">
          <Eye className="h-5 w-5 text-white" />
        </div>
        <span className="font-bold text-xl">FootprintFriend</span>
      </Link>
      
      {!isAuthPage && (
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              <span>Log in</span>
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
