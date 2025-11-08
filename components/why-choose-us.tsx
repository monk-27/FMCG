"use client"

import { motion } from "framer-motion"
import { Award, DollarSign, Zap, Users } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Trusted Partner",
    description: "Reliable name in global FMCG exports with proven track record.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Best value with wholesale rates and hassle-free export process.",
  },
  {
    icon: Zap,
    title: "High-Quality Products",
    description: "Providing the best from top brands with quality assurance.",
  },
  {
    icon: Users,
    title: "Efficient Solutions",
    description: "Quick and hassle-free export process with dedicated support.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Axis Global?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus on delivering quality products at competitive prices with efficient service and trusted global
            partnerships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4"
                >
                  <reason.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
              Growing Together with Axis Global
            </h3>
            <p className="text-primary-foreground/90 max-w-3xl mx-auto mb-6 leading-relaxed">
              Our policy at Axis Global centers on developing enduring alliances between our clients. The company
              facilitates global expansion for producers and suppliers through efficient trade solutions that connect
              them to worldwide markets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
