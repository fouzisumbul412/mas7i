import React from 'react';
import { Plane, MapPin, CheckCircle2, ArrowRight, Clock, Shield, CreditCard, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../../components/AnimatedSection';
import { TypeWriter } from '../../components/TypeWriter';
import travelService from '../../assets/travel-service.jpg';

const services = [
  {
    icon: Plane,
    title: "Corporate Travel",
    description: "Streamlined business travel solutions with cost optimization and policy compliance."
  },
  {
    icon: MapPin,
    title: "International Flights",
    description: "Global connectivity with competitive rates and flexible booking options."
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage for worry-free business and leisure travel."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your travel needs and emergencies."
  }
];

const features = [
  {
    icon: CreditCard,
    title: "Best Price Guarantee",
    description: "Competitive rates with transparent pricing and no hidden fees."
  },
  {
    icon: Clock,
    title: "Quick Booking",
    description: "Fast and efficient booking process with instant confirmations."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and secure payment processing with multiple payment options."
  },
  {
    icon: Headphones,
    title: "Expert Assistance",
    description: "Professional travel consultants to help with complex itineraries."
  }
];

const destinations = [
  "Dubai", "Singapore", "London", "New York", "Tokyo", "Bangkok", 
  "Sydney", "Paris", "Frankfurt", "Toronto", "Hong Kong", "Mumbai"
];

const stats = [
  { number: "10K+", label: "Bookings Annually" },
  { number: "150+", label: "Destinations" },
  { number: "98%", label: "On-Time Service" },
  { number: "24/7", label: "Customer Support" }
];

export default function TravelService() {
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
                  <Plane className="h-4 w-4" />
                  <span>Air Ticketing & Travel</span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Travel{' '}
                  <TypeWriter 
                    texts={['Smart', 'Safe', 'Simple', 'Anywhere']}
                    className="text-primary-light"
                  />
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                  Comprehensive travel solutions for businesses and individuals. From domestic to international flights, 
                  we handle all your travel needs with competitive rates and exceptional service.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100">
                    Book Now
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
                  src={travelService} 
                  alt="Air travel" 
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
                Travel Services
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Complete travel solutions designed for modern business and leisure needs
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
                Why Choose Us?
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Experience the difference with our premium travel services and customer-first approach
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

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Popular Destinations
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Fly to top business and leisure destinations worldwide with competitive rates
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {destinations.map((destination, index) => (
              <AnimatedSection key={destination} animation="scale" delay={index * 50}>
                <div className="card-elevated p-6 text-center hover:shadow-[var(--shadow-md)] transition-[var(--transition-smooth)] group">
                  <div className="mb-3">
                    <MapPin className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-neutral-700 font-semibold">{destination}</p>
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
              Ready to Plan Your Next Trip?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get the best deals on flights and travel packages. Let our experts help you plan the perfect journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-neutral-900 hover:bg-neutral-100">
                Book Your Flight
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