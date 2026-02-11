export interface Publication {
  title: string;
  year: number;
  citedBy: number;
  details: string;
  link: string;
}

export interface FeaturedWork {
  title: string;
  year: number;
  citedBy: number;
  link: string;
  topics: string[];
}

export interface Education {
  period: string;
  program: string;
  institution: string;
  sourceUrl: string;
}

export interface ContactLink {
  label: string;
  url: string;
}

export interface SiteContent {
  person: {
    fullName: string;
    shortName: string;
    tagline: string;
    locations: string[];
    affiliation: string;
    fields: string[];
    bio: {
      short: string;
      long: string;
    };
    contact: {
      emailPublic: string;
      links: ContactLink[];
    };
  };
  highlights: Array<{ label: string; value: string }>;
  education: Education[];
  featuredWorks: FeaturedWork[];
  publications: {
    sourceLabel: string;
    sourceUrl: string;
    items: Publication[];
  };
  citations: {
    orcid: string;
    scholar: string;
    africaUsForum: string;
    academia: string;
  };
}
