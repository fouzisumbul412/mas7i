import { motion, useMotionValue, useTransform } from "framer-motion";
import { Layers, BarChart3, Globe2 } from "lucide-react";
import { useRef } from "react";

const reasons = [
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description:
      "Everything your business needs in one integrated platform – from recruitment and travel to digital presence and financing.",
  },
  {
    icon: BarChart3,
    title: "Results-Driven Approach",
    description:
      "Measurable outcomes that directly impact your business growth, profitability, and operational efficiency.",
  },
  {
    icon: Globe2,
    title: "Global Reach, Local Expertise",
    description:
      "International standards combined with deep local market understanding for the best of both worlds.",
  },
];

const WhyPartner = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0c0c0c]">
      {/* 🔴 Spotlight Glow  */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-700/20 blur-[160px]"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-red-900/20 blur-[180px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Why Partner With <span className="text-red-600">Us?</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Discover what makes us the preferred choice for businesses worldwide
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <TiltCard reason={reason} index={index} key={reason.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;



/* ---------------------------
   🔥 CARD COMPONENT WITH 
   Tilt, Glow, Scale, Stagger
--------------------------- */
const TiltCard = ({ reason, index }) => {
  const ref = useRef(null);

  // Mouse Position Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="
        backdrop-blur-xl bg-white/5 border border-white/10 
        rounded-3xl p-10 text-center shadow-xl 
        hover:shadow-red-900/30 transition-all 
        hover:-translate-y-2
        cursor-pointer
      "
    >
      {/* Icon with Pulse Animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 rounded-2xl bg-red-900/30 flex items-center justify-center mx-auto mb-6"
      >
        <reason.icon className="w-8 h-8 text-red-500" />
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">
        {reason.description}
      </p>
    </motion.div>
  );
};
