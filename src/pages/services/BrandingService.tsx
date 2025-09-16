import React from 'react';
import { Star, Palette, CheckCircle2, ArrowRight, Eye, Layers, FileText, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../../components/AnimatedSection';
import { TypeWriter } from '../../components/TypeWriter';
import brandingService from '../../assets/branding-service.jpg';

const services = [
  {
    icon: Star,
    title: "Brand Strategy",
    description: "Comprehensive brand positioning and strategy development that resonates with your target audience."
  },
  {
    icon: Palette,
    title: "Logo & Visual Identity",
    description: "Create memorable logos and cohesive visual systems that represent your brand's unique personality."
  },
  {
    icon: FileText,
    title: "Marketing Collaterals",
    description: "Professional design of business cards, brochures, websites, and all marketing materials."
  },
  {
    icon: Award,
    title: "Brand Guidelines",
    description: "Detailed brand guidelines to ensure consistent application across all touchpoints."
  }
];

const process = [
  {
    step: "01",
    title: "Discovery & Research",
    description: "Deep dive into your business, competitors, and target audience to understand your unique position."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Create comprehensive brand strategy including positioning, messaging, and visual direction."
  },
  {
    step: "03",
    title: "Design & Creation",
    description: "Develop visual identity, logo, and all brand assets with multiple concept iterations."
  },
  {
    step: "04",
    title: "Guidelines & Launch",
    description: "Deliver complete brand guidelines and support for successful brand implementation."
  }
];

const portfolioTypes = [
  "Technology Startups", "Healthcare", "Financial Services", "Retail & E-commerce",
  "Restaurants & Hospitality", "Professional Services", "Non-Profit Organizations", "Manufacturing"
];

const deliverables = [
  { item: "Logo Design", description: "Primary and secondary logo variations" },
  { item: "Color Palette", description: "Primary and secondary brand colors" },
  { item: "Typography", description: "Brand fonts for headers and body text" },
  { item: "Business Stationery", description: "Business cards, letterheads, envelopes" },
  { item: "Digital Assets", description: "Social media templates, email signatures" },
  { item: "Brand Guidelines", description: "Comprehensive usage documentation" }
];

const stats = [
  { number: "200+", label: "Brands Created" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5-7", label: "Days Delivery" },
  { number: "100%", label: "Original Designs" }
];

export default function BrandingService() {
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
                  <Star className="h-4 w-4" />
                  <span>Branding & Design</span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Brand,{' '}
                  <TypeWriter 
                    texts={['Your Story', 'Your Identity', 'Your Legacy', 'Your Future']}
                    className="text-primary-light"
                  />
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                  Create compelling brand identities that resonate with your audience and help you stand out 
                  in today's competitive market. From strategy to visual execution, we craft brands that matter.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100">
                    Start Branding
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
                  src={brandingService} 
                  alt="Brand design process" 
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
                Branding Services
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Complete brand development from strategy to implementation
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

      {/* Process */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Branding Process
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                A systematic approach to creating brands that connect, communicate, and convert
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

      {/* Deliverables */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                What You Get
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Comprehensive brand package with everything you need to launch and grow your brand
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, index) => (
              <AnimatedSection key={deliverable.item} animation="scale" delay={index * 100}>
                <div className="card-elevated p-6 group hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-2">{deliverable.item}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{deliverable.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Types */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Industries We've Branded
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Diverse experience across multiple sectors with industry-specific insights
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioTypes.map((type, index) => (
              <AnimatedSection key={type} animation="scale" delay={index * 50}>
                <div className="card-elevated p-6 text-center hover:shadow-[var(--shadow-md)] transition-[var(--transition-smooth)] group">
                  <div className="mb-3">
                    <Eye className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-neutral-700 font-semibold text-sm">{type}</p>
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
              Ready to Build Your Brand?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's create a brand identity that captures your vision and connects with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100">
                Start Your Brand Journey
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