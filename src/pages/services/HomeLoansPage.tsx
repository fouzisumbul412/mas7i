import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  FileText,
  CheckCircle,
  Shield,
  Clock,
  Users,
  Phone,
  ArrowRight,
  Building,
  Percent,
  IndianRupee,
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageHero from '@/components/PageHero';

const HomeLoansPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const loanFeatures = [
    {
      icon: IndianRupee,
      title: 'Up to ₹1 Crore',
      description:
        'Get home loans up to 1 Crore with competitive interest rates and flexible repayment options.',
    },
    {
      icon: Percent,
      title: 'Low Interest Rates',
      description:
        'Enjoy some of the lowest interest rates in the market starting from 8.5% p.a.',
    },
    {
      icon: Clock,
      title: 'Quick Approval',
      description:
        'Fast track approval process with loan disbursement in as little as 7 working days.',
    },
    {
      icon: FileText,
      title: 'Minimal Documentation',
      description:
        'Simplified paperwork with our expert team handling all the documentation for you.',
    },
    {
      icon: Shield,
      title: 'Transparent Process',
      description:
        'No hidden charges or fees. Complete transparency throughout the loan process.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description:
        'Personal relationship manager to guide you through every step of the process.',
    },
  ];

  // ---------- EMI CALCULATOR STATE ----------
  const [loanAmount, setLoanAmount] = useState<string>('5000000');
  const [interestRate, setInterestRate] = useState<string>('8.5');
  const [tenureYears, setTenureYears] = useState<string>('20');
  const [emiResult, setEmiResult] = useState<{
    emi: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);

  const handleCalculateEmi = () => {
    const P = Number(loanAmount);
    const annualRate = Number(interestRate);
    const years = Number(tenureYears);

    if (!P || !annualRate || !years || P <= 0 || annualRate <= 0 || years <= 0) {
      setEmiResult(null);
      return;
    }

    const n = years * 12; // months
    const r = annualRate / (12 * 100); // monthly interest rate

    // EMI formula
    const emi =
      (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    setEmiResult({
      emi,
      totalInterest,
      totalPayment,
    });
  };

  const pieData =
    emiResult && Number(loanAmount) > 0
      ? [
          { name: 'Principal Amount', value: Number(loanAmount) },
          { name: 'Total Interest', value: emiResult.totalInterest },
        ]
      : [];

  const pieColors = ['#ef4444', '#0f172a'];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <PageHero
        title="Home Loans"
        subtitle="Get home loans up to ₹1 Crore in Hyderabad with competitive rates and quick approval"
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Home Loans', href: '/services/home-loans' },
        ]}
      />

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of Our <span className="text-red-600">Home Loans</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience hassle-free home loan processing with our expert team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {loanFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-red-300 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Glow border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-red-400/20 to-red-600/20 blur-xl" />
                <div className="relative">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-red-500/40">
                    <feature.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4 border border-red-600/30">
              Loan Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Types of <span className="text-red-500">Home Loans</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our range of home loan products tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Home Purchase Loan',
                description:
                  'Buy your dream home with our affordable home purchase loans.',
                rate: 'Starting 8.5% p.a.',
              },
              {
                title: 'Home Construction Loan',
                description:
                  'Build your home from ground up with our construction loans.',
                rate: 'Starting 8.75% p.a.',
              },
              {
                title: 'Home Extension Loan',
                description:
                  'Extend or renovate your existing property with ease.',
                rate: 'Starting 9% p.a.',
              },
              {
                title: 'Balance Transfer',
                description:
                  'Transfer your existing loan to get better interest rates.',
                rate: 'Starting 8.5% p.a.',
              },
            ].map((loan, index) => (
              <motion.div
                key={loan.title}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-red-500/10"
              >
                <Building className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {loan.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{loan.description}</p>
                <div className="inline-block px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold">
                  {loan.rate}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY & DOCUMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-3xl shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-400/40">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Eligibility Criteria
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Age: 21-65 years',
                  'Minimum income: ₹25,000/month',
                  'Employment: Salaried or Self-employed',
                  'CIBIL Score: 650+',
                  'Property location: Hyderabad & surrounding areas',
                  'Loan tenure: Up to 30 years',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-900 rounded-3xl text-white shadow-md border border-gray-700"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-400/40">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Required Documents</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Identity Proof (Aadhaar, PAN, Passport)',
                  'Address Proof (Utility bills, Rental agreement)',
                  'Income Proof (Salary slips, ITR, Form 16)',
                  'Property Documents',
                  'Bank Statements (Last 6 months)',
                  'Passport size photographs',
                ].map((doc, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EMI CALCULATOR */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Plan Your Loan
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Calculate Your <span className="text-red-600">EMI</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Enter your loan details to estimate your monthly EMI and total
              interest payable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-white rounded-3xl shadow-xl border border-gray-200"
          >
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                    placeholder="5000000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                    placeholder="8.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tenure (Years)
                  </label>
                  <input
                    type="number"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                    placeholder="20"
                  />
                </div>

                <button
                  onClick={handleCalculateEmi}
                  className="w-full py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate EMI
                </button>
              </div>

              {/* Results + Pie Chart */}
              <div className="space-y-6">
                <div className="h-64">
                  {emiResult && pieData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={3}
                        >
                          {pieData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={pieColors[index % pieColors.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value: any) => formatCurrency(Number(value))}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-400 text-sm text-center px-4">
                      Enter the loan amount, interest rate and tenure, then
                      click <span className="font-semibold mx-1">Calculate EMI</span> to
                      see the breakdown.
                    </div>
                  )}
                </div>

                {emiResult && (
                  <div className="space-y-2 text-sm md:text-base">
                    <p className="font-semibold text-gray-900">
                      Monthly EMI:{' '}
                      <span className="text-red-600">
                        {formatCurrency(emiResult.emi)}
                      </span>
                    </p>
                    <p className="text-gray-700">
                      Total Interest Payable:{' '}
                      <span className="font-semibold">
                        {formatCurrency(emiResult.totalInterest)}
                      </span>
                    </p>
                    <p className="text-gray-700">
                      Total Amount Payable (Principal + Interest):{' '}
                      <span className="font-semibold">
                        {formatCurrency(emiResult.totalPayment)}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400">
                      *This is an approximate calculation. Actual EMI may vary
                      based on bank terms and conditions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Own Your Dream Home?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Get in touch with our loan experts today and take the first step
            towards homeownership
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="tel:+919121861192"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91 9121861192
            </a>
            <a
              href="https://wa.me/919121861192?text=Hi%20MAS7i%2C%20I%27m%20interested%20in%20Home%20Loans"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-black transition-colors"
            >
              WhatsApp Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeLoansPage;
