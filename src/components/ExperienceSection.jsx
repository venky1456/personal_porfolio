import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin, Link as LinkIcon, Building, TrendingUp, CheckCircle } from 'lucide-react';

const experiences = [
    {
      title: 'Data Science Intern',
      company: 'EI Systems',
      companyLogoText: 'HP',
      companyLogoImage: 'House Price Prediction logo',
      companyLink: '#', 
      period: '05/2024 - 06/2024',
      location: 'Remote',
      description: 'Developed a machine learning model to predict house prices based on various features using real-world datasets. Focused on data preprocessing, feature engineering, and model optimization.',
      responsibilities: [
        'Collected and cleaned housing data for training and evaluation.',
        'Engineered features and applied regression algorithms to build predictive models.',
        'Evaluated model performance using metrics such as RMSE and R², achieving high accuracy.',
      ],
      tags: ['Machine Learning', 'Regression', 'Python', 'Pandas', 'Scikit-learn']
    }
  
];


const ExperienceItem = ({ experience, index, isLast }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: index * 0.2 }
    }
  };

  return (
    <motion.div 
      className="flex items-start"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col items-center mr-6 mt-1">
        <div className="flex-shrink-0 w-16 h-16 border-2 border-primary bg-white p-1 rounded-xl overflow-hidden mt-1 shadow-md">
          <img  
            class="w-full h-full object-contain p-1.5" 
            alt={experience.company + " logo"}
           src="/sources/ei-logo.jpg" />
        </div>
        {!isLast && <div className="w-px h-full bg-primary/30 my-2 min-h-[60px]"></div>}
      </div>

      <Card className="flex-1 bg-card/60 dark:bg-slate-800/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-md hover:shadow-lg">
        <CardHeader className="pb-3 pt-5 px-5">
          <CardTitle className="text-lg sm:text-xl text-primary mb-0.5">{experience.title}</CardTitle>
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-foreground/80 dark:text-foreground/70">
            <Building className="w-3.5 h-3.5" />
            {experience.companyLink && experience.companyLink !== '#' ? (
              <a href={experience.companyLink} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-pink-500 transition-colors flex items-center">
                {experience.company} <LinkIcon className="ml-1 h-3 w-3" />
              </a>
            ) : (
              <span className="font-medium">{experience.company}</span>
            )}
            <span className="text-foreground/50 dark:text-foreground/40">•</span>
            <MapPin className="w-3.5 h-3.5" /> <span>{experience.location}</span>
          </div>
          <div className="text-xs text-foreground/60 dark:text-foreground/50 mt-0.5">
            <Calendar className="w-3.5 h-3.5 inline mr-1" /> {experience.period}
          </div>
        </CardHeader>
        <CardContent className="px-5 pb-5">
          <p className="text-foreground/70 dark:text-foreground/60 mb-3 text-sm leading-relaxed">{experience.description}</p>
          {experience.responsibilities && experience.responsibilities.length > 0 && (
            <ul className="space-y-1.5 text-xs text-foreground/70 dark:text-foreground/60">
              {experience.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 text-[0.7rem] font-medium bg-primary/10 text-primary rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const sortedExperiences = [...experiences].sort((a, b) => {
    const getEndDateYear = (period) => {
      const parts = period.split(' - ');
      if (parts[1] === 'Present') return new Date().getFullYear() + 1; 
      return parseInt(parts[1].split('/')[1], 10);
    };
    const getEndDateMonth = (period) => {
      const parts = period.split(' - ');
      if (parts[1] === 'Present') return new Date().getMonth() + 1;
      return parseInt(parts[1].split('/')[0], 10);
    };
    const endDateA = getEndDateYear(a.period) * 100 + getEndDateMonth(a.period);
    const endDateB = getEndDateYear(b.period) * 100 + getEndDateMonth(b.period);
    return endDateB - endDateA; 
  });


  return (
    <section id="experience" className="py-20 min-h-screen flex flex-col justify-center">
      <motion.h2 
        className="text-4xl sm:text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Professional Journey
      </motion.h2>

      {sortedExperiences.length > 0 ? (
        <div className="space-y-8 max-w-3xl mx-auto">
          {sortedExperiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} isLast={index === sortedExperiences.length - 1} />
          ))}
        </div>
      ) : (
        <motion.p 
          className="text-center text-lg text-foreground/70 dark:text-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          No professional experience listed yet. Stay tuned for updates!
        </motion.p>
      )}
       {sortedExperiences.length > 0 && (
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5 + sortedExperiences.length * 0.1 }}
        >
          <p className="text-lg text-foreground/80 dark:text-foreground/70 flex items-center justify-center">
            <TrendingUp className="mr-2 h-6 w-6 text-green-500" />
            Continuously seeking growth and new challenges.
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default ExperienceSection;
  