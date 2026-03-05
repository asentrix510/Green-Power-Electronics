import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    requirement: 'MCC / APFC Panel',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Show loading toast
    const loadingToast = toast.loading('Sending your message...');
    
    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        // Dismiss loading toast and show success
        toast.dismiss(loadingToast);
        toast.success('Message sent successfully! We will get back to you soon.', {
          duration: 5000,
          icon: '✅',
          style: {
            background: '#10B981',
            color: '#fff',
            fontWeight: 'bold',
          },
        });
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          requirement: 'MCC / APFC Panel',
          message: ''
        });
      } else {
        // Dismiss loading toast and show error
        toast.dismiss(loadingToast);
        toast.error('Failed to send message. Please try again or contact us directly.', {
          duration: 5000,
          icon: '❌',
          style: {
            background: '#EF4444',
            color: '#fff',
            fontWeight: 'bold',
          },
        });
      }
    } catch (error) {
      console.error('Error:', error);
      // Dismiss loading toast and show error
      toast.dismiss(loadingToast);
      toast.error('Network error! Please check your connection or contact us at greenpower.nk@gmail.com', {
        duration: 6000,
        icon: '⚠️',
        style: {
          background: '#EF4444',
          color: '#fff',
          fontWeight: 'bold',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
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
      {/* Toast Container */}
      <Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
          },
        }}
      />
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

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(37, 211, 102, 0.1)'}}>
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white">WhatsApp</p>
                    <a 
                      href="https://wa.me/918908015160" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-green-400 hover:text-green-300 transition-colors"
                    >
                      +91 89080 15160
                    </a>
                    <p className="text-slate-500 text-xs">Click to chat on WhatsApp</p>
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
                    disabled={isSubmitting}
                    className="w-full text-black py-4 rounded-xl font-bold transition-colors shadow-lg flex items-center justify-center gap-2"
                    style={{
                      background: isSubmitting ? '#888' : 'linear-gradient(135deg, #CDFF00, #9FFF00)', 
                      boxShadow: '0 10px 30px rgba(205, 255, 0, 0.3)',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Inquiry
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}