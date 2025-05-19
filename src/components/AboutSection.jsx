
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Lightbulb, Brain, Award, Linkedin, Github } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 min-h-screen flex flex-col justify-center">
      <motion.h2 
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
        <motion.div 
          className="md:col-span-1 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img  
            class="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-primary shadow-2xl mb-6"
            alt="Harsha - Professional Headshot" src="https://images.unsplash.com/photo-1618927376995-a721da8c11db" />
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
              <a href="https://www.linkedin.com/in/venkatesh-gokavarapu-788053285/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
              <a href="https://github.com/venky1456" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-card/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 p-2">
            <CardContent className="pt-6 text-lg text-foreground/90 dark:text-foreground/80 space-y-4 leading-relaxed">
              <p>
                Hi, I’m <span className="font-bold text-primary">Venkatesh</span>, a 21-year-old tech enthusiast and third-year B.Tech student majoring in AI and Data Science.  I have a strong foundation in <span className="font-bold text-pink-600">programming</span>, 
                <span className="font-semibold text-pink-400"> Machine Learning</span>, <span className="font-semibold text-purple-400">Full Stack Development</span>, and <span className="font-semibold text-teal-400">Cloud Computing</span> and I’m passionate about blending creativity with logic to solve complex, real-world problems.
              </p>
              <p>
              My journey spans across developing full-stack applications, analyzing large datasets, and implementing advanced ML and NLP models to extract meaningful insights. During my internship at EI Systems, I optimized machine learning models—achieving 90% accuracy—and gained hands-on experience in fine-tuning, evaluation, and AWS-based cloud deployment. This experience strengthened my skills in data engineering and cloud-native solutions.
              </p>
              <p>
              I’m currently expanding my proficiency in DevOps practices and cloud technologies, with a keen interest in building scalable, reliable systems that support data-driven decision-making.              </p>
              <p>
              Outside the world of code, I’m a sports enthusiast who values teamwork, perseverance, and bringing the same energy to both the field and collaborative tech projects. Whether it’s brainstorming innovative ideas, competing in coding contests, or working on impactful solutions, I thrive on challenges and continuous growth.              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.h3
        className="text-3xl font-bold text-center mb-10 text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        My Core Values
      </motion.h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Brain className="h-10 w-10 text-purple-500 mb-3" />, title: 'Creative Problem Solving', description: 'Applying innovative thinking to overcome technical and logical challenges.' },
          { icon: <Briefcase className="h-10 w-10 text-pink-500 mb-3" />, title: 'Full-Stack Proficiency', description: 'Building robust and scalable solutions from front-end to back-end.' },
          { icon: <Lightbulb className="h-10 w-10 text-yellow-500 mb-3" />, title: 'Continuous Learning', description: 'Embracing new technologies and methodologies to stay at the forefront of innovation.' },
          { icon: <Award className="h-10 w-10 text-teal-500 mb-3" />, title: 'Competitive Spirit', description: 'Driven by challenges and a desire to excel in all endeavors, especially coding.' },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          >
            <Card className="text-center p-6 bg-card/50 dark:bg-slate-800/50 backdrop-blur-sm h-full border-secondary hover:border-primary/50 transition-all duration-300 transform hover:shadow-xl">
              <CardHeader className="p-0 items-center">
                {item.icon}
                <CardTitle className="text-xl mt-2 mb-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-foreground/70 dark:text-foreground/60">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
  