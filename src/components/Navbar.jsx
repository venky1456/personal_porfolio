
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Menu, X, Code, User, Briefcase, Mail, Info, BookOpen, GraduationCap, FolderHeart as HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', path: '#hero', id: 'hero', icon: <HomeIcon className="h-5 w-5" /> },
  { name: 'About', path: '#about', id: 'about', icon: <Info className="h-5 w-5" /> },
  { name: 'Experience', path: '#experience', id: 'experience', icon: <Briefcase className="h-5 w-5" /> },
  { name: 'Education', path: '#education', id: 'education', icon: <GraduationCap className="h-5 w-5" /> },
  { name: 'Projects', path: '#projects', id: 'projects', icon: <BookOpen className="h-5 w-5" /> },
  { name: 'Skills', path: '#skills', id: 'skills', icon: <Code className="h-5 w-5" /> },
  { name: 'Contact', path: '#contact', id: 'contact', icon: <Mail className="h-5 w-5" /> },
];

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false); 
    
    const sectionId = path.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update hash manually for immediate feedback if needed, and to ensure history.
      if (window.history.pushState) {
        window.history.pushState(null, '', path);
      } else {
        window.location.hash = path;
      }
    }
  };
  
  const isActive = (itemId) => {
    return activeSection === itemId;
  };

  const MotionAnchor = motion.a;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="sticky top-0 z-50 bg-background/80 dark:bg-slate-900/80 backdrop-filter backdrop-blur-lg shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <MotionAnchor
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center space-x-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="h-8 w-8" />
            <span>MyPortfolio</span>
          </MotionAnchor>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const active = isActive(item.id);
              return (
                <Button
                  key={item.name}
                  variant={active ? "secondary" : "ghost"}
                  asChild
                  className={`text-foreground/80 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 ${active ? 'text-primary bg-primary/10 dark:bg-primary/20' : ''}`}
                >
                  <MotionAnchor
                    href={item.path}
                    onClick={(e) => handleLinkClick(e, item.path)}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 1 }}
                  >
                    {item.name}
                  </MotionAnchor>
                </Button>
              );
            })}
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-primary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 dark:bg-slate-900/95 backdrop-blur-md absolute w-full shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-1 py-3">
              {navItems.map((item) => {
                const active = isActive(item.id);
                return (
                  <li key={item.name} className="w-full px-4">
                    <Button
                      variant={active ? "secondary" : "ghost"}
                      asChild
                      className={`w-full justify-start text-foreground/80 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 py-3 ${active ? 'text-primary bg-primary/10 dark:bg-primary/20' : ''}`}
                    >
                       <MotionAnchor
                          href={item.path}
                          onClick={(e) => handleLinkClick(e, item.path)}
                          className="flex items-center space-x-3 px-3 w-full"
                        >
                        {item.icon}
                        <span>{item.name}</span>
                      </MotionAnchor>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
  