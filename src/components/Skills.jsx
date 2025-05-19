
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Code, Database, Server, Palette, Settings } from 'lucide-react';

const skillsData = [
  { name: 'HTML5', level: 95, icon: <Code className="text-orange-500" /> },
  { name: 'CSS3 & Tailwind', level: 90, icon: <Palette className="text-blue-500" /> },
  { name: 'JavaScript (ES6+)', level: 92, icon: <Code className="text-yellow-400" /> },
  { name: 'React. js', level: 88, icon: <Code className="text-sky-400" /> },
  { name: 'Node.js & Express', level: 85, icon: <Server className="text-green-500" /> },
  { name: 'Python & Django', level: 75, icon: <Code className="text-blue-600" /> },
  { name: 'SQL & NoSQL (MongoDB, PostgreSQL,MySQL)', level: 80, icon: <Database className="text-purple-500" /> },
  { name: 'Git & GitHub', level: 90, icon: <Settings className="text-gray-600 dark:text-gray-400" /> },
  { name: 'Cloud & Devops', level: 82, icon: <Server className="text-pink-500" /> },
  { name: 'DSA', level: 78, icon: <Palette className="text-teal-500" /> },
];

const SkillItem = ({ name, level, icon, index }) => {
  return (
    <motion.div 
      className="bg-card/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-105"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-3">
        <span className="mr-3 text-primary">{React.cloneElement(icon, { size: 28 })}</span>
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
      </div>
      <div className="w-full bg-muted rounded-full h-3 mb-1 overflow-hidden">
        <motion.div 
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "circOut" }}
        />
      </div>
      <p className="text-right text-sm text-foreground/70">{level}% Proficient</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <motion.h2 
        className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ opacity:0, y: -20}}
        whileInView={{ opacity:1, y: 0}}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>
      <motion.p 
        className="text-lg text-foreground/80 dark:text-foreground/70 text-center mb-16 max-w-2xl mx-auto"
        initial={{ opacity:0, y: -20}}
        whileInView={{ opacity:1, y: 0}}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A snapshot of my technical capabilities. I'm always learning and expanding my skillset to deliver high-quality solutions.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <SkillItem key={skill.name} {...skill} index={index} />
        ))}
      </div>
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.5 + skillsData.length * 0.1 }}
      >
        <p className="text-lg text-foreground/80 dark:text-foreground/70 flex items-center justify-center">
          <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
          And continuously <span className="font-semibold text-primary mx-1">learning new technologies</span> to stay ahead!
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;
  