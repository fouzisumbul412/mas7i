import React from 'react';
import { Target, TrendingUp, CheckCircle2, ArrowRight, Search, Share2, BarChart3, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../../components/AnimatedSection';
import { TypeWriter } from '../../components/TypeWriter';
import marketingService from '../../assets/marketing-service.jpg';

const services = [
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Boost your search visibility with strategic SEO and targeted search engine marketing campaigns."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engage your audience across all major social platforms with compelling content and strategic campaigns."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights and comprehensive reporting to measure and optimize your marketing ROI."
  },
  {
    icon: Megaphone,
    title: "Content Strategy",
    description: "Create compelling content that resonates with your audience and drives meaningful engagement."
  }
];

const platforms = [
  "Google Ads", "Facebook", "Instagram", "LinkedIn", "Twitter", 
  "YouTube", "TikTok", "Pinterest", "WhatsApp Business"
];

const strategies = [
  {
    title: "Search Engine Optimization",
    description: "Improve organic rankings and drive qualified traffic to your website.",
    metrics: ["Keyword Rankings", "Organic Traffic", "Conversion Rate"]
  },
  {
    title: "Pay-Per-Click Advertising",
    description: "Targeted paid campaigns for immediate visibility and results.",
    metrics: ["Click-Through Rate", "Cost Per Click", "ROAS"]
  },
  {
    title: "Social Media Management",
    description: "Build brand awareness and engage your community across social platforms.",
    metrics: ["Engagement Rate", "Follower Growth", "Brand Mentions"]
  },
  {
    title: "Content Marketing",
    description: "Strategic content creation that educates, entertains, and converts.",
    metrics: ["Content Views", "Lead Generation", "Brand Authority"]
  }
];

const stats = [
  { number: "300%", label: "Average Traffic Increase" },
  { number: "150+", label: "Campaigns Managed" },
  { number: "4.2x", label: "Average ROI" },
  { number: "95%", label: "Client Retention" }
];

export default function MarketingService() {
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
                  <Target className="h-4 w-4" />
                  <span>Digital Marketing</span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Grow Your{' '}
                  <TypeWriter 
                    texts={['Brand', 'Audience', 'Revenue', 'Impact']}
                    className="text-primary-light"
                  />
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                  Data-driven digital marketing strategies that boost your online visibility, engage your target audience, 
                  and drive measurable results across all digital channels.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100">
                    Start Growing
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
                  src={marketingService} 
                  alt="Digital marketing analytics" 
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
                Marketing Services
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Comprehensive digital marketing solutions to amplify your brand and drive growth
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

      {/* Strategies */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Strategies
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Proven methodologies that deliver results across all digital marketing channels
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <AnimatedSection key={strategy.title} animation="slide-up" delay={index * 100}>
                <div className="card-elevated p-8 group hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{strategy.title}</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">{strategy.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-neutral-700">Key Metrics:</p>
                    <div className="flex flex-wrap gap-2">
                      {strategy.metrics.map((metric) => (
                        <span key={metric} className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          <CheckCircle2 className="h-3 w-3" />
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Platforms We Master
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Expert management across all major digital marketing platforms and channels
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platforms.map((platform, index) => (
              <AnimatedSection key={platform} animation="scale" delay={index * 50}>
                <div className="card-elevated p-6 text-center hover:shadow-[var(--shadow-md)] transition-[var(--transition-smooth)] group">
                  <div className="mb-3">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-neutral-700 font-semibold text-sm">{platform}</p>
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
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's create a data-driven marketing strategy that delivers measurable results and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100">
                Get Marketing Audit
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