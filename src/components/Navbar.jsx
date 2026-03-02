import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = ["Home", "About", "Products", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variant for staggered desktop links
  const navList = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    },
    hidden: { opacity: 0 }
  };

  const navItem = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -20, opacity: 0 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-colors duration-500 ${
        scrolled 
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo with Magnetic Hover */}
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <motion.div 
              whileHover={{ rotate: 180 }}
              className="p-2 rounded-xl"
              style={{background: 'linear-gradient(135deg, #CDFF00, #9FFF00)', boxShadow: '0 0 20px rgba(205, 255, 0, 0.3)'}}
            >
              <Zap className="text-black fill-current" size={20} />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white block leading-none">
                GREEN POWER
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-80" style={{color: '#CDFF00'}}>
                Electronics & Allied
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu with Layout Transitions */}
          <motion.nav 
            variants={navList}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center bg-white/5 px-2 py-1 rounded-full border border-white/10"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item}
                variants={navItem}
                href={`#${item.toLowerCase()}`}
                onHoverStart={() => setHoveredItem(item)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
              >
                <span className="relative z-10">{item}</span>
                
                {/* Smooth Sliding Pill Effect */}
                {hoveredItem === item && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{background: 'linear-gradient(135deg, #CDFF00, #9FFF00)', boxShadow: '0 0 15px rgba(205, 255, 0, 0.4)'}}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Slide & Fade */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-slate-950 shadow-2xl z-50 p-8 md:hidden flex flex-col justify-center border-l border-white/10"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-slate-400 hover:text-white"
            >
              <X size={32} />
            </button>
            
            <div className="space-y-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="block text-4xl font-black text-slate-100 transition-colors uppercase"
                  style={{
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#CDFF00'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}