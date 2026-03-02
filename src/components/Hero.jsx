import { motion } from "framer-motion";
import heroImage from "../assets/images/gpe_hero.jpg";

export default function Hero() {
  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image - Industrial Electrical Factory */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial Electrical Factory"
          className="w-full h-full object-cover"
        />
        
        {/* Dark overlay with gradient - reduced opacity for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-slate-950/75 to-slate-900/70"></div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(205, 255, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(205, 255, 0, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-lime-400/30 rounded-full animate-pulse" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-3 h-3 bg-lime-300/20 rounded-full animate-pulse" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
        <div className="absolute w-2 h-2 bg-lime-400/25 rounded-full animate-pulse" style={{top: '40%', left: '70%', animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400/10 backdrop-blur-sm border border-lime-400/30 shadow-lg shadow-lime-400/10">
              <svg className="w-4 h-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lime-400 text-sm font-bold tracking-wide uppercase">
                ISO 9001:2015 Certified
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                <span className="block text-white">Powering</span>
                <span className="block text-white">Industries with</span>
                <span className="block" style={{color: '#CDFF00'}}>
                  Precision & Innovation
                </span>
              </h1>
              
              <div className="h-1 w-24 rounded-full" style={{background: 'linear-gradient(to right, #CDFF00, #9FFF00)'}}></div>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              Leading manufacturer of high-performance electrical control panels, automation solutions, and power management systems in Bhubaneswar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#products"
                className="group relative inline-flex items-center gap-2 text-black px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{background: 'linear-gradient(to right, #CDFF00, #9FFF00)', boxShadow: '0 0 30px rgba(205, 255, 0, 0.3)'}}
              >
                <span>View Our Products</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border-2 text-white px-8 py-4 rounded-xl font-bold backdrop-blur-sm transition-all duration-300"
                style={{borderColor: 'rgba(205, 255, 0, 0.5)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(205, 255, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#CDFF00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(205, 255, 0, 0.5)';
                }}
              >
                <span>Request Quote</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-700/50">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-slate-300 font-semibold">Trusted by 1000+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300 font-semibold">100% Quality Assured</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-lime-400/50 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-5xl font-black mb-3" style={{color: '#CDFF00'}}>
                20+
              </div>
              <p className="text-slate-300 font-semibold text-sm uppercase tracking-wider">
                Years of Excellence
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-lime-400/50 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-5xl font-black mb-3" style={{color: '#CDFF00'}}>
                1000+
              </div>
              <p className="text-slate-300 font-semibold text-sm uppercase tracking-wider">
                Panels Delivered
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-lime-400/50 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-5xl font-black mb-3" style={{color: '#CDFF00'}}>
                24/7
              </div>
              <p className="text-slate-300 font-semibold text-sm uppercase tracking-wider">
                Technical Support
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-lime-400/50 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="text-5xl font-black mb-3" style={{color: '#CDFF00'}}>
                100%
              </div>
              <p className="text-slate-300 font-semibold text-sm uppercase tracking-wider">
                Quality Guaranteed
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors">
          <span className="text-xs uppercase tracking-wider font-semibold">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </motion.section>
  );
}
