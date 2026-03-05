import { motion } from "framer-motion";
import logo from "../assets/images/Logo.png";

export default function Footer() {
  return (
    <motion.footer 
      className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Line */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent"
        initial={{ width: "0%", left: "50%" }}
        whileInView={{ width: "100%", left: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900 pb-12">
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="Green Power Electronics Logo" 
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-lg">
                  <span style={{color: '#10B981'}}>GREEN</span>{' '}
                  <span style={{color: '#EF4444'}}>POWER</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold opacity-80" style={{color: '#3B82F6'}}>
                  Electronics & Allied
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-6 text-slate-400">
              Empowering Odisha's industrial landscape with sustainable and high-efficiency power electronics and automation solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://wa.me/918908015160"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center transition-all"
                style={{
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#25D366';
                  e.currentTarget.style.borderColor = '#25D366';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.borderColor = '';
                }}
                title="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:greenpower.nk@gmail.com"
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center transition-all"
                style={{
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#EA4335';
                  e.currentTarget.style.borderColor = '#EA4335';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.borderColor = '';
                }}
                title="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="transition-colors" style={{
                  transition: 'color 0.3s'
                }} onMouseEnter={(e) => e.currentTarget.style.color = '#CDFF00'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Our History
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors" style={{
                  transition: 'color 0.3s'
                }} onMouseEnter={(e) => e.currentTarget.style.color = '#CDFF00'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Product List
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors" style={{
                  transition: 'color 0.3s'
                }} onMouseEnter={(e) => e.currentTarget.style.color = '#CDFF00'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{
                  transition: 'color 0.3s'
                }} onMouseEnter={(e) => e.currentTarget.style.color = '#CDFF00'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Quality Standards
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6">Compliance</h4>
            <ul className="space-y-3 text-sm">
              <li>GST: 21BTPPK5437G1ZN</li>
              <li>ISO 9001 Certified</li>
              <li>Regd MSME Unit</li>
              <li>Proprietorship: Ramamani Kar</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600"
      >
        <p>© 2026 Green Power Electronics And Allied Industries. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Plot no. 76-B, Sec-A, Zone-D, Mancheswar Industrial Estate, Bhubaneswar, Odisha 751010</p>
      </motion.div>
    </motion.footer>
  );
}