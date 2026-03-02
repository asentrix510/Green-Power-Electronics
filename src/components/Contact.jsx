import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(true);
    e.target.reset();
    setTimeout(() => setFormStatus(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>

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
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-500" />
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
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Call Us</p>
                    <p className="text-sm">+91 80476 90430 / +91 94371 45437</p>
                    <p className="text-slate-500 text-xs">Mon-Sat: 09:30 AM - 06:30 PM</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Email Us</p>
                    <p className="text-sm">greenpowerelectronics@gmail.com</p>
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
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm text-slate-200"
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
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm text-slate-200"
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
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm text-slate-200"
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
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm text-slate-200"
                      placeholder="Describe your technical specifications..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/50 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Inquiry
                  </motion.button>

                  {formStatus && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-xs text-emerald-400 font-bold"
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
    </section>
  );
}