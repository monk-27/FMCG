"use client"

import { motion } from "framer-motion"
import { Star, Award, TrendingUp, Shield } from "lucide-react"

const brands = [
  { name: "Hindustan Unilever", category: "Personal & Home Care", logo: "/hul-logo.jpg" },
  { name: "Nestlé", category: "Food & Beverages", logo: "/generic-bird-nest-logo.png" },
  { name: "ITC", category: "FMCG Products", logo: "/itc-logo.jpg" },
  { name: "Procter & Gamble", category: "Consumer Goods", logo: "/letter-p-typography.png" },
  { name: "Britannia", category: "Food Products", logo: "/britannia-logo.jpg" },
  { name: "Parle", category: "Biscuits & Snacks", logo: "/parle-logo.jpg" },
  { name: "Dabur", category: "Ayurvedic Products", logo: "/dabur-logo.jpg" },
  { name: "Marico", category: "Personal Care", logo: "/marico-logo.jpg" },
  { name: "Godrej", category: "Home & Personal Care", logo: "/godrej-logo.jpg" },
  { name: "Colgate-Palmolive", category: "Oral Care", logo: "/colgate-logo.jpg" },
  { name: "Coca-Cola", category: "Beverages", logo: "/coca-cola-logo.png" },
  { name: "PepsiCo", category: "Food & Beverages", logo: "/pepsi-logo.png" },
]

const features = [
  {
    icon: Star,
    title: "Premium Quality",
    description: "We partner with only the most trusted and recognized brands in the industry",
  },
  {
    icon: Award,
    title: "Certified Products",
    description: "All products meet international quality standards and certifications",
  },
  {
    icon: TrendingUp,
    title: "Market Leaders",
    description: "Featuring top-performing brands with proven track records",
  },
  {
    icon: Shield,
    title: "Authentic Guarantee",
    description: "100% genuine products sourced directly from authorized distributors",
  },
]

export default function BrandsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
            >
              Trusted Partners
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
            >
              World-Class Brands We Carry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Partnering with industry leaders to bring you the finest FMCG products with guaranteed authenticity and
              quality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl transition-all text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Brands Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Brand Partners</h2>
            <p className="text-lg text-muted-foreground">Featuring the most trusted names in FMCG</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-video flex items-center justify-center mb-4">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-foreground text-center mb-1">{brand.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{brand.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
