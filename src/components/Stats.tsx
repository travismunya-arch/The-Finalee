import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, BookOpen, Users } from "lucide-react";
import contentData from "@/data/content.json";

export function Stats() {
  const content = contentData as any;
  
  const stats = [
    {
      label: "Citations",
      value: content.metrics?.citations_all || content.highlights[0].value,
      icon: Quote,
      description: "Total academic citations"
    },
    {
      label: "h-index",
      value: content.metrics?.h_index_all || content.highlights[1].value,
      icon: TrendingUp,
      description: "Research impact metric"
    },
    {
      label: "i10-index",
      value: content.metrics?.i10_index_all || content.highlights[2].value,
      icon: BookOpen,
      description: "Papers with >10 citations"
    },
    {
      label: "Affiliation",
      value: "UFS", // Shortened for stat card
      icon: Users,
      description: content.person.affiliation
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
                    <stat.icon size={24} />
                  </div>
                  <h3 className="text-3xl font-bold font-serif mb-1">{stat.value}</h3>
                  <p className="text-sm font-medium text-foreground/80">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
