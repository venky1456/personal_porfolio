
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/sources/Venkatesh_Resume.pdf';
    link.setAttribute('download', 'Venkatesh_Resume.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-10rem)] flex items-center justify-center py-20 relative overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-20 dark:opacity-10 ${
            i % 2 === 0 ? 'bg-purple-400' : 'bg-pink-400'
          }`}
          style={{
            width: Math.random() * 150 + 50,
            height: Math.random() * 150 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.1, 1],
            rotate: [0, Math.random() * 90 - 45, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-block mb-8"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img 
            class="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-2xl" 
            alt="Your Name - Profile Picture" src="/src/sources/WhatsApp Image 2024-08-04 at 00.14.01_b398daa2.jpg" />
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Venkatesh</span>
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/70 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I'm a passionate <span className="font-semibold text-primary">Full-Stack Developer</span> creating modern, responsive, and user-friendly web applications. Let's build something amazing together.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Get in Touch <Mail className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleResumeDownload}
            className="border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Resume <Download className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <a href="https://github.com/venky1456" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors"><Github size={28} /></a>
          <a href="https://www.linkedin.com/in/venkatesh-gokavarapu-788053285/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors"><Linkedin size={28} /></a>
          <a href="https://x.com/venkatesh_1409" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors"><Twitter size={28} /></a>
        </motion.div>
      </div>
       <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-8 w-8 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
  