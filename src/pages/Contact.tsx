// src/pages/contact.tsx
import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, MessageCircle, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { TypeWriter } from '../components/TypeWriter';

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 91218611925"],
    action: "tel:+919121861192"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hr@mas7i.com", "shehnaaz.noor@gmail.com"],
    action: "mailto:hr@mas7i.com"
  },
  {
    icon: Globe,
    title: "Website",
    details: ["www.mas7i.com"],
    action: "https://www.mas7i.com"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["No 24, 4th Floor, Sri Krishna Center", "Abids Troop Bazar, Hyderabad"],
    action: ""
  }
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('phone', formData.phone);
      fd.append('service', formData.service);
      fd.append('message', formData.message);

      const res = await fetch('/api/form1.php', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data?.error || 'Failed to send.');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-overlay filter blur-xl animate-float" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent rounded-full mix-blend-overlay filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection animation="slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's{' '}
                <TypeWriter
                  texts={['Connect', 'Collaborate', 'Create', 'Grow Together']}
                  className="text-primary-light"
                />
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Ready to transform your business? We'd love to hear about your goals and
                discuss how our solutions can help you achieve them.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                <span>Free Consultation Available</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <AnimatedSection animation="slide-right">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  We're here to help you succeed. Reach out to us through any of the channels below,
                  and let's start building something amazing together.
                </p>
              </AnimatedSection>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <AnimatedSection key={info.title} animation="slide-right" delay={index * 100}>
                    <div className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-200 hover:border-primary/30 hover:shadow-[var(--shadow-md)] transition-[var(--transition-smooth)]">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-neutral-600 mb-1">
                            {info.action ? (
                              <a
                                href={info.action}
                                className="hover:text-primary transition-[var(--transition-fast)]"
                                target={info.action.startsWith('http') ? '_blank' : undefined}
                                rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Business Hours */}
              <AnimatedSection animation="slide-right" delay={400}>
                <div className="card-elevated p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-neutral-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2">
                    {businessHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between text-sm">
                        <span className="text-neutral-600">{schedule.day}</span>
                        <span className="font-medium text-neutral-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Actions */}
              <AnimatedSection animation="slide-right" delay={500}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919121861192"
                    className="btn-primary flex-1 justify-center"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919121861192?text=Hi%20MAS7i%2C%20I%27d%20like%20to%20discuss%20my%20business%20needs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary bg-green-500 text-white border-green-500 hover:bg-green-600 flex-1 justify-center"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="card-elevated p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send us a Message</h3>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-[var(--transition-fast)]"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-[var(--transition-fast)]"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-[var(--transition-fast)]"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-[var(--transition-fast)]"
                        >
                          <option value="">Select a service</option>
                          <option value="recruitment">Recruitment & HR</option>
                          <option value="travel">Air Ticketing</option>
                          <option value="marketing">Digital Marketing</option>
                          <option value="branding">Branding</option>
                          <option value="web-development">Web Development</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-[var(--transition-fast)] resize-none"
                        placeholder="Tell us about your project requirements, goals, and how we can help you..."
                      />
                    </div>

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full text-lg py-4 disabled:opacity-60"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h4>
                    <p className="text-neutral-600 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

                <p className="text-xs text-neutral-500 mt-4 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600">
                Quick answers to common questions about working with us
              </p>
            </AnimatedSection>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How quickly can you start working on my project?",
                answer: "We typically begin projects within 3-5 business days after finalizing requirements. For urgent needs, we offer expedited onboarding within 24-48 hours."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer comprehensive support and maintenance packages. Our team provides ongoing assistance, updates, and optimization to ensure continued success."
              },
              {
                question: "What industries do you work with?",
                answer: "We serve clients across various industries including IT, healthcare, finance, retail, manufacturing, education, and startups. Our solutions are tailored to each industry's specific needs."
              },
              {
                question: "Can you work with our existing systems and tools?",
                answer: "Absolutely. We're experienced in integrating with popular CRMs, analytics platforms, HRMS, CMS, and payment gateways. We adapt to your existing workflow."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                <details className="group card-elevated p-6 open:shadow-[var(--shadow-lg)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-left font-semibold text-neutral-900 hover:text-primary transition-[var(--transition-fast)]">
                    <span>{faq.question}</span>
                    <span className="transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-neutral-600 leading-relaxed">{faq.answer}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
