import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, ExternalLink, Calendar, Filter } from "lucide-react";
import contentData from "@/data/content.json";

export function Publications() {
  const content = contentData as any;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const publications = content.publications.items || [];
  const years = useMemo(() => {
    const allYears = publications.map((p: any) => p.year);
    return Array.from(new Set(allYears)).sort((a: any, b: any) => b - a);
  }, [publications]);

  const filteredPubs = useMemo(() => {
    return publications.filter((pub: any) => {
      const details = pub.details || "";
      const title = pub.title || "";
      const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            details.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = selectedYear ? pub.year === selectedYear : true;
      return matchesSearch && matchesYear;
    });
  }, [searchTerm, selectedYear, publications]);

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Selected Publications</h2>
            <p className="text-muted-foreground text-lg">
              Exploring sustainable development, climate resilience, and rural livelihoods in Southern Africa.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search research..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-background"
              />
            </div>
          </div>
        </div>

        {/* Year Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button 
            variant={selectedYear === null ? "default" : "outline"} 
            size="sm"
            onClick={() => setSelectedYear(null)}
            className="rounded-full"
          >
            All Years
          </Button>
          {years.map((year: any) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedYear(selectedYear === year ? null : year)}
              className="rounded-full"
            >
              {year}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <AnimatePresence>
            {filteredPubs.map((pub: any, index: number) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                layout
              >
                <Card className="h-full hover:border-primary/50 transition-colors group">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <Badge variant="secondary" className="mb-2 font-mono text-xs">
                        <Calendar className="mr-1 h-3 w-3" /> {pub.year}
                      </Badge>
                      <Badge variant="outline" className="text-muted-foreground">
                        Cited by {pub.citedBy}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-serif leading-tight group-hover:text-primary transition-colors">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        {pub.title}
                      </a>
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 line-clamp-2">
                      {(pub.details || "").replace(pub.title || '', '')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-end">
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-4"
                      >
                        Read Paper <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPubs.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No publications found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
}
