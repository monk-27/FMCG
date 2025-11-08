"use client"

import { motion } from "framer-motion"
import { Award, DollarSign, Zap, Users, Globe, Shield, Truck, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Trusted by 50+ Countries",
    description: "Exporting quality FMCG products to retailers and distributors across Asia, Africa, and the Middle East.",
  },
  {
    icon: DollarSign,
    title: "Factory-Direct Pricing",
    description: "No middlemen. Get premium Indian brands at wholesale rates with full export documentation.",
  },
  {
    icon: Zap,
    title: "Top Brands, Verified Quality",
    description: "Partnered with leading manufacturers — every product meets international standards (FSSAI, ISO, Halal).",
  },
  {
    icon: Truck,
    title: "Door-to-Door Delivery",
    description: "Seamless logistics: from factory to your warehouse in 15–30 days with real-time tracking.",
  },
  {
    icon: Shield,
    title: "100% Export Compliance",
    description: "We handle customs, certifications, and paperwork — you focus on growing your business.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Account Manager",
    description: "One point of contact for quotes, samples, orders, and support — in your language and time zone.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Why Buyers Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your reliable partner for sourcing high-quality Indian FMCG products — delivered with trust, speed, and transparency.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all h-full border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4"
                >
                  <reason.icon className="w-8 h-8 text-green-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              Start Importing Today — Zero Risk, Full Support
            </h3>
            <p className="text-green-50 max-w-3xl mx-auto mb-6 leading-relaxed">
              From sample requests to bulk orders, we make exporting from India simple, fast, and profitable. 
              Join hundreds of international retailers who trust us every month.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Request a Free Quote
              <Globe className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}