"use client"

import { motion } from "framer-motion"

const brands = ["Dettol", "Sunsilk", "Ponds", "Lakmé", "Durex", "Lifebuoy", "Harpic", "Lizol"]

export default function Brands() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted Brands We Carry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partnering with the world's leading FMCG brands to bring you quality products
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all aspect-square"
            >
              <span className="text-lg font-bold text-foreground text-center">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
