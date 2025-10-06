"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-5" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Mail className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Get the latest updates on new products, special offers, and exclusive deals delivered to your inbox.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/95 border-0 h-12 text-foreground placeholder:text-muted-foreground"
              />
              <Button size="lg" variant="secondary" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
