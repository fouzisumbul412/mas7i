import React from 'react';
import { Globe2, Code2, CheckCircle2, ArrowRight, Smartphone, ShoppingCart, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../../components/AnimatedSection';
import { TypeWriter } from '../../components/TypeWriter';
import webDevService from '../../assets/web-dev-service.jpg';

const services = [
  {
    icon: Globe2,
    title: "Custom Web Development",
    description: "Tailored websites built with modern technologies to match your unique business requirements."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and customer analytics."
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization, SEO enhancement, and technical improvements for better user experience."
  }
];

const technologies = [
  "React", "Next.js", "Node.js", "Python", "PHP", "WordPress", 
  "Shopify", "MongoDB", "MySQL", "AWS", "Firebase", "TypeScript"
];

const features = [
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security measures to protect your data and users."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with modern performance best practices."
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Perfect experience across all devices and screen sizes."
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Well-structured, maintainable code following industry standards."
  }
];

const process = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "Detailed discussion to understand your goals, features, and technical requirements."
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Create wireframes, mockups, and technical architecture for your project."
  },
  {
    step: "03",
    title: "Development",
    description: "Build your website/app using cutting-edge technologies and best practices."
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Rigorous testing, quality assurance, and smooth deployment to production."
  },
  {
    step: "05",
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and enhancements to keep your site running perfectly."
  }
];

const stats = [
  { number: "150+", label: "Websites Delivered" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "3s", label: "Average Load Time" },
  { number: "100%", label: "Mobile Responsive" }
];

export default function WebDevelopmentService() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-overlay filter blur-xl animate-float" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent rounded-full mix-blend-overlay filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection animation="slide-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium mb-6">
                  <Code2 className="h-4 w-4" />
                  <span>Web Development</span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Build{' '}
                  <TypeWriter 
                    texts={['Modern Websites', 'Web Apps', 'E-commerce', 'Digital Solutions']}
                    className="text-primary-light"
                  />
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                  Custom websites and web applications built with cutting-edge technology. 
                  We create user-friendly, responsive solutions that drive business growth and enhance user experience.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100">
                    Start Your Project
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link to="/services" className="btn-ghost border-white/30 text-white hover:bg-white/10">
                    View All Services
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="slide-left" delay={400}>
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
                <img 
                  src={webDevService} 
                  alt="Web development coding" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale" delay={index * 100}>
                <div className="text-center text-white">
                  <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80 text-sm font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Development Services
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Comprehensive web development solutions for businesses of all sizes
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="slide-up" delay={index * 100}>
                <div className="card-elevated p-8 group hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Why Choose Our Development?
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                We build websites and applications with focus on performance, security, and user experience
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} animation="scale" delay={index * 100}>
                <div className="card-elevated p-6 text-center group hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Development Process
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                A systematic approach from concept to launch ensuring quality and timely delivery
              </p>
            </AnimatedSection>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <AnimatedSection key={step.step} animation="slide-right" delay={index * 100}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-[var(--shadow-primary)]">
                    {step.step}
                  </div>
                  <div className="flex-1 card-elevated p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Cutting-edge technologies and frameworks for modern web development
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech} animation="scale" delay={index * 50}>
                <div className="card-elevated p-6 text-center hover:shadow-[var(--shadow-md)] transition-[var(--transition-smooth)] group">
                  <div className="mb-3">
                    <Code2 className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-neutral-700 font-semibold text-sm">{tech}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with a custom website or web application that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100">
                Start Development
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-ghost border-white/30 text-white hover:bg-white/10">
                Explore Other Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}