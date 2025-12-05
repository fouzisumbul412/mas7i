// src/pages/home.tsx
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Target, Layers, Globe2, Quote, Star, Users, Award, TrendingUp, Phone, Mail, MapPin, Send, Plus, Minus, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TypeWriter } from '../components/TypeWriter';
import { AnimatedSection } from '../components/AnimatedSection';

import heroBusiness from '../assets/hero-business.jpg';
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
    description: "Connect with top-tier talent through our comprehensive recruitment and HR solutions. We ensure the perfect fit for every role.",
    image: recruitmentService,
    link: "/services/recruitment"
  },
  {
    icon: TrendingUp,
    title: "Air Ticketing",
    tagline: "Hassle-Free Travel Bookings",
    description: "From domestic to international flights, we simplify your travel needs with competitive rates and excellent service.",
    image: travelService,
    link: "/services/travel"
  },
  {
    icon: Target,
    title: "Digital Marketing",
    tagline: "Grow Your Online Presence",
    description: "Data-driven marketing strategies that enhance brand visibility and deliver measurable growth across all digital channels.",
    image: marketingService,
    link: "/services/marketing"
  },
  {
    icon: Star,
    title: "Branding",
    tagline: "Your Brand, Your Identity",
    description: "Craft unique brand identities that resonate with your audience and help you stand out in today's competitive market.",
    image: brandingService,
    link: "/services/branding"
  },
  {
    icon: Globe2,
    title: "Web Development",
    tagline: "Modern & Responsive Websites",
    description: "Tailored, user-friendly websites built with cutting-edge technology to match your business goals and drive results.",
    image: webDevService,
    link: "/services/web-development"
  }
];

const stats = [
  { number: "16+", label: "Years Experience" },
  { number: "100+", label: "Projects Delivered" },
  { number: "95%", label: "Client Retention" },
  { number: "24/7", label: "Support Available" }
];

const pillars = [
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description: "Everything your business needs in one integrated platform, from recruitment to digital presence."
  },
  {
    icon: Target,
    title: "Results-Driven Approach",
    description: "We focus on measurable outcomes that directly impact your business growth and success."
  },
  {
    icon: Globe2,
    title: "Global Reach, Local Expertise",
    description: "International standards with deep understanding of local markets and business environments."
  }
];

const testimonials = [
  {
    quote: "MAS7i transformed our recruitment process. We found the perfect candidates in record time.",
    author: "Sarah Johnson",
    position: "HR Director, TechCorp"
  },
  {
    quote: "Their digital marketing strategies increased our online presence by 300% in just 6 months.",
    author: "Michael Chen",
    position: "Marketing Manager, StartupXYZ"
  },
  {
    quote: "Professional, reliable, and results-oriented. MAS7i is our go-to partner for all business needs.",
    author: "Priya Sharma",
    position: "CEO, InnovateIndia"
  }
];

const faqData = [
  {
    question: "What services does MAS7i offer?",
    answer: "We provide comprehensive business solutions including Recruitment & HR, Air Ticketing, Digital Marketing, Branding, and Web Development services."
  },
  {
    question: "How experienced is MAS7i?",
    answer: "With over 16 years of industry experience, we have successfully delivered 100+ projects with a 95% client retention rate."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we serve both domestic and international clients, combining global standards with local market expertise."
  },
  {
    question: "What makes MAS7i different?",
    answer: "Our integrated approach means you get all business solutions under one roof, ensuring consistency and efficiency across all services."
  },
  {
    question: "How quickly can you start a project?",
    answer: "We typically begin projects within 3-5 business days after requirement analysis, with 24/7 support throughout the process."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We understand your business needs, goals, and challenges through detailed consultation."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Our experts create a customized strategy tailored to your specific requirements and market."
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute the plan with precision, keeping you informed throughout the process."
  },
  {
    step: "04",
    title: "Results & Growth",
    description: "Measure success and continuously optimize for maximum growth and ROI."
  }
];

const popularSearches = [
  { title: "HR Solutions", link: "/services/recruitment" },
  { title: "Flight Booking", link: "/services/travel" },
  { title: "SEO Services", link: "/services/marketing" },
  { title: "Logo Design", link: "/services/branding" },
  { title: "Website Development", link: "/services/web-development" },
  { title: "Digital Marketing", link: "/services/marketing" },
  { title: "Brand Strategy", link: "/services/branding" },
  { title: "Corporate Travel", link: "/services/travel" }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form 2 (Hero Quote) state
  const [formDataHero, setFormDataHero] = useState({
    name: '', phone: '', email: '', service: '', message: ''
  });
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [heroError, setHeroError] = useState<string | null>(null);

  // Form 3 (Bottom Message) state
  const [formDataContact, setFormDataContact] = useState({
    name: '', email: '', phone: '', message: ''
  });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);

  const handleFaqToggle = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Submit Hero "Free Quote" -> /api/form2.php
  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroSubmitting(true);
    setHeroError(null);
    try {
      const fd = new FormData();
      Object.entries(formDataHero).forEach(([k, v]) => fd.append(k, v));
      const res = await fetch('/api/form2.php', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data?.error || 'Failed to send.');
      setHeroSubmitted(true);
      setFormDataHero({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err: any) {
      setHeroError(err.message || 'Something went wrong.');
    } finally {
      setHeroSubmitting(false);
    }
  };

  // Submit Bottom "Send us a Message" -> /api/form3.php
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    setContactError(null);
    try {
      const fd = new FormData();
      Object.entries(formDataContact).forEach(([k, v]) => fd.append(k, v));
      const res = await fetch('/api/form3.php', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data?.error || 'Failed to send.');
      setContactSubmitted(true);
      setFormDataContact({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setContactError(err.message || 'Something went wrong.');
    } finally {
      setContactSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Banner Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBusiness}
            alt="Business background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-black/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8">
              <AnimatedSection animation="slide-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-red-400" />
                  <span>16+ years of industry excellence</span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white">
                  Your Trusted Partner for
                  <br />
                  <TypeWriter
                    texts={['Business Growth', 'Digital Success', 'Market Expansion', 'Innovation']}
                    className="text-red-600"
                  />
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <p className="text-lg md:text-xl text-neutral-200 max-w-2xl leading-relaxed">
                  We deliver integrated solutions that simplify operations, enhance brand visibility,
                  and open doors to new opportunities in today's competitive landscape.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary text-lg px-8 py-4 ">
                    Start Your Journey
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link to="/services" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                    Explore Services
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Hero Quote Form (Form 2) */}
            <AnimatedSection animation="slide-left" delay={400} className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Quote</h3>

                {!heroSubmitted ? (
                  <form className="space-y-4" onSubmit={handleHeroSubmit}>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formDataHero.name}
                        onChange={(e) => setFormDataHero({ ...formDataHero, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/20 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formDataHero.phone}
                        onChange={(e) => setFormDataHero({ ...formDataHero, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/20 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formDataHero.email}
                        onChange={(e) => setFormDataHero({ ...formDataHero, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/20 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <select
                        value={formDataHero.service}
                        onChange={(e) => setFormDataHero({ ...formDataHero, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/20 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="recruitment">Recruitment & HR</option>
                        <option value="travel">Air Ticketing</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="branding">Branding</option>
                        <option value="web-development">Web Development</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        value={formDataHero.message}
                        onChange={(e) => setFormDataHero({ ...formDataHero, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/20 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none"
                        required
                      />
                    </div>

                    {heroError && <p className="text-red-200 text-sm">{heroError}</p>}

                    <button
                      type="submit"
                      disabled={heroSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-60"
                    >
                      {heroSubmitting ? 'Sending...' : 'Get Free Quote'}
                      <ArrowRight className="h-5 w-5 inline ml-2" />
                    </button>
                  </form>
                ) : (
                  <div className="text-white">
                    <p className="font-semibold mb-2">Thanks! Your request was sent.</p>
                    <p className="text-sm opacity-90">We’ll contact you shortly.</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-up">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
                  About <span className="text-primary">MAS7i</span>
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  With over 16 years of industry experience, MAS7i has been the trusted partner
                  for businesses seeking growth and digital transformation. We combine innovation
                  with reliability to deliver results that matter.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Our integrated approach ensures that all your business needs are met under one roof,
                  from talent acquisition to digital marketing, creating synergies that drive exceptional outcomes.
                </p>
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
                  <img
                    src={heroBusiness}
                    alt="About MAS7i"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Comprehensive solutions designed to accelerate your business growth and success
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={`${service.title}-${index}`}
                  className="relative overflow-hidden rounded-2xl group"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 z-10 p-5 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-2">
                      {Icon && (
                        <div className="grid place-items-center w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      )}
                      <h3 className="text-white text-xl font-bold">{service.title}</h3>
                    </div>
                    {service.tagline && (
                      <p className="text-red-400 text-sm font-medium mb-1">
                        {service.tagline}
                      </p>
                    )}
                    <p className="text-white/90 text-sm mb-4">{service.description}</p>
                    <Link
                      to={service.link}
                      className="text-white font-semibold inline-flex items-center gap-1"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale" delay={index * 100}>
                <div className="text-center text-white">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                A systematic approach that ensures quality delivery and client satisfaction
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} animation="slide-up" delay={index * 100}>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We are a team of passionate professionals dedicated to helping businesses thrive
                in today's competitive landscape through innovative solutions and exceptional service.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Team",
                description: "Our diverse team brings decades of combined experience across multiple industries.",
                icon: Users
              },
              {
                title: "Innovation Focus",
                description: "We stay ahead of trends to provide cutting-edge solutions for modern challenges.",
                icon: Star
              },
              {
                title: "Client Success",
                description: "Your success is our priority. We work closely with you to achieve your business goals.",
                icon: Award
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} animation="scale" delay={index * 200}>
                <div className="card-elevated p-8 text-center hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us + Marquee */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Discover what makes us the preferred choice for businesses worldwide
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} animation="slide-up" delay={index * 200}>
                <div className="card-elevated p-8 text-center hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">{pillar.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{pillar.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="relative w-full overflow-hidden bg-primary rounded-2xl">
            <div className="py-4">
              <div className="flex animate-marquee whitespace-nowrap">
                <span className="mx-8 text-white font-semibold">✦ 100+ New Clients Every Month</span>
                <span className="mx-8 text-white font-semibold">✦ 16+ Years Experience</span>
                <span className="mx-8 text-white font-semibold">✦ Online Consultation – All India</span>
                <span className="mx-8 text-white font-semibold">✦ 24/7 Support</span>
                <span className="mx-8 text-white font-semibold">✦ Fast Turnaround</span>
                <span className="mx-8 text-white font-semibold">✦ 100+ New Clients Every Month</span>
                <span className="mx-8 text-white font-semibold">✦ 16+ Years Experience</span>
                <span className="mx-8 text-white font-semibold">✦ Online Consultation – All India</span>
                <span className="mx-8 text-white font-semibold">✦ 24/7 Support</span>
                <span className="mx-8 text-white font-semibold">✦ Fast Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Real stories from satisfied clients who have transformed their businesses with us
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} animation="slide-up" delay={index * 200}>
                <div className="card-elevated p-8 text-center hover:shadow-[var(--shadow-primary)] transition-[var(--transition-smooth)]">
                  <Quote className="mx-auto h-8 w-8 text-primary mb-4" />
                  <p className="text-neutral-600 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-neutral-800">{testimonial.author}</h4>
                    <p className="text-sm text-neutral-500">{testimonial.position}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600">
                Find answers to common questions about our services and processes
              </p>
            </AnimatedSection>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                <div className="card-elevated overflow-hidden">
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-semibold text-neutral-800">{faq.question}</span>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Again (Form 3) */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-up">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-neutral-600">
                    Ready to transform your business? Let's discuss how we can help you achieve your goals.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800">Phone</h3>
                      <p className="text-neutral-600">+91 9121861192</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800">Email</h3>
                      <p className="text-neutral-600">hr@mas7i.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800">Address</h3>
                      <p className="text-neutral-600">
                        No 24, 4th Floor, Sri Krishna Center,<br />
                        Abids Troop Bazar, Hyderabad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="card-elevated p-8">
                <h3 className="text-xl font-bold text-neutral-800 mb-6">Send us a Message</h3>

                {!contactSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formDataContact.name}
                        onChange={(e) => setFormDataContact({ ...formDataContact, name: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formDataContact.email}
                        onChange={(e) => setFormDataContact({ ...formDataContact, email: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        value={formDataContact.phone}
                        onChange={(e) => setFormDataContact({ ...formDataContact, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={5}
                        value={formDataContact.message}
                        onChange={(e) => setFormDataContact({ ...formDataContact, message: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-none"
                        required
                      ></textarea>
                    </div>

                    {contactError && <p className="text-red-600 text-sm">{contactError}</p>}

                    <button
                      type="submit"
                      disabled={contactSubmitting}
                      className="w-full btn-primary py-3 text-lg disabled:opacity-60"
                    >
                      {contactSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center">
                    <p className="font-semibold mb-2">Thanks! Your message was sent.</p>
                    <p className="text-sm text-neutral-600">We’ll reply shortly.</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                Popular Searches
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Quick access to our most requested services and solutions
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-up" delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {popularSearches.map((search) => (
                <Link
                  key={search.title}
                  to={search.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 hover:bg-primary hover:text-white rounded-full text-neutral-700 font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {search.title}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-500 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our integrated solutions can drive your business forward.
              Your success story starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-4">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-ghost border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919121861192?text=Hi%20MAS7i%2C%20I%27m%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse hover:animate-none transition-all duration-300 transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}
