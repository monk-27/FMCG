"use client"

import { motion } from "framer-motion"
import { Home, Sparkles, Wind, Bug, Utensils, Droplet, Shirt } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const subcategories = [
  {
    icon: Droplet,
    name: "Dish Washers",
    slug: "dish-washers",
    description: "Premium dishwashing liquids and bars for sparkling clean dishes",
    image: "/dishwashing-liquid-products.jpg",
    products: 45,
  },
  {
    icon: Sparkles,
    name: "Specialty Cleaners",
    slug: "specialty-cleaners",
    description: "Specialized cleaning solutions for every surface",
    image: "/specialty-cleaning-products.jpg",
    products: 38,
  },
  {
    icon: Home,
    name: "Toilet Cleaner",
    slug: "toilet-cleaner",
    description: "Powerful toilet cleaners for hygiene and freshness",
    image: "/toilet-cleaner-products.jpg",
    products: 28,
  },
  {
    icon: Bug,
    name: "Insect Killers & Repellants",
    slug: "insect-killers-repellants",
    description: "Effective pest control solutions for your home",
    image: "/insect-repellent-products.jpg",
    products: 32,
  },
  {
    icon: Utensils,
    name: "Utensils",
    slug: "utensils",
    description: "Quality kitchen utensils and accessories",
    image: "/kitchen-utensils.png",
    products: 56,
  },
  {
    icon: Wind,
    name: "Air Room Fresheners",
    slug: "air-room-fresheners",
    description: "Delightful fragrances for every room",
    image: "/air-freshener-products.jpg",
    products: 42,
  },
  {
    icon: Shirt,
    name: "Detergent & Fabric Care",
    slug: "detergent-fabric-care",
    description: "Complete fabric care solutions for all your laundry needs",
    image: "/placeholder.svg?height=300&width=400",
    products: 67,
  },
]

export default function HomeCare() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-2xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold"
              >
                <Home className="w-4 h-4" />
                Home Care Products
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
              >
                Complete Home Care Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Discover our comprehensive range of home care products designed to keep your home clean, fresh, and
                hygienic. From kitchen to bathroom, we have everything you need.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="/home-care-cleaning-products-display.jpg"
                  alt="Home Care Products"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">Find the perfect products for every cleaning need</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 360 }}
                    className="absolute top-4 right-4 w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center"
                  >
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">{category.products} Products</span>
                    <Link href={`/products/home-care/${category.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Explore
                      </Button>
                    </Link>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-primary/30 blur-xl rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
