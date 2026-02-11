import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb, Sprout, Building2 } from "lucide-react";
import contentData from "@/data/content.json";

export function CurrentResearch() {
  const content = contentData as any;
  const icons = [Sprout, Building2, Lightbulb]; // Icons for the 3 research topics

  return (
    <section id="research" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Current Research Projects</h2>
          <p className="text-lg text-muted-foreground">
            Ongoing scholarly inquiries addressing critical challenges in climate adaptation, rural sustainability, and urban governance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.currentResearch.map((project: any, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow bg-background relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/20 text-primary text-xs font-normal">
                            {project.status}
                        </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-accent-foreground">
                      Focus: {project.focus}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
