"use client"

import { motion } from "framer-motion"
import { Leaf, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Organic Product",
    description: "Natural, Pure, Healthy - Straight from the Source.",
  },
  {
    icon: Shield,
    title: "100% Certified for Quality",
    description: "Tested, Trusted, and Guaranteed for Every Use.",
  },
  {
    icon: Sparkles,
    title: "Pure Goodness",
    description: "Fresh, Safe, and Reliable - Every Single Time.",
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl"
              >
                <feature.icon className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
