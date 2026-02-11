import { Mail, MapPin } from "lucide-react";
import contentData from "@/data/content.json";

export function Footer() {
  const content = contentData as any;

  return (
    <footer id="contact-footer" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Contact</h2>
            <p className="text-background/70 mb-8 max-w-sm">
              Interested in collaboration or research inquiries? Reach out to discuss sustainable development and climate resilience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-background/80">
                <MapPin size={20} className="text-primary" />
                <span>{content.person.affiliation}, {content.person.locations.join(", ")}</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                 <Mail size={20} className="text-primary" />
                 <a href={`mailto:${content.person.verified_email}`} className="hover:text-primary transition-colors">
                   {content.person.verified_email || "Contact via university"}
                 </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="flex flex-wrap gap-4 mb-8">
              {content.person.contact.links.map((link: any) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-background/20 rounded-full hover:bg-background/10 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="text-background/40 text-sm text-right">
              <p>&copy; {new Date().getFullYear()} {content.person.fullName}. All rights reserved.</p>
              <p className="mt-1 opacity-70 text-[10px]">by trae</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
