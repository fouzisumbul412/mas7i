import React from 'react';
import { CheckCircle2, Users, Award, Globe2, Target, Layers, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { TypeWriter } from '../components/TypeWriter';

const values = [
  {
    icon: Layers,
    title: "End-to-End Excellence",
    description: "We provide comprehensive solutions that cover every aspect of your business needs, ensuring seamless integration and optimal results."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Our focus is on delivering measurable outcomes that directly contribute to your business growth and long-term success."
  },
  {
    icon: Globe2,
    title: "Global Standards",
    description: "We maintain international quality standards while understanding local market dynamics and business environments."
  }
];

const timeline = [
  {
    year: "1999",
    title: "Company Foundation",
    description: "Started as a recruitment consultancy with a vision to transform how businesses find talent."
  },
  {
    year: "2005",
    title: "Service Expansion",
    description: "Added travel and logistics services to become a comprehensive business partner."
  },
  {
    year: "2012",
    title: "Digital Revolution",
    description: "Launched digital marketing and web development services to meet evolving market needs."
  },
  {
    year: "2018",
    title: "International Reach",
    description: "Extended services globally while maintaining our commitment to local expertise."
  },
  {
    year: "2024",
    title: "Future Ready",
    description: "Embracing AI and automation to deliver next-generation business solutions."
  }
];

const team = [
  {
    name: "Rajesh Kumar",
    position: "Founder & CEO",
    experience: "25+ years",
    expertise: "Business Strategy & Leadership"
  },
  {
    name: "Priya Sharma",
    position: "Head of Operations",
    experience: "15+ years", 
    expertise: "Operations & Process Excellence"
  },
  {
    name: "Mohammed Ali",
    position: "Technology Director",
    experience: "12+ years",
    expertise: "Digital Innovation & Development"
  }
];

const stats = [
  { number: "1000+", label: "Successful Projects", icon: TrendingUp },
  { number: "95%", label: "Client Retention Rate", icon: Users },
  { number: "25+", label: "Years of Excellence", icon: Award },
  { number: "50+", label: "Team Members", icon: Globe2 }
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection animation="slide-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium mb-6">
                <CheckCircle2 className="h-4 w-4 text-primary-light" />
                <span>Since 1999</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About{' '}
                <span className="text-primary-light">
                  <TypeWriter 
                    texts={['MAS7i', 'Our Story', 'Our Mission', 'Our Vision']}
                  />
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to simplify operations and accelerate growth through integrated 
                recruitment, travel, marketing, branding, and web solutions that drive real results.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale" delay={index * 100}>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">{stat.number}</div>
                  <div className="text-neutral-600 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-neutral-700 leading-relaxed">
                <p className="mb-4">
                  Founded in 1999 with a simple belief that businesses grow faster with the right partners, 
                  MAS7i has evolved from a recruitment consultancy into a comprehensive business solutions provider.
                </p>
                <p className="mb-4">
                  We blend deep domain expertise with execution excellence, serving startups, SMEs, and 
                  enterprises across India and internationally. Our integrated approach ensures that every 
                  aspect of your business growth is carefully orchestrated.
                </p>
                <p>
                  Today, we're proud to be the trusted partner for over 1000 businesses, helping them 
                  navigate challenges, seize opportunities, and achieve sustainable growth in an 
                  ever-evolving marketplace.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="card-elevated p-6">
                    <div className="text-2xl font-bold text-primary mb-2">25+</div>
                    <div className="text-sm text-neutral-600">Years of Excellence</div>
                  </div>
                  <div className="card-elevated p-6">
                    <div className="text-2xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-neutral-600">Projects Delivered</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="card-elevated p-6">
                    <div className="text-2xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-neutral-600">Client Retention</div>
                  </div>
                  <div className="card-elevated p-6">
                    <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-neutral-600">Support Available</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                The principles that guide everything we do and drive our commitment to excellence
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="slide-up" delay={index * 200}>
                <div className="card-elevated p-8 text-center group hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">{value.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Key milestones that have shaped our growth and defined our commitment to excellence
              </p>
            </AnimatedSection>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} animation="slide-right" delay={index * 100}>
                  <div className="relative flex items-start gap-6">
                    {/* Timeline marker */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-[var(--shadow-primary)]">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 card-elevated p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Experienced leaders driving innovation and excellence across all our service areas
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} animation="scale" delay={index * 200}>
                <div className="card-elevated p-8 text-center group hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-neutral-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-neutral-500">{member.expertise}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Our Location
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Headquarters</h3>
                    <p className="text-neutral-600">
                      No 24, 4th Floor, Sri Krishna Center<br />
                      Abids Troop Bazar, Hyderabad<br />
                      Telangana, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe2 className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Service Areas</h3>
                    <p className="text-neutral-600">
                      Pan-India operations with international reach.<br />
                      Remote consultation available worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <div className="card-elevated p-8 text-center">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Ready to Connect?</h3>
                <p className="text-neutral-600 mb-6">
                  Whether you're local or international, we're here to help your business grow.
                </p>
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}