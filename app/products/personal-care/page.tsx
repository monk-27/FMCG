"use client"

import { motion } from "framer-motion"
import { User, Sparkles, Baby, Smile, Heart, Droplet, Scissors, Users2, Wind } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const subcategories = [
  {
    icon: Sparkles,
    name: "Hair Care",
    slug: "hair-care",
    description: "Complete hair care solutions for healthy, beautiful hair",
    image: "/placeholder.svg?height=300&width=400",
    products: 58,
  },
  {
    icon: Baby,
    name: "Baby Care",
    slug: "baby-care",
    description: "Gentle and safe products for your little ones",
    image: "/placeholder.svg?height=300&width=400",
    products: 42,
  },
  {
    icon: Smile,
    name: "Oral Care",
    slug: "oral-care",
    description: "Complete oral hygiene solutions for the whole family",
    image: "/placeholder.svg?height=300&width=400",
    products: 36,
  },
  {
    icon: Wind,
    name: "Fragrance",
    slug: "fragrance",
    description: "Premium perfumes and deodorants for all occasions",
    image: "/placeholder.svg?height=300&width=400",
    products: 48,
  },
  {
    icon: Droplet,
    name: "Bath & Body",
    slug: "bath-body",
    description: "Luxurious bath and body care essentials",
    image: "/placeholder.svg?height=300&width=400",
    products: 52,
  },
  {
    icon: Heart,
    name: "Cosmetic",
    slug: "cosmetic",
    description: "Quality cosmetics for everyday beauty",
    image: "/placeholder.svg?height=300&width=400",
    products: 64,
  },
  {
    icon: Scissors,
    name: "Shaving",
    slug: "shaving",
    description: "Premium shaving products for smooth results",
    image: "/placeholder.svg?height=300&width=400",
    products: 28,
  },
  {
    icon: Users2,
    name: "Women Care",
    slug: "women-care",
    description: "Specialized care products for women",
    image: "/placeholder.svg?height=300&width=400",
    products: 34,
  },
  {
    icon: Smile,
    name: "Dental Floss",
    slug: "dental-floss",
    description: "Essential dental floss for complete oral care",
    image: "/placeholder.svg?height=300&width=400",
    products: 18,
  },
]

export default function PersonalCare() {
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
                <User className="w-4 h-4" />
                Personal Care Products
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
              >
                Care for Yourself, Naturally
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Explore our extensive range of personal care products designed to help you look and feel your best every
                day. From hair care to skincare, we have everything you need.
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
                alt="Personal Care Products"
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
            <p className="text-lg text-muted-foreground">Find the perfect products for your personal care routine</p>
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
                    <Link href={`/products/personal-care/${category.slug}`}>
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
