import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import contentData from "@/data/content.json";

export function Contact() {
  const content = contentData as any;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Let's Collaborate</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am always open to discussing new research opportunities, academic collaborations, or speaking engagements related to sustainable development and climate resilience.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Directly</h3>
                  <p className="text-sm text-muted-foreground mb-2">Reach out for official inquiries.</p>
                  <a href={`mailto:${content.person.verified_email}`} className="text-primary font-medium hover:underline">
                    {content.person.verified_email || "munyadzvimbo@gmail.com"}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Academic Profiles</h3>
                  <p className="text-sm text-muted-foreground mb-3">Connect on professional networks.</p>
                  <div className="flex gap-3">
                    {content.person.contact.links.map((link: any) => (
                      <a 
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-secondary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-none shadow-xl bg-background/80 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-primary w-full" />
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Jane" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="jane@university.edu" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Research Collaboration..." required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="I'd like to discuss your recent paper on climate resilience..." 
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full h-12 text-base">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
