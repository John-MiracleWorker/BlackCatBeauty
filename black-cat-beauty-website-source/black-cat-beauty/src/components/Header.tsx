import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint, Menu, X } from 'lucide-react'; // Lucide icons
// import { useMobile } from '../hooks/use-mobile'; // Assuming this hook exists and works

// Navigation items
const navItems = [
  { name: 'About Me', path: '/about-me' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Price Menu', path: '/price-menu' },
  { name: 'Booking', path: '/booking' },
];

interface HeaderProps {
  currentPage: string; // This prop might not be strictly needed if using useLocation
}

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  // const isMobile = useMobile(); // Hook to detect mobile state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-brandDark shadow-md sticky top-0 z-50"> {/* Header background */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Salon Name */}
        <Link to="/about-me" className="flex items-center space-x-2">
          <PawPrint className="h-8 w-8 text-brandPeach" /> {/* Icon color updated */}
          {/* Apply the new font and color to the salon name "subject lettering" */}
          <h1 className="text-2xl font-bold font-logoesque text-brandPeach"> {/* Font and color updated */}
            Black Cat Beauty
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                font-logoesque text-lg px-3 py-2 rounded-md transition-colors duration-300 ease-in-out
                ${location.pathname === item.path
                  ? 'text-brandGold bg-black/20' // Active link with gold text and subtle background
                  : 'text-brandPeach hover:text-brandGold hover:bg-black/10' // Inactive link peach, hover gold
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-brandPeach focus:outline-none" // Button color
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brandDark/95 backdrop-blur-sm"> {/* Mobile menu background */}
          <nav className="flex flex-col items-center space-y-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className={`
                  font-logoesque text-xl py-2 px-4 rounded-md w-full text-center transition-colors duration-300 ease-in-out
                  ${location.pathname === item.path
                    ? 'text-brandGold bg-black/30' // Active mobile link
                    : 'text-brandPeach hover:text-brandGold hover:bg-black/20' // Inactive mobile link
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
