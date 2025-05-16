import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 text-brand-light-text py-6 border-t border-brand-peach/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-serif-display text-brand-peach mb-2">BLACK CAT BEAUTY</h3>
            <p className="text-sm text-brand-light-text/80">Master Cosmetologist: Christina Coleman</p>
          </div>
          
          <div className="mb-4 md:mb-0 text-center">
            <p className="text-sm text-brand-light-text/80 italic">
              "Where beauty meets artistry"
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-brand-light-text/80 mb-1">Connect with us:</p>
            <div className="flex justify-center md:justify-end space-x-4">
              {/* Social media icons would go here */}
              <span className="text-brand-peach hover:text-brand-peach/80 cursor-pointer">IG</span>
              <span className="text-brand-peach hover:text-brand-peach/80 cursor-pointer">FB</span>
              <span className="text-brand-peach hover:text-brand-peach/80 cursor-pointer">TW</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-brand-peach/10 text-center text-xs text-brand-light-text/60">
          <p>&copy; {new Date().getFullYear()} BLACK CAT BEAUTY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
