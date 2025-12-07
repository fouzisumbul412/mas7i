import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We understand your business needs, goals, and challenges through detailed consultation.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy Development",
    description:
      "We create a customized strategy tailored to your specific requirements and objectives.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Implementation",
    description:
      "We execute with precision, maintaining transparent communication throughout the process.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Results & Growth",
    description:
      "We measure success and continuously optimize for sustained growth and maximum ROI.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Our <span className="text-red-600">Process</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            A systematic approach that ensures quality delivery and client satisfaction
          </p>
        </div>

        {/* PROCESS WRAPPER */}
        <div className="relative">
          {/* 🔥 BACKGROUND LINE (behind cards) */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-[4px] bg-red-300 rounded-full z-0"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />

          {/* 🔥 DOTS ON TOP OF THE LINE */}
          <div className="hidden lg:flex absolute top-[calc(50%-6px)] left-0 right-0 justify-between px-6 z-10">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.3 }}
                className="w-4 h-4 bg-red-500 rounded-full shadow-md"
              />
            ))}
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative bg-white rounded-3xl p-8 shadow-lg border border-neutral-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Step badge */}
                <div className="absolute -top-4 right-6 bg-red-600 text-white text-lg font-bold rounded-xl px-4 py-2 shadow-md">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-red-600" />
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
