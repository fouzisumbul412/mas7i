import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-[var(--transition-smooth)] ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-[var(--shadow-md)]' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Desktop Logo */}
                <img
                  src="/images/mas7i.png"
                  alt="MAS7i Logo"
                  className="h-24 w-24 object-cover shadow-[var(--shadow-primary)] group-hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] hidden md:block"
                />
                {/* Mobile Logo */}
                <img
                  src="/images/mas7i.png"
                  alt="MAS7i Logo"
                  className="h-24 w-24 object-cover shadow-[var(--shadow-primary)] group-hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] md:hidden"
                />
                <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur transition-[var(--transition-smooth)]" />
              </div>
              
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`relative text-sm font-medium transition-[var(--transition-smooth)] ${
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-neutral-600 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                    )}
                  </Link>
                  
                  {/* Services Dropdown */}
                  {item.name === 'Services' && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        <Link to="/services/recruitment" className="flex items-center px-4 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50">
                          Recruitment & HR Solutions
                        </Link>
                        <Link to="/services/travel" className="flex items-center px-4 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50">
                          Air Ticketing
                        </Link>
                        <Link to="/services/marketing" className="flex items-center px-4 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50">
                          Digital Marketing
                        </Link>
                        <Link to="/services/branding" className="flex items-center px-4 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50">
                          Branding
                        </Link>
                        <Link to="/services/web-development" className="flex items-center px-4 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50">
                          Web Development
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+919121861192"
                className="btn-secondary"
              >
                <Phone className="h-4 w-4" />
                +91 9121861192
              </a>
              <Link to="/contact" className="btn-primary">
                Get Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-[var(--transition-fast)]"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-[var(--transition-fast)] ${
                      location.pathname === item.href
                        ? 'text-primary bg-primary/10'
                        : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex gap-2 px-3 pt-2">
                  <a href="tel:+919121861192" className="btn-secondary flex-1 justify-center">
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <Link to="/contact" className="btn-primary flex-1 justify-center" onClick={() => setMobileMenuOpen(false)}>
                    Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                {/* Desktop Logo */}
                <img
                  src="/images/mas7i.png"
                  alt="MAS7i Logo"
                  className="h-24 w-24 rounded-full object-cover shadow-[var(--shadow-primary)] bg-white p-2 hidden md:block"
                />
                {/* Mobile Logo */}
                <img
                  src="/images/mas7i.png"
                  alt="MAS7i Logo"
                  className="h-24 w-24 rounded-full object-cover shadow-[var(--shadow-primary)] bg-white p-2 md:hidden"
                />
              </div>
              <p className="text-neutral-400 mb-4">
                Your trusted business partner for growth and success. We deliver integrated solutions that drive results.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-neutral-400 hover:text-white transition-[var(--transition-fast)]">Home</Link></li>
                <li><Link to="/about" className="text-neutral-400 hover:text-white transition-[var(--transition-fast)]">About</Link></li>
                <li><Link to="/services" className="text-neutral-400 hover:text-white transition-[var(--transition-fast)]">Services</Link></li>
                <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-[var(--transition-fast)]">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services/recruitment" className="text-neutral-400 hover:text-white transition-[var(--transition-fast)]">Recruitment & HR</Link></li>
                <li><Link to="/services/travel" className="text-neutral-400 hover:text-white transition-[var(--transition-fast)]">Air Ticketing</Link></li>
                <li><Link to="/services/marketing" className="text-neutral-400 hover:text-white transition-[var(--transition-fast)]">Digital Marketing</Link></li>
                <li><Link to="/services/branding" className="text-neutral-400 hover:text-white transition-[var(--transition-fast)]">Branding</Link></li>
                <li><Link to="/services/web-development" className="text-neutral-400 hover:text-white transition-[var(--transition-fast)]">Web Development</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <p className="text-neutral-400">
                  <strong className="text-white">Phone:</strong><br />
                  <a href="tel:+919121861192" className="hover:text-white transition-[var(--transition-fast)]">+91 9121861192</a>
                </p>
                <p className="text-neutral-400">
                  <strong className="text-white">Email:</strong><br />
                  <a href="mailto:hr@mas7i.com" className="hover:text-white transition-[var(--transition-fast)]">hr@mas7i.com</a>
                </p>
                <p className="text-neutral-400">
                  <strong className="text-white">Website:</strong><br />
                  <a href="https://www.mas7i.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-[var(--transition-fast)]">www.mas7i.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} MAS7i. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link to="/contact" className="text-neutral-400 hover:text-white text-sm transition-[var(--transition-fast)]">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-neutral-400 hover:text-white text-sm transition-[var(--transition-fast)]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919121861192?text=Hi%20MAS7i%2C%20I%27m%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 hover:scale-110 transition-[var(--transition-bounce)] flex items-center justify-center group animate-pulse"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7 group-hover:scale-110 transition-transform" />
        <div className="absolute -inset-2 rounded-full bg-green-500 opacity-30 animate-ping" />
      </a>
    </div>
  );
}