export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920"
          alt="Industrial Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/95 via-emerald-950/90 to-green-900/95"></div>
      </div>

      <div className="absolute inset-0 opacity-20 texture-bg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/20">
              ISO 9001:2015 Certified Manufacturer
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Powering Industries with{" "}
              <span className="text-emerald-400">Precision.</span>
            </h1>

            <p className="text-lg text-emerald-100/70 mb-8 max-w-lg leading-relaxed">
              Leading manufacturer of high-performance electrical control panels, automation solutions, and power management systems in Bhubaneswar.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20"
              >
                View Catalog
              </a>
              <a
                href="#contact"
                className="border border-emerald-400/30 text-emerald-100 px-8 py-4 rounded-xl font-bold hover:bg-emerald-400/10 transition-all"
              >
                Get Quote
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/50 to-cyan-500/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-700"></div>
              <div className="relative bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=800"
                  alt="Electrical Panel"
                  className="rounded-xl grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800">
          <div>
            <p className="text-3xl font-bold text-emerald-500">8+</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mt-2">
              Years Experience
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-500">500+</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mt-2">
              Panels Delivered
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-500">100%</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mt-2">
              Quality Assured
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-500">24/7</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mt-2">
              Technical Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
