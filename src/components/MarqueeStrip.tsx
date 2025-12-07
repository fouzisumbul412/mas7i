import { motion } from 'framer-motion';

const marqueeItems = [
  '✦ 100+ New Clients Every Month',
  '✦ 16+ Years Experience',
  '✦ Online Consultation – All India',
  '✦ 24/7 Support',
  '✦ Fast Turnaround',
];

const MarqueeStrip = () => {
  return (
    <div className="bg-red-600 py-4 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span
            key={index}
            className="text-primary-foreground font-semibold text-sm md:text-base mx-8"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeStrip;
