export interface WebsiteProject {
  title: string;
  category: string;
  image: string;
  tech: string[];
  liveUrl: string;
  caseStudy: string;
}

export const websiteProjects: WebsiteProject[] = [
  {
    title: "TechNova Creative Portal",
    category: "Creative Enterprise",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "GSAP Scroll"],
    liveUrl: "https://demo.udaydigital.com/agency",
    caseStudy: "Redesigned a tech agency web portal resulting in 140% spike in booked discovery audits."
  },
  {
    title: "Aura Footwear E-Commerce",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Redux", "Stripe API", "Tailwind CSS"],
    liveUrl: "https://demo.udaydigital.com/shoestore",
    caseStudy: "Fast-loading cart system engineered for 0.4s checkouts, driving a 34% drop in cart abandonment."
  },
  {
    title: "Elysian Fashion Boutique",
    category: "Luxury Fashion E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Headless Shopify", "Tailwind v4", "Lenis Scroll"],
    liveUrl: "https://demo.udaydigital.com/fashion",
    caseStudy: "Ultra-aesthetic layout with high-retention video loops integrated directly into product sliders."
  },
  {
    title: "SmileCare Dental Practice",
    category: "Local Medical Practice",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Google Maps GMB Schema", "Cal.com Scheduler"],
    liveUrl: "https://demo.udaydigital.com/dentist",
    caseStudy: "Designed local SEO optimized landing page bringing +80 new patient appointments in 60 days."
  },
  {
    title: "Lumière Patisserie",
    category: "Gourmet Patisserie & Local Bakery",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80",
    tech: ["React.js", "Local SEO Schema", "Tailwind CSS", "WhatsApp Orders"],
    liveUrl: "https://demo.udaydigital.com/sweetshop",
    caseStudy: "Visual-first sensory menu layout that increased direct-delivery orders by 115% via smart WhatsApp routing."
  },
  {
    title: "Executive Leadership Profile",
    category: "Personal & Executive Brand",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Framer Motion", "Tailwind CSS", "ThreeJS Background"],
    liveUrl: "https://demo.udaydigital.com/portfolio",
    caseStudy: "A 3D interactive executive profile resulting in +12 invitations to international speaking panels."
  }
];
