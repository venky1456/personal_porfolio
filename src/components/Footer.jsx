
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-muted/50 dark:bg-slate-900/50 backdrop-blur-sm py-10 text-center text-foreground/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a 
            href="https://github.com/venky1456"
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/venkatesh-gokavarapu-788053285/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            href="https://x.com/venkatesh_1409"
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter size={24} />
          </motion.a>
        </div>
        <p className="text-sm mb-2 flex items-center justify-center">
          Crafted with <Heart className="w-4 h-4 mx-1 text-pink-500 fill-current" /> by Venkatesh
        </p>
        <p className="text-sm">&copy; {currentYear} Venkatesh. All rights reserved.</p>
        {/* <p className="text-xs mt-4 text-foreground/50">
          Built with React, TailwindCSS, Framer Motion, and shadcn/ui.
        </p> */}
      </div>  
    </motion.footer>
  );
};

export default Footer;
  