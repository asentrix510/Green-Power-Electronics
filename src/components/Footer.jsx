import { motion } from "framer-motion";
import { Heart, Facebook, Linkedin, MessageCircle } from "lucide-react";

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
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-1 rounded" style={{background: 'linear-gradient(135deg, #CDFF00, #9FFF00)'}}>
                <Heart className="text-black" size={14} fill="currentColor" />
              </div>
              <span className="text-white font-bold tracking-tight">
                GREEN POWER ELECTRONICS
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-6 text-slate-400">
              Empowering Odisha's industrial landscape with sustainable and high-efficiency power electronics and automation solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center transition-all"
                style={{
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#CDFF00';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.borderColor = '#CDFF00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center transition-all"
                style={{
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#CDFF00';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.borderColor = '#CDFF00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center transition-all"
                style={{
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#CDFF00';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.borderColor = '#CDFF00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <MessageCircle size={18} />
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