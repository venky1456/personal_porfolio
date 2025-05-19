
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projectData = [
  {
    id: 1,
    title: 'Online Learning Platform',
    description: 'A full-stack MERN application that allows students to browse and enroll in free or paid courses, and instructors to create, update, and manage their own courses with secure authentication and payment integration.',
    imageUrl: '/src/sources/learning.png',
    imageName: 'Modern online learning platform interface with dashboard and course cards',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    liveLink: '#', // Replace with your actual deployed link if available
    repoLink: 'https://github.com/venky1456/Online-Learning_Platform', 
  },
  
  {
    id: 2,
    title: 'House Price Prediction',
    description: 'A machine learning project that predicts house prices based on various features such as location, size, and amenities. Built using Python and deployed with a simple web interface for user interaction.',
    imageUrl: 'src/sources/images.jpg',
    imageName: 'Graph showing predicted vs actual house prices',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Frontend'],
    liveLink: '#', // Replace with actual deployed app link if available
    repoLink: 'https://github.com', // Replace with your actual GitHub repo link
  },
  
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'A modern and responsive personal portfolio website built using React. It showcases my projects, skills, and experience with smooth navigation and a clean, visually appealing UI.',
    imageUrl: '/src/sources/portfolio2.png',
    imageName: 'Modern React-based portfolio interface',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    liveLink: '#', // Replace with actual deployed site link
    repoLink: 'https://github.com', // Replace with your actual GitHub repo link
  },
  {
    id: 4,
    title: 'Serverless Text Translator',
    description: 'A lightweight, serverless application that allows users to translate text between multiple languages using real-time API integration. Built with React and deployed without a dedicated backend server.',
    imageUrl: '/src/sources/translate1.png',
    imageName: 'Text translation interface with language selection and translated output',
    tags: ['React', 'AWS Serverless Services','Python'],
    liveLink: '#', // Replace with your live project URL
    repoLink: 'https://github.com/venky1456/Text_translator',
  }
  
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 120,
        damping: 12
      },
    }),
  };

  return (
    <section id="projects" className="py-20">
      <motion.h2 
        className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ opacity:0, y: -20}}
        whileInView={{ opacity:1, y: 0}}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <motion.p 
        className="text-md text-foreground/80 dark:text-foreground/70 text-center mb-12 max-w-xl mx-auto"
        initial={{ opacity:0, y: -20}}
        whileInView={{ opacity:1, y: 0}}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore a selection of my work. Each project is a testament to my passion for building innovative and user-friendly applications.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex"
          >
            <Card className="w-full flex flex-col bg-card/60 dark:bg-slate-800/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 transform hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
                  <img  
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    alt={project.title + " screenshot"} src={project.imageUrl} />
                </div>
              </CardHeader>
              <CardContent className="p-5 flex-grow">
                <CardTitle className="text-xl font-semibold mb-1.5 text-primary">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70 dark:text-foreground/60 mb-3 text-xs leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-[0.7rem] font-medium bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0 flex justify-between items-center">
                <div className="flex space-x-2">
                  {project.repoLink && project.repoLink !== '#' && (
                    <Button variant="outline" size="sm" asChild className="border-primary/40 text-primary hover:bg-primary/10 dark:hover:bg-primary/20 text-xs px-2.5 py-1 h-auto">
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="mr-1.5 h-3.5 w-3.5" /> Code
                      </a>
                    </Button>
                  )}
                  {project.liveLink && project.liveLink !== '#' && (
                    <Button variant="default" size="sm" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs px-2.5 py-1 h-auto">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
                      </a>
                    </Button>
                  )}
                </div>
                <Button variant="ghost" size="sm" asChild className="text-xs px-2.5 py-1 h-auto text-primary hover:text-primary/80">
                   <a href={project.repoLink || 'https://github.com'} target="_blank" rel="noopener noreferrer" className="flex items-center">
                     <Eye className="mr-1.5 h-3.5 w-3.5" /> View
                   </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
  