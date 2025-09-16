import React from 'react';
import { Users, TrendingUp, Target, Star, Globe2, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { ServiceCard } from '../components/ServiceCard';
import { TypeWriter } from '../components/TypeWriter';

// Import images
import recruitmentService from '../assets/recruitment-service.jpg';
import travelService from '../assets/travel-service.jpg';
import marketingService from '../assets/marketing-service.jpg';
import brandingService from '../assets/branding-service.jpg';
import webDevService from '../assets/web-dev-service.jpg';

const services = [
  {
    icon: Users,
    title: "Recruitment & HR Solutions",
    tagline: "Hire Smart, Grow Fast",
    description: "End-to-end recruitment services, from talent sourcing to onboarding. We specialize in finding the perfect cultural and skill fit for your organization across all industries and experience levels.",
    image: recruitmentService,
    link: "/services/recruitment",
    features: ["Executive Search", "Volume Hiring", "Contract Staffing", "HR Consulting"]
  },
  {
    icon: TrendingUp,
    title: "Air Ticketing & Travel",
    tagline: "Hassle-Free Corporate Travel",
    description: "Comprehensive travel solutions for businesses and individuals. From domestic to international flights, we handle all your travel needs with competitive rates and exceptional service.",
    image: travelService,
    link: "/services/travel",
    features: ["Corporate Travel", "International Flights", "Hotel Bookings", "Travel Insurance"]
  },
  {
    icon: Target,
    title: "Digital Marketing",
    tagline: "Grow Your Online Presence",
    description: "Data-driven digital marketing strategies that boost your online visibility, engage your target audience, and drive measurable results across all digital channels.",
    image: marketingService,
    link: "/services/marketing",
    features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
  },
  {
    icon: Star,
    title: "Branding & Design",
    tagline: "Your Brand, Your Identity",
    description: "Create compelling brand identities that resonate with your audience. From logo design to complete brand strategies, we help you stand out in today's competitive market.",
    image: brandingService,
    link: "/services/branding",
    features: ["Brand Strategy", "Logo Design", "Marketing Collaterals", "Brand Guidelines"]
  },
  {
    icon: Globe2,
    title: "Web Development",
    tagline: "Modern & Responsive Websites",
    description: "Custom websites and web applications built with cutting-edge technology. We create user-friendly, responsive solutions that drive business growth and enhance user experience.",
    image: webDevService,
    link: "/services/web-development",
    features: ["Custom Development", "E-commerce Solutions", "Mobile Apps", "Maintenance & Support"]
  }
];

const benefits = [
  {
    icon: Award,
    title: "Expert Teams",
    description: "Specialized professionals across each domain with proven track records."
  },
  {
    icon: Target,
    title: "Quality First",
    description: "Rigorous processes and quality checks ensure exceptional deliverables."
  },
  {
    icon: Globe2,
    title: "Pan-India Reach",
    description: "Local presence with global standards and international capabilities."
  }
];

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We understand your business needs, goals, and challenges through detailed consultation."
  },
  {
    step: "02", 
    title: "Strategy Development",
    description: "Create customized strategies and solutions tailored to your specific requirements."
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute the plan with our expert teams while maintaining clear communication."
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring and optimization to ensure maximum results and ROI."
  }
];

export default function Services() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-white">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection animation="slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our{' '}
                <TypeWriter 
                  texts={['Services', 'Solutions', 'Expertise', 'Capabilities']}
                  className="text-primary-foreground"
                />
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive business solutions designed to accelerate your growth and success. 
                From talent acquisition to digital presence, we've got you covered.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                <span>One Stop, Many Solutions</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="slide-up" delay={index * 100}>
                <div className="card-elevated p-8 group hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                      <p className="text-primary font-semibold text-sm mb-3">{service.tagline}</p>
                      <p className="text-neutral-600 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link 
                        to={service.link}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-[var(--transition-fast)] group/link"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards Visual */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Service Showcase
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Explore our service offerings in detail and discover how we can help transform your business
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                We bring expertise, innovation, and dedication to every project we undertake
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} animation="scale" delay={index * 200}>
                <div className="card-elevated p-8 text-center group hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">{benefit.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                A systematic approach that ensures quality delivery and client satisfaction at every step
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <AnimatedSection key={step.step} animation="slide-up" delay={index * 100}>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[var(--shadow-primary)]">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and create a customized solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100 text-lg px-8 py-4">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/about" className="btn-ghost border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Learn About Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}