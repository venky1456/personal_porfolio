
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please fill in all fields.",
      });
      setIsSubmitting(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call / localStorage saving
    try {
      // In a real app, you'd send this to a backend or Supabase
      // For now, we'll use localStorage
      localStorage.setItem('contactForm', JSON.stringify(formData));
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        className: "bg-green-500 text-white dark:bg-green-600",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "Could not send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="h-6 w-6 text-primary" />, text: "2200080121.aids@gmail.com", href: "mailto:your.email@example.com" },
    { icon: <Phone className="h-6 w-6 text-primary" />, text: "+91 7842681782", href: "tel:+12345678900" },
    { icon: <MapPin className="h-6 w-6 text-primary" />, text: "3-105 , Main street , Geddakancharam , G.Sigdam(mandal) , Srikakulam(dist) , Andhra Pradesh,India" },
  ];

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { delay: i * 0.1, type: 'spring', stiffness: 150, damping: 20 } 
    }),
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 dark:bg-slate-800/30 rounded-xl my-10">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ opacity:0, y: -20}}
          whileInView={{ opacity:1, y: 0}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-lg text-foreground/80 dark:text-foreground/70 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity:0, y: -20}}
          whileInView={{ opacity:1, y: 0}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-4 p-4 bg-card/50 dark:bg-slate-700/50 backdrop-blur-sm rounded-lg shadow-md border border-primary/10"
                variants={inputVariants}
                custom={index}
              >
                {item.icon}
                <div>
                  {item.href ? (
                    <a href={item.href} className="text-foreground hover:text-primary transition-colors text-lg">{item.text}</a>
                  ) : (
                    <p className="text-foreground text-lg">{item.text}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6 p-6 sm:p-8 bg-card/70 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl shadow-xl border border-primary/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
          >
            <motion.div variants={inputVariants} custom={0}>
              <Label htmlFor="name" className="text-foreground/90 dark:text-foreground/80">Full Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Venkatesh Gokavarapu" 
                className="mt-1 bg-background/80 dark:bg-slate-800/80 focus:ring-primary"
                required 
              />
            </motion.div>
            <motion.div variants={inputVariants} custom={1}>
              <Label htmlFor="email" className="text-foreground/90 dark:text-foreground/80">Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="venkatesh@example.com" 
                className="mt-1 bg-background/80 dark:bg-slate-800/80 focus:ring-primary"
                required 
              />
            </motion.div>
            <motion.div variants={inputVariants} custom={2}>
              <Label htmlFor="message" className="text-foreground/90 dark:text-foreground/80">Your Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows={5} 
                placeholder="Your message..." 
                className="mt-1 bg-background/80 dark:bg-slate-800/80 focus:ring-primary"
                required 
              />
            </motion.div>
            <motion.div variants={inputVariants} custom={3}>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                ) : (
                  <Send className="mr-2 h-5 w-5" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
  