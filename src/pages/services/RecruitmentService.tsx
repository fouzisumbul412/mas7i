import React from 'react';
import { Users, Target, CheckCircle2, ArrowRight, Search, UserCheck, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../../components/AnimatedSection';
import { TypeWriter } from '../../components/TypeWriter';
import recruitmentService from '../../assets/recruitment-service.jpg';

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description: "Find top-tier leadership and specialized talent for critical roles in your organization."
  },
  {
    icon: Users,
    title: "Volume Hiring",
    description: "Efficient mass recruitment solutions for scaling teams and seasonal workforce needs."
  },
  {
    icon: UserCheck,
    title: "Contract Staffing",
    description: "Flexible staffing solutions for project-based work and temporary assignments."
  },
  {
    icon: Briefcase,
    title: "HR Consulting",
    description: "Strategic HR advisory services to optimize your human resources processes."
  }
];

const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "Deep dive into your hiring needs, company culture, and role specifications."
  },
  {
    step: "02",
    title: "Talent Sourcing",
    description: "Leverage our extensive network and advanced tools to identify the best candidates."
  },
  {
    step: "03",
    title: "Screening & Assessment",
    description: "Rigorous evaluation process including technical, cultural, and personality assessments."
  },
  {
    step: "04",
    title: "Interview Coordination",
    description: "Manage the entire interview process with scheduling, feedback, and decision support."
  },
  {
    step: "05",
    title: "Onboarding Support",
    description: "Facilitate smooth transitions with comprehensive onboarding assistance."
  }
];

const industries = [
  "Information Technology",
  "Healthcare",
  "Financial Services",
  "Manufacturing",
  "Retail & E-commerce",
  "Education",
  "Telecommunications",
  "Real Estate"
];

const stats = [
  { number: "5000+", label: "Successful Placements" },
  { number: "500+", label: "Companies Served" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "30", label: "Days Avg. Time to Hire" }
];

export default function RecruitmentService() {
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
                  <Users className="h-4 w-4" />
                  <span>Recruitment & HR Solutions</span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Find the Right{' '}
                  <TypeWriter 
                    texts={['Talent', 'People', 'Team', 'Professionals']}
                    className="text-primary-light"
                  />
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                  Connect with top-tier talent through our comprehensive recruitment solutions. 
                  We ensure the perfect cultural and skill fit for every role in your organization.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100">
                    Start Hiring
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
                  src={recruitmentService} 
                  alt="Recruitment process" 
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
                Our Recruitment Services
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Comprehensive hiring solutions tailored to your organization's unique needs
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
                Our Hiring Process
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                A systematic approach that ensures quality candidates and faster hiring decisions
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

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Deep expertise across diverse sectors with specialized recruitment strategies
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry} animation="scale" delay={index * 50}>
                <div className="card-elevated p-4 text-center hover:shadow-[var(--shadow-md)] transition-[var(--transition-smooth)]">
                  <p className="text-neutral-700 font-medium">{industry}</p>
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
              Ready to Find Your Next Star Employee?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your hiring needs and create a recruitment strategy that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100">
                Start Recruitment Process
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