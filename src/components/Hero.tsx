import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import contentData from "@/data/content.json";
import heroNature from "@/assets/hero-nature.jpg"; 

export function Hero() {
  const content = contentData as any;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Nature Background with high-end overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background/90 z-10" />
        <img
          src={heroNature}
          alt="Zimbabwean Landscape - Victoria Falls"
          className="w-full h-full object-cover scale-105 animate-in fade-in duration-1000"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-white"
        >
          <div className="inline-block px-4 py-1.5 mb-8 border border-white/20 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium tracking-wide">
            Scholar • Researcher • Educator
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 font-serif drop-shadow-xl tracking-tight">
            {content.person.fullName}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            {content.person.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              className="rounded-full text-base px-10 h-14 bg-white text-black hover:bg-white/90 border-none shadow-xl transition-transform hover:scale-105" 
              onClick={() => document.getElementById('publications')?.scrollIntoView({behavior: 'smooth'})}
            >
              View Research <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full text-base px-10 h-14 border-white/30 text-white bg-black/20 backdrop-blur-sm hover:bg-white/20 hover:text-white" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Get in Touch
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-3 opacity-90">
             {content.person.fields.map((field: string) => (
               <span key={field} className="text-sm font-medium text-white/90 bg-black/40 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                 {field}
               </span>
             ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/80 to-transparent" />
      </motion.div>
    </section>
  );
}
