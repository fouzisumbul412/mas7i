import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, Heart, Headphones } from 'lucide-react';

const counters = [
  { icon: Award, number: 16, suffix: '+', label: 'Years Experience' },
  { icon: Briefcase, number: 100, suffix: '+', label: 'Projects Delivered' },
  { icon: Heart, number: 95, suffix: '%', label: 'Client Retention' },
  { icon: Headphones, number: 24, suffix: '/7', label: 'Support Available' },
];

const CounterNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Counters = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-secondary/90" />

      {/* Decorative red glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.p
          className="text-center text-text-muted-light mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Numbers that speak for our commitment
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              className="glass-card p-6 lg:p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <counter.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-text-light mb-2">
                <CounterNumber target={counter.number} suffix={counter.suffix} />
              </div>
              <div className="text-text-muted-light text-sm">{counter.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
