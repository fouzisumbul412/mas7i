import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  breadcrumb?: { label: string; href: string }[];
}

const PageHero = ({ title, subtitle, backgroundImage, breadcrumb }: PageHeroProps) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: backgroundImage 
            ? `url(${backgroundImage})` 
            : 'linear-gradient(135deg, hsl(var(--mas7i-dark)) 0%, hsl(var(--mas7i-darker)) 100%)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-mas7i-darker/95 via-mas7i-dark/90 to-mas7i-primary/30" />
      
      {/* Animated Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-mas7i-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-mas7i-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-24">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav data-aos="fade-down" data-aos-delay="100" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-white/60">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <a 
                    href={item.href} 
                    className="hover:text-mas7i-primary transition-colors"
                  >
                    {item.label}
                  </a>
                  {index < breadcrumb.length - 1 && <span>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          {title.split(' ').map((word, index) => (
            <span key={index}>
              {index === title.split(' ').length - 1 ? (
                <span className="text-mas7i-primary">{word}</span>
              ) : (
                <span>{word} </span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle}
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-1 bg-mas7i-primary mx-auto mt-8 rounded-full"
        />
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
