import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    requirement: 'MCC / APFC Panel',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Proposal Request: ${formData.requirement}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Requirement Type: ${formData.requirement}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:greenpower.nk@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setFormStatus(true);
    setTimeout(() => setFormStatus(false), 3000);
  };

  return (
    <motion.section 
      id="contact" 
      className="py-24 bg-slate-950 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Particles */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lime-400/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" style={{background: 'radial-gradient(circle, rgba(205, 255, 0, 0.1), transparent)'}}></div>

          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
              
              <div className="space-y-8 text-slate-400">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(205, 255, 0, 0.1)'}}>
                    <MapPin className="text-lime-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Our Location</p>
                    <p className="text-sm">
                      Plot no. 76-B, Sec-A, Zone-D,<br />
                      Mancheswar Industrial Estate,<br />
                      Bhubaneswar, Odisha 751010
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(205, 255, 0, 0.1)'}}>
                    <Phone className="text-lime-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Call Us</p>
                    <p className="text-sm">+91 89080 15160/ 9937835160</p>
                    <p className="text-slate-500 text-xs">Mon-Sat: 09:00 AM - 09:00 PM</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(205, 255, 0, 0.1)'}}>
                    <Mail className="text-lime-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Email Us</p>
                    <p className="text-sm">greenpower.nk@gmail.com</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-12 rounded-2xl overflow-hidden h-64 border border-slate-700 shadow-xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6!2d85.7789!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zPlot%20no.%2076-B%2C%20Sec-A%2C%20Zone-D%2C%20Mancheswar%20Industrial%20Estate%2C%20Bhubaneswar%2C%20Odisha%20751010!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Green Power Electronics - Plot no. 76-B, Sec-A, Zone-D, Mancheswar Industrial Estate, Bhubaneswar"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-700">
                <h3 className="text-xl font-bold mb-6 text-white">Request a Proposal</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                        Full Name
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none text-sm text-slate-200"
                        style={{
                          transition: 'all 0.3s'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#CDFF00';
                          e.currentTarget.style.boxShadow = '0 0 0 2px rgba(205, 255, 0, 0.2)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '';
                          e.currentTarget.style.boxShadow = '';
                        }}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                        Company
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none text-sm text-slate-200"
                        style={{
                          transition: 'all 0.3s'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#CDFF00';
                          e.currentTarget.style.boxShadow = '0 0 0 2px rgba(205, 255, 0, 0.2)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '';
                          e.currentTarget.style.boxShadow = '';
                        }}
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                      Requirement Type
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none text-sm text-slate-200"
                      style={{
                        transition: 'all 0.3s'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#CDFF00';
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(205, 255, 0, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <option>MCC / APFC Panel</option>
                      <option>PLC / Automation</option>
                      <option>Maintenance Service</option>
                      <option>Other Enquiry</option>
                    </motion.select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none text-sm text-slate-200"
                      style={{
                        transition: 'all 0.3s'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#CDFF00';
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(205, 255, 0, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                      placeholder="Describe your technical specifications..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full text-black py-4 rounded-xl font-bold transition-colors shadow-lg flex items-center justify-center gap-2"
                    style={{background: 'linear-gradient(135deg, #CDFF00, #9FFF00)', boxShadow: '0 10px 30px rgba(205, 255, 0, 0.3)'}}
                  >
                    <Send size={18} />
                    Send Inquiry
                  </motion.button>

                  {formStatus && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-xs font-bold"
                      style={{color: '#CDFF00'}}
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}