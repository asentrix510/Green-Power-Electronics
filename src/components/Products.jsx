import { motion } from "framer-motion";
import { Grid3x3, RefreshCw, Cpu, Zap, Monitor, Wrench } from "lucide-react";

const products = [
  {
    icon: Grid3x3,
    title: "MCC Panels",
    description: "Motor Control Centers designed for safe and centralized control of electric motors in industrial environments.",
    features: ["Fully Compartmentalized", "DOL & Star-Delta Starters"],
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: RefreshCw,
    title: "APFC Panels",
    description: "Automatic Power Factor Correction panels to optimize energy consumption and reduce electricity bills.",
    features: ["Microprocessor Control", "High-Quality Capacitors"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Cpu,
    title: "PLC Panels",
    description: "Customized Programmable Logic Controller panels for automated manufacturing and process control.",
    features: ["HMI Integration", "Multi-vendor PLC Support"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Zap,
    title: "AMF Panels",
    description: "Automatic Mains Failure panels for seamless transition between utility power and backup generators.",
    features: ["Auto-Start Logic", "Engine Monitoring"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400"
  },

  {
    icon: Wrench,
    title: "Maintenance Services",
    description: "Professional AMC and repair services for all types of electrical control panels.",
    features: ["Thermal Imaging", "Preventive Checks"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Products() {
  return (
    <motion.section
      id="products"
      className="py-24 bg-slate-900 text-white overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background: "radial-gradient(circle at center, rgba(205, 255, 0, 0.05) 0%, transparent 70%)",
          backgroundSize: "200% 200%"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#CDFF00' }}>
            Product Catalog
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">Comprehensive Power Solutions</h3>
        </motion.div>
      </div>

      {/* --- Infinite Sideways Scroll Section --- */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust speed here
            repeat: Infinity,
          }}
        >
          {/* We render the list twice for a seamless loop */}
          {[...products, ...products].map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="inline-block w-[350px] mx-4 flex-shrink-0"
              >
                <div className="bg-slate-800/50 rounded-3xl border border-slate-700 transition-all group cursor-pointer overflow-hidden hover:shadow-2xl" style={{
                  transition: 'all 0.3s'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(205, 255, 0, 0.5)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(205, 255, 0, 0.2)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}>

                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden bg-slate-800">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 backdrop-blur-sm rounded-xl flex items-center justify-center border transition-colors" style={{
                      background: 'rgba(205, 255, 0, 0.1)',
                      borderColor: 'rgba(205, 255, 0, 0.2)',
                      transition: 'all 0.3s'
                    }}>
                      <Icon className="text-lime-400 group-hover:text-black transition-colors" size={24} style={{
                        transition: 'color 0.3s'
                      }} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 whitespace-normal">
                    <h4 className="text-xl font-bold mb-3">{product.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden line-clamp-3">
                      {product.description}
                    </p>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Zap className="inline mr-2 text-lime-400 flex-shrink-0" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Flowing Wave Divider */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <svg className="absolute bottom-0 w-full h-24" preserveAspectRatio="none" viewBox="0 0 1440 100">
          <motion.path
            d="M0,50 C360,20 720,80 1080,50 C1200,40 1320,60 1440,50 L1440,100 L0,100 Z"
            fill="rgb(2, 6, 23)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </motion.section>
  );
}