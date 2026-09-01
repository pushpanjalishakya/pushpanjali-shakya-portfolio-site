import { useEffect, useRef, useState } from 'react';
import { supabase } from './lib/supabase';

// Intersection Observer Hook for animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Lucide-style inline SVG icons
const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3-1 5-3.5 5-6.5.4-1 0-2-.5-2.5.3-1.2.3-2.5 0-3.5 0 0-1-0.5-3 1-3h1c1 0 2-0.5 2.5-1 1.5-1.5 3.5-1.5 5 0 .5.5 1.5 1 2.5 1h1c2 0 1 3 1 3-0.5 1-0.5 2.3 0 3.5 0 0 0.3 1-0.5 2.5" />
  </svg>
);

const ExternalLink = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
  </svg>
);

const Monitor = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const Palette = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.644-.746 1.644-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.056 0 5.555-2.503 5.555-5.564C21.86 6.16 17.4 2 12 2z" />
  </svg>
);

const Layers = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91a1 1 0 0 0 0-1.83z" /><path d="m22 12-8.97 4.08a2 2 0 0 1-1.66 0L2 12" /><path d="m22 17-8.97 4.08a2 2 0 0 1-1.66 0L2 17" />
  </svg>
);

const Zap = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-2.47 7.36H18a1 1 0 0 1 .82 1.57l-9.9 10.2a.5.5 0 0 1-.86-.46l2.47-7.36z" />
  </svg>
);

const Eye = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
  </svg>
);

const Search = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const Lightbulb = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.1 1.5-3.5a6 6 0 0 0-12 0c0 1 .2 2.2 1.5 3.5.6.6 1.2 1.2 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" />
  </svg>
);

const Code = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

const Sparkles = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 4.837-4.838 1.913 4.838 1.913 1.912 4.837L12 21l1.912-4.837 4.838-1.913-1.912-4.837" />
  </svg>
);

const ChevronDown = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const BarChart = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);

const Database = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

const TrendingUp = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
);

const PieChart = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

const Brain = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 3 3 0 0 0-2.216 5.213A3 3 0 0 0 7.5 18.5a3 3 0 0 0 4.5-.5 3 3 0 0 0 4.5.5 3 3 0 0 0 2.713-4.162A3 3 0 0 0 17.997 5.125 3 3 0 0 0 12 5" /><path d="M12 5a3 3 0 0 0 0 6" /><path d="M12 11v9" />
  </svg>
);

// Laptop Mockup Component
function LaptopMockup({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-gray-900 rounded-t-lg p-1.5 shadow-lg">
        <div className="bg-gray-800 rounded-t-md px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 ml-2">
            <div className="h-2 bg-gray-600 rounded-sm w-1/3" />
          </div>
        </div>
        <div className="bg-white rounded-b-md overflow-hidden aspect-[16/10]">
          {children}
        </div>
      </div>
      <div className="bg-gray-900 h-3 rounded-b-lg shadow-lg flex items-center justify-center">
        <div className="w-16 h-1 bg-gray-800 rounded-full" />
      </div>
      <div className="bg-gray-800 h-1 rounded-b-lg mx-auto w-24" />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-accent font-medium tracking-wide opacity-0 animate-fade-in">
                Business • Analytics • Product • Technology
              </p>
              <h1 className="heading-xl text-primary opacity-0 animate-fade-in-delay-1">
                MBA Business Analytics Candidate
              </h1>
              <p className="text-lg md:text-xl font-medium text-gray-700 opacity-0 animate-fade-in-delay-2">
                Data, Product &amp; Digital Operations
              </p>
              <p className="text-body max-w-xl opacity-0 animate-fade-in-delay-3">
                I'm building practical skills at the intersection of business, analytics, technology, and digital operations through hands-on projects, case studies, and experimentation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-3">
              <a href="#contact" className="btn-primary group">
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#projects" className="btn-secondary">
                View My Work
              </a>
            </div>
          </div>
          <div className="relative opacity-0 animate-fade-in-delay-4">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-secondary to-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.1),transparent_50%)]" />
                  <div className="relative z-10 flex flex-col items-center gap-6 p-8">
                    <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                      <BarChart className="w-12 h-12 text-accent" />
                    </div>
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center">
                        <Database className="w-8 h-8 text-accent/70" />
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-accent/70" />
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center">
                        <PieChart className="w-8 h-8 text-accent/70" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="h-2 rounded-full bg-accent/20"
                          style={{ width: `${30 + i * 15}px` }}
                        />
                      ))}
                    </div>
                  </div>
                  <Sparkles className="absolute top-4 right-4 w-6 h-6 text-accent/40 animate-pulse" />
                  <Sparkles className="absolute bottom-8 left-6 w-4 h-4 text-accent/30 animate-pulse delay-500" />
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-delay-4 hidden md:block">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-accent transition-colors"
          >
            <span className="text-xs">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="section-padding bg-accent/[0.03] scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-white shadow-lg flex items-center justify-center">
                      <Lightbulb className="w-10 h-10 text-accent" />
                    </div>
                    <p className="text-lg font-medium text-gray-600">
                      Turning data and ideas into practical solutions
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 rounded-xl bg-white shadow-md" />
                <div className="absolute bottom-4 left-4 w-24 h-24 rounded-xl bg-white shadow-md" />
              </div>
            </div>
          </div>
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h2 className="heading-lg text-primary">About Me</h2>
          <div className="section-heading-underline" />
            <div className="space-y-4 text-body">
              <p>
                I'm an MBA Business Analytics candidate interested in how data, technology, and
                business strategy come together to solve real-world problems.
              </p>
              <p>
                I'm developing practical skills in data analysis, business intelligence, product
                thinking, digital operations, and technology through hands-on projects and case
                studies.
              </p>
              <p>
                I enjoy understanding a problem, researching the context, breaking it down, and
                turning ideas into practical solutions. I'm particularly interested in using data
                and technology to support better business decisions and improve digital
                experiences.
              </p>
              <p>
                I'm continuously learning and experimenting with new tools while building a
                portfolio that reflects my growth across business, analytics, product, and
                technology.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              {['Business Analytics', 'Data & Insights', 'Product Thinking', 'Digital Operations'].map(
                (tag) => (
                  <span key={tag} className="badge-accent">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Project Card
interface ProjectProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  status: 'Live' | 'In Progress' | 'Completed';
  index: number;
  isInView: boolean;
  imageUrl: string;
  imageAlt: string;
  liveUrl?: string;
}

function ProjectCard({ title, category, description, technologies, features, status, index, isInView, imageUrl, imageAlt, liveUrl }: ProjectProps) {
  const statusBadge = {
    Live: 'badge-success',
    'In Progress': 'badge-warning',
    Completed: 'badge-accent',
  };

  const cardInner = (
    <>
      <div className="p-6">
        <LaptopMockup className="mb-6">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </LaptopMockup>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-accent font-medium uppercase tracking-wide">{category}</p>
            <h3 className="heading-md mt-1 group-hover:text-accent transition-colors">{title}</h3>
          </div>
          <span className={`${statusBadge[status]} shrink-0`}>{status}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="badge-secondary text-xs">
              {tech}
            </span>
          ))}
        </div>
        <div className="pt-2">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Features</p>
          <div className="flex flex-wrap gap-1.5">
            {features.map((feature) => (
              <span key={feature} className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
                <CheckCircle className="w-3 h-3 text-green-600" />
                {feature}
              </span>
            ))}
          </div>
        </div>
        {liveUrl ? (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent pt-2">
            <ExternalLink className="w-4 h-4" />
            View Live Project
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 pt-2">
            <ExternalLink className="w-4 h-4" />
            Not yet live
          </span>
        )}
      </div>
    </>
  );

  const motionClasses = `card overflow-hidden transition-all duration-700 ${
    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
  }`;
  const motionStyle = { transitionDelay: `${index * 150}ms` };

  if (liveUrl) {
    return (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} live project in a new tab`}
        className={`group relative block ${motionClasses} duration-300 hover:scale-[1.03] hover:shadow-2xl`}
        style={motionStyle}
      >
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center pb-8 bg-gradient-to-t from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent bg-white/90 px-4 py-2 rounded-full shadow-md">
            Visit Site
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
        {cardInner}
      </a>
    );
  }

  return (
    <div className={motionClasses} style={motionStyle}>
      {cardInner}
    </div>
  );
}

// Projects Section
function ProjectsSection() {
  const { ref, isInView } = useInView();
  const projects: Omit<ProjectProps, 'index' | 'isInView'>[] = [
    {
      title: 'Yoga with Ruchi',
      category: 'Business Website',
      description:
        "A complete digital presence for a yoga studio, designed to attract and convert visitors into inquiries. The project focused on clear service communication, responsive layout, and a frictionless inquiry flow that supports the studio's day-to-day operations.",
      technologies: ['Lovable', 'Responsive Design', 'UI Design', 'Web'],
      features: ['Responsive Design', 'Inquiry Form', 'Mobile Friendly', 'SEO Ready', 'Social Media Integration'],
      status: 'Live',
      imageUrl: '/yoga-with-ruchi.png',
      imageAlt: 'Yoga with Ruchi website homepage preview',
      liveUrl: 'https://yogawithruchi.lovable.app',
    },
    {
      title: 'Washotailor',
      category: 'Service Business Platform',
      description:
        'A digital platform for a laundry and tailoring startup, built to communicate services, pricing, and booking clearly to potential customers. The design prioritizes a smooth customer journey from discovery to inquiry, with WhatsApp integration to reduce friction in the booking process.',
      technologies: ['Lovable', 'Business Website', 'Responsive Design', 'Booking Flow'],
      features: ['Booking Form', 'WhatsApp Integration', 'Pricing Section', 'Responsive Layout', 'Startup Website'],
      status: 'In Progress',
      imageUrl: '/washotailor.png',
      imageAlt: 'Washotailor laundry and tailoring website preview',
      liveUrl: 'https://washotailor-doorstep-care.lovable.app',
    },
    {
      title: 'StudyHub Notes',
      category: 'Educational Platform',
      description:
        'An educational notes platform designed around clear navigation and easy access to study resources. The project focused on user experience research, information architecture, and a clean interface that helps students find what they need quickly.',
      technologies: ['Lovable', 'Education', 'Responsive UI'],
      features: ['Responsive Design', 'Search Feature', 'Educational Platform', 'Clean UI'],
      status: 'Completed',
      imageUrl: '/studyhub.png',
      imageAlt: 'StudyHub Notes educational platform preview',
      liveUrl: 'https://examnotes-haven.lovable.app',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/50 scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-accent font-medium tracking-wide mb-4">Featured Work</p>
          <h2 className="heading-lg text-primary">Projects I've Built</h2>
          <div className="section-heading-underline mx-auto" />
          <p className="text-body max-w-2xl mx-auto mt-4">
            Practical projects demonstrating problem solving, digital product thinking, business
            understanding, user experience, research, and implementation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Areas of Focus Section (replaces Services)
function FocusSection() {
  const { ref, isInView } = useInView();
  const areas = [
    { icon: BarChart, label: 'Business Analytics', desc: 'Analyzing data to identify patterns, insights, and opportunities for better decisions.' },
    { icon: PieChart, label: 'Business Intelligence', desc: 'Turning data into clear dashboards, reports, and visual insights.' },
    { icon: Layers, label: 'Product & Digital Operations', desc: 'Exploring digital products, workflows, processes, and operational improvements.' },
    { icon: TrendingUp, label: 'Data Visualization', desc: 'Presenting information clearly so complex data becomes easier to understand.' },
    { icon: Search, label: 'Market & Business Research', desc: 'Researching markets, customers, competitors, and business opportunities.' },
    { icon: Brain, label: 'Technology & AI', desc: 'Exploring practical ways technology and AI can support modern businesses.' },
  ];

  return (
    <section id="focus" className="section-padding bg-accent/[0.03] scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-accent font-medium tracking-wide mb-4">Areas of Focus</p>
          <h2 className="heading-lg text-primary">What I Work On</h2>
          <div className="section-heading-underline mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {areas.map(({ icon: Icon, label, desc }, index) => (
            <div
              key={label}
              className={`card p-8 text-center group transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
              </div>
              <p className="font-medium text-primary mb-1">{label}</p>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const { ref, isInView } = useInView();
  const groups = [
    {
      title: 'Analytics',
      icon: BarChart,
      skills: ['Excel', 'SQL', 'Python', 'Data Analysis', 'Data Visualization'],
    },
    {
      title: 'Business',
      icon: TrendingUp,
      skills: ['Business Analysis', 'Operations', 'Product Thinking', 'Market Research', 'Problem Solving'],
    },
    {
      title: 'Digital & Technology',
      icon: Monitor,
      skills: ['Digital Operations', 'AI for Business', 'Web Technologies', 'Git & GitHub'],
    },
    {
      title: 'Tools',
      icon: Layers,
      skills: ['Microsoft Excel', 'Google Workspace', 'GitHub', 'WordPress', 'Elementor', 'Lovable', 'Bolt.new'],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/50 scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-accent font-medium tracking-wide mb-4">Expertise</p>
          <h2 className="heading-lg text-primary">Skills &amp; Tools</h2>
          <div className="section-heading-underline mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map(({ title, icon: Icon, skills }, index) => (
            <div
              key={title}
              className={`card p-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="heading-md">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Technologies Section
function TechnologiesSection() {
  const { ref, isInView } = useInView();
  const primary = [
    { name: 'Excel' },
    { name: 'SQL' },
    { name: 'Python' },
    { name: 'Git/GitHub' },
    { name: 'Data Analysis' },
    { name: 'Data Visualization' },
  ];
  const supporting = [
    { name: 'WordPress' },
    { name: 'Elementor' },
    { name: 'Hostinger' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'Lovable' },
    { name: 'Bolt.new' },
  ];

  return (
    <section id="technologies" className="section-padding bg-accent/[0.03] scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-accent font-medium tracking-wide mb-4">Stack</p>
          <h2 className="heading-lg text-primary">Tools &amp; Technologies</h2>
          <div className="section-heading-underline mx-auto" />
        </div>
        <div className="space-y-10">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4 text-center">
              Primary
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {primary.map(({ name }, index) => (
                <div
                  key={name}
                  className={`card p-5 text-center group transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <p className="font-medium text-primary group-hover:text-accent transition-colors">{name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4 text-center">
              Supporting
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {supporting.map(({ name }, index) => (
                <div
                  key={name}
                  className={`card p-4 text-center group transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <p className="text-sm font-medium text-gray-600 group-hover:text-accent transition-colors">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Currently Learning Section
function LearningSection() {
  const { ref, isInView } = useInView();
  const skills = [
    'SQL',
    'Python',
    'Data Visualization',
    'Business Intelligence',
    'Product Thinking',
    'AI for Business',
  ];

  return (
    <section id="learning" className="section-padding bg-secondary/50 scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-accent font-medium tracking-wide mb-4">Growth</p>
          <h2 className="heading-lg text-primary">Currently Learning</h2>
          <div className="section-heading-underline mx-auto" />
        </div>
        <div className="max-w-3xl mx-auto">
          <div
            className={`card p-8 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="heading-md">MBA — Business Analytics</h3>
            </div>
            <p className="text-body mb-6">
              Building practical skills through projects, case studies, data analysis, and hands-on
              experimentation.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <span key={skill} className="badge-warning justify-center">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const { ref, isInView } = useInView();
  const steps = [
    { icon: Eye, label: 'Understand', desc: 'Define the problem, goals, and requirements.' },
    { icon: Search, label: 'Research', desc: 'Study the audience, market, context, and available information.' },
    { icon: BarChart, label: 'Analyze', desc: 'Explore data, patterns, constraints, and opportunities.' },
    { icon: Palette, label: 'Design', desc: 'Develop practical concepts and solutions.' },
    { icon: Code, label: 'Build', desc: 'Turn the solution into a working output.' },
    { icon: CheckCircle, label: 'Test & Improve', desc: 'Review, refine, and improve based on findings.' },
  ];

  return (
    <section id="process" className="section-padding bg-accent/[0.03] scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-accent font-medium tracking-wide mb-4">How I Work</p>
          <h2 className="heading-lg text-primary">My Process</h2>
          <div className="section-heading-underline mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map(({ icon: Icon, label, desc }, index) => (
            <div key={label} className="text-center group">
              <div
                className={`relative transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/30 to-accent/10" />
                )}
              </div>
              <h4
                className={`font-medium text-primary mb-1 transition-all duration-700 delay-100 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150 + 100}ms` }}
              >
                {label}
              </h4>
              <p
                className={`text-xs text-gray-500 transition-all duration-700 delay-200 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Work With Me Section
function WhyMeSection() {
  const { ref, isInView } = useInView();
  const reasons = [
    { icon: BarChart, title: 'Analytical Mindset', desc: 'I like breaking complex problems into clear, manageable parts.' },
    { icon: TrendingUp, title: 'Business Perspective', desc: "I'm learning to connect analysis and technology with real business goals." },
    { icon: Zap, title: 'Practical Approach', desc: 'I focus on learning by building, testing, and working through real projects.' },
    { icon: Lightbulb, title: 'Continuous Learning', desc: "I'm continuously developing my skills across analytics, product, operations, and technology." },
  ];

  return (
    <section id="why-me" className="section-padding bg-secondary/50 scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-accent font-medium tracking-wide mb-4">The Difference</p>
          <h2 className="heading-lg text-primary">Why Work With Me</h2>
          <div className="section-heading-underline mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className={`text-center p-6 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-md mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    const { error } = await supabase.from('messages').insert({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
    setIsSubmitting(false);
    if (error) {
      setSubmitError('Something went wrong sending your message. Please try again.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-accent/[0.03] scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-accent font-medium tracking-wide mb-4">Let's Connect</p>
            <h2 className="heading-lg text-primary mb-6">Let's Build Something Together</h2>
            <div className="section-heading-underline" />
            <p className="text-body mb-8">
              I'm always open to learning, collaborating, and connecting with people interested in
              business, analytics, products, and technology.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:pushpanjalishakya0906@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium truncate">pushpanjalishakya0906@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/pushpanjali-shakya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Linkedin className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="font-medium truncate">pushpanjali-shakya</p>
                </div>
              </a>
              <a
                href="https://github.com/pushpanjalishakya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Github className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="font-medium truncate">pushpanjalishakya</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {submitted ? (
              <div className="card p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="heading-md mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 space-y-6">
                {submitError && (
                  <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
                    {submitError}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Let's Build Something
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold">Pushpanjali Shakya</h3>
          <p className="text-gray-400">MBA Business Analytics Candidate</p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#focus" className="text-gray-400 hover:text-white transition-colors">
              Focus
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/pushpanjali-shakya/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/pushpanjalishakya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:pushpanjalishakya0906@gmail.com"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-400 pt-4">
            &copy; {new Date().getFullYear()} Pushpanjali Shakya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Focus', href: '#focus' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold text-primary">
          PS
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-gray-600' : 'text-gray-800'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-primary text-sm px-5 py-2.5 hidden sm:inline-flex">
          Get in Touch
        </a>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-sm justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <FocusSection />
        <SkillsSection />
        <TechnologiesSection />
        <LearningSection />
        <ProcessSection />
        <WhyMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
