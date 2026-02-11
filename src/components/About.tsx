import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import portrait from "@/assets/portrait.jpg";

export function About() {
  const content = contentData as any;

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Portrait Column */}
            <div className="md:col-span-5 lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                {/* Image Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={portrait} 
                      alt={content.person.fullName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle inner shadow for blending */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
                  </div>
                </div>
                
                {/* Offset abstract element behind */}
                <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl" />
                
                {/* Caption/Name under image */}
                <div className="mt-6 text-center md:text-left">
                  <h3 className="font-serif text-2xl font-bold text-foreground">{content.person.shortName}</h3>
                  <p className="text-muted-foreground mt-1">{content.person.affiliation}</p>
                </div>
              </motion.div>
            </div>

            {/* Biography Column */}
            <div className="md:col-span-7 lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-foreground">About the Scholar</h2>
              
              <div className="prose prose-lg text-muted-foreground leading-relaxed mb-12">
                {content.person.bio.long.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className="mb-6 last:mb-0">{paragraph}</p>
                ))}
              </div>

              {/* Education Timeline - Integrated */}
              <div className="border-t border-border pt-10">
                <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-primary block"></span>
                  Education History
                </h3>
                <div className="grid gap-6">
                  {content.education.map((edu: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + (i * 0.1) }}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 group hover:bg-secondary/30 p-4 -mx-4 rounded-lg transition-colors"
                    >
                      <span className="font-mono text-sm text-primary font-medium w-24 flex-shrink-0">{edu.period.split('-')[0]}</span>
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{edu.program}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
