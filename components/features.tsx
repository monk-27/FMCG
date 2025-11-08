"use client"

import { motion } from "framer-motion"
import { Leaf, Shield, Sparkles, Package, Clock, Heart } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Sourced from Real Farms",
    description: "Direct from trusted farmers — no middlemen, no compromise.",
  },
  {
    icon: Shield,
    title: "Lab-Tested & Certified",
    description: "Every batch tested for purity, safety, and quality you can trust.",
  },
  {
    icon: Package,
    title: "Sealed Fresh, Every Time",
    description: "Packed at source to keep nutrition and freshness locked in.",
  },
  {
    icon: Clock,
    title: "Delivered in 24 Hours",
    description: "Order today, get it tomorrow — fast, reliable, and hassle-free.",
  },
  {
    icon: Heart,
    title: "Loved by 100+ Families",
    description: "Real people, real reviews — join the community that trusts us daily.",
  },
  {
    icon: Sparkles,
    title: "Pure, Simple, Honest",
    description: "No chemicals, no shortcuts — just goodness in every pack.",
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Optional Heading (Uncomment if needed) */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Families Choose Us</h2>
          <p className="mt-3 text-lg text-muted-foreground">Quality you can see. Trust you can feel.</p>
        </div> */}

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-4 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}