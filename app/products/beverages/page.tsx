"use client"

import { motion } from "framer-motion"
import { Coffee, Droplet, Sparkles, Wind, Milk, Club as Cup, SoupIcon, Wine } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const subcategories = [
  {
    icon: Droplet,
    name: "Water Based",
    slug: "water-based",
    description: "Refreshing water-based beverages for hydration",
    image: "/placeholder.svg?height=300&width=400",
    products: 28,
  },
  {
    icon: Droplet,
    name: "Plain Water",
    slug: "plain-water",
    description: "Pure and mineral water bottles",
    image: "/placeholder.svg?height=300&width=400",
    products: 18,
  },
  {
    icon: Sparkles,
    name: "Infused Water",
    slug: "infused-water",
    description: "Flavored and vitamin-infused water",
    image: "/placeholder.svg?height=300&width=400",
    products: 22,
  },
  {
    icon: Wind,
    name: "Sparkling Water",
    slug: "sparkling-water",
    description: "Carbonated and sparkling water varieties",
    image: "/placeholder.svg?height=300&width=400",
    products: 16,
  },
  {
    icon: Milk,
    name: "Dairy",
    slug: "dairy",
    description: "Fresh dairy beverages and milk products",
    image: "/placeholder.svg?height=300&width=400",
    products: 34,
  },
  {
    icon: Milk,
    name: "Milk",
    slug: "milk",
    description: "Fresh milk and flavored milk drinks",
    image: "/placeholder.svg?height=300&width=400",
    products: 24,
  },
  {
    icon: Coffee,
    name: "Tea/Coffee",
    slug: "tea-coffee",
    description: "Premium tea and coffee selections",
    image: "/placeholder.svg?height=300&width=400",
    products: 52,
  },
  {
    icon: SoupIcon,
    name: "Soup",
    slug: "soup",
    description: "Ready-to-drink and instant soup varieties",
    image: "/placeholder.svg?height=300&width=400",
    products: 26,
  },
  {
    icon: Wind,
    name: "Carbonated Drinks",
    slug: "carbonated-drinks",
    description: "Popular soft drinks and sodas",
    image: "/placeholder.svg?height=300&width=400",
    products: 42,
  },
  {
    icon: Cup,
    name: "Juice/Drinks",
    slug: "juice-drinks",
    description: "Fresh juices and fruit drinks",
    image: "/placeholder.svg?height=300&width=400",
    products: 48,
  },
  {
    icon: Wine,
    name: "Alcoholic Beverages",
    slug: "alcoholic-beverages",
    description: "Premium alcoholic drinks selection",
    image: "/placeholder.svg?height=300&width=400",
    products: 36,
  },
]

export default function Beverages() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold"
              >
                <Coffee className="w-4 h-4" />
                Beverage Products
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
              >
                Refreshing Beverages for Every Moment
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Quench your thirst with our diverse range of beverages. From pure water to premium coffee, we offer
                drinks for every taste and occasion.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                src="/placeholder.svg?height=500&width=600"
                alt="Beverage Products"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
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
            <p className="text-lg text-muted-foreground">Find the perfect drink for any occasion</p>
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
                className="group bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
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
                    <Link href={`/products/beverages/${category.slug}`}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
