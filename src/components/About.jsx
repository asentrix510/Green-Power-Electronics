import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Factory, Cpu, Settings } from "lucide-react";

export default function About() {
  const features = [
    { text: "CPRI Type Tested Designs", icon: Shield },
    { text: "Premium Components Only", icon: Zap },
    { text: "On-Site Commissioning", icon: Factory },
    { text: "Custom PLC Programming", icon: Cpu }
  ];

  const column1 = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=400",
  ];

  const column2 = [
    "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400",
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Green Power <br />
              <span className="text-slate-700">Electronics</span>
            </h3>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed border-l-2 border-emerald-500 pl-6">
              Headquartered in Bhubaneswar’s Mancheswar Industrial Estate, we engineered the standard for electrical control systems since 1998. Led by Mr. N.K. Kumar, our team bridges the gap between raw power and intelligent automation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex items-center space-x-3 group">
                  <f.icon className="text-emerald-500 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-slate-300 font-bold text-xs uppercase tracking-widest">{f.text}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-transparent border border-emerald-500/30 text-emerald-500 font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 hover:text-white transition-all rounded-full">
              Download Profile PDF
            </button>
          </motion.div>

          {/* Right: Dual Vertical Infinite Scroll */}
          <div className="lg:w-1/2 h-[600px] flex gap-4 overflow-hidden mask-fade-y relative">
            
            {/* Column 1 - Scrolling Down */}
            <motion.div 
              animate={{ y: [0, -1200] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex flex-col gap-4 w-1/2"
            >
              {[...column1, ...column1, ...column1].map((img, i) => (
                <img key={i} src={img} className="rounded-3xl aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-slate-800" alt="Industrial" />
              ))}
            </motion.div>

            {/* Column 2 - Scrolling Up */}
            <motion.div 
              animate={{ y: [-1200, 0] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex flex-col gap-4 w-1/2 pt-20"
            >
              {[...column2, ...column2, ...column2].map((img, i) => (
                <img key={i} src={img} className="rounded-3xl aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-slate-800" alt="Panel" />
              ))}
            </motion.div>

            {/* Glass Badge */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
               <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-full shadow-2xl">
                  <Settings className="text-emerald-500 animate-spin-slow" size={48} />
               </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .mask-fade-y {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}