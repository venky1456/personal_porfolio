
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { GraduationCap, Award, Calendar, Link as LinkIcon, ShieldCheck, BookOpen, Percent, Building } from 'lucide-react';

const educationData = [
  {
    institution: 'KL University',
    logoText: 'KL', 
    logoImage: 'KL University official logo',
    logoimageUrl: '/public/sources/Kllogo.jpg',
    title: 'Bachelor of Technology in Artificial Intelligence and Data Science',
    period: '2022 - Present',
    grade: 'CGPA: 9.51/10',
    description: "Pursuing a B.Tech focused on cutting-edge AI and Data Science principles, with a strong emphasis on practical application and research.",
  },
  {
    institution: 'Sri Viswa Junior College',
    logoText: 'SV',
    logoImage: 'Sri Viswa Junior College official logo',
    logoimageUrl: '/public/sources/interclg.jpg',
    title: 'Intermediate (MPC)',
    period: '2020 - 2022', 
    grade: 'Percentage: 9.38%',
    description: "Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry, building a strong foundation for technical studies.",
  },
  {
    institution: 'Bhashyam Public School',
    logoText: 'SC',
    logoImage: 'Sri Chaitanya Techno School official logo',
    logoimageUrl: '/public/sources/schoollogo.png',
    title: 'Secondary Education (SSC)',
    period: '2020', 
    grade: 'Percentage: 98.5%',
    description: "Successfully completed secondary school education with high academic performance, fostering an early interest in science and technology.",
  },
];

const certificationsData = [
  // {
  //   institution: 'Example Certs Inc.',
  //   logoText: 'EC',
  //   logoImage: 'Example Certs Inc. logo',
  //   title: 'Certified Example Professional',
  //   period: 'Issued: Jan 2025',
  //   credentialId: 'EX-CERT-001',
  //   credentialLink: 'https://example.com/cert/example',
  //   description: 'Validated skills in example technology and its applications.',
  // }
];

const EducationListItem = ({ item, index, type }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="flex items-start space-x-4 py-5"
  >
    <div className="flex-shrink-0 w-16 h-16 border-2 border-primary bg-white p-1 rounded-xl overflow-hidden mt-1 shadow-md">
      <img  
        class="w-full h-full object-cover p-1" 
        alt={item.institution + " logo"}
       src={item.logoimageUrl} 
       />
    </div>
    <div className="flex-grow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-0.5">
        <h4 className="text-lg sm:text-xl font-semibold text-primary leading-tight">{item.title}</h4>
        <span className="text-xs sm:text-sm text-foreground/60 dark:text-foreground/50 mt-1 sm:mt-0 whitespace-nowrap">
          <Calendar className="inline h-3.5 w-3.5 mr-1" />{item.period}
        </span>
      </div>
      <p className="text-sm sm:text-md font-medium text-foreground/90 dark:text-foreground/80 flex items-center">
        <Building className="inline h-4 w-4 mr-1.5 text-foreground/70" />{item.institution}
      </p>
      {item.grade && (
        <p className="text-xs sm:text-sm text-foreground/70 dark:text-foreground/60 mt-0.5">
          <Award className="inline h-3.5 w-3.5 mr-1 text-yellow-500" />{item.grade}
        </p>
      )}
      <p className="text-sm text-foreground/80 dark:text-foreground/70 mt-2 leading-relaxed">{item.description}</p>
      {item.credentialLink && (
        <a 
          href={item.credentialLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-xs sm:text-sm text-pink-500 hover:text-pink-600 font-medium transition-colors mt-2"
        >
          View Credential <LinkIcon className="ml-1 h-3.5 w-3.5" />
        </a>
      )}
    </div>
  </motion.div>
);


const EducationSection = () => {
  return (
    <section id="education" className="py-20 min-h-screen flex flex-col justify-center">
      <motion.h2 
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Academic Journey
      </motion.h2>

      <div className="max-w-3xl mx-auto w-full">
        {educationData.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <motion.h3
                className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-primary flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <GraduationCap className="mr-3 h-7 w-7 sm:h-8 sm:w-8" /> Formal Education
            </motion.h3>
            <div className="divide-y divide-border/50 dark:divide-border/30">
              {educationData.map((item, index) => (
                <EducationListItem key={`edu-${index}`} item={item} index={index} type="education" />
              ))}
            </div>
          </div>
        )}

        {certificationsData.length > 0 && (
          <div>
            <motion.h3 
                className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-primary flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.3 + educationData.length * 0.1 }}
            >
              <ShieldCheck className="mr-3 h-7 w-7 sm:h-8 sm:w-8" /> Certifications
            </motion.h3>
            <div className="divide-y divide-border/50 dark:divide-border/30">
              {certificationsData.map((item, index) => (
                 <EducationListItem key={`cert-${index}`} item={item} index={index} type="certification" />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
  