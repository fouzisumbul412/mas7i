import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  tagline, 
  description, 
  image, 
  link, 
  delay = 0 
}: ServiceCardProps) {
  return (
    <AnimatedSection animation="slide-up" delay={delay} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] transition-[var(--transition-smooth)] hover:-translate-y-2">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-primary group-hover:border-primary transition-[var(--transition-smooth)]">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold leading-tight">{title}</h3>
              <p className="text-sm text-primary-light font-medium">{tagline}</p>
            </div>
          </div>
          
          <p className="text-sm text-white/90 mb-4 line-clamp-2">{description}</p>
          
          <Link 
            to={link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-light transition-[var(--transition-fast)] group/link"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </AnimatedSection>
  );
}