"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import AnimatedProductGrid from "@/components/animated-product-grid"

const productData: Record<string, any> = {
  "dish-washers": {
    title: "Dish Washers",
    description: "Premium dishwashing solutions for sparkling clean dishes every time",
    products: [
      {
        name: "Vim Dishwash Gel",
        brand: "Hindustan Unilever",
        size: "500ml",
        features: ["Lemon Fresh", "Grease Removal", "Gentle on Hands"],
        badge: "Best Seller",
      },
      {
        name: "Pril Dishwash Liquid",
        brand: "Henkel",
        size: "750ml",
        features: ["Power Gel", "Tough on Stains", "Pleasant Fragrance"],
        badge: "New",
      },
      {
        name: "Exo Dishwash Bar",
        brand: "Jyothy Labs",
        size: "250g",
        features: ["Round Shape", "Long Lasting", "Value for Money"],
      },
      {
        name: "Scotch-Brite Dishwash Liquid",
        brand: "3M",
        size: "1L",
        features: ["Antibacterial", "Removes Odor", "Biodegradable"],
        badge: "Eco-Friendly",
      },
      {
        name: "Vim Bar",
        brand: "Hindustan Unilever",
        size: "300g",
        features: ["Classic Formula", "Tough on Grease", "Economical"],
      },
      {
        name: "Pril Tamarind",
        brand: "Henkel",
        size: "500ml",
        features: ["Natural Tamarind", "Shine Booster", "Eco-Friendly"],
      },
    ],
  },
  "specialty-cleaners": {
    title: "Specialty Cleaners",
    description: "Specialized cleaning solutions for every surface in your home",
    products: [
      {
        name: "Colin Glass Cleaner",
        brand: "Reckitt",
        size: "500ml",
        features: ["Streak-Free Shine", "Quick Drying", "Fresh Fragrance"],
        badge: "Popular",
      },
      {
        name: "Lizol Floor Cleaner",
        brand: "Reckitt",
        size: "975ml",
        features: ["Disinfectant", "Kills 99.9% Germs", "Floral Scent"],
      },
      {
        name: "Mr. Muscle Kitchen Cleaner",
        brand: "SC Johnson",
        size: "500ml",
        features: ["Degreaser", "Multi-Surface", "Powerful Formula"],
      },
      {
        name: "Domex Bathroom Cleaner",
        brand: "Hindustan Unilever",
        size: "500ml",
        features: ["Removes Limescale", "Whitening Action", "Fresh Scent"],
        badge: "Trusted",
      },
      {
        name: "Cif Cream Cleaner",
        brand: "Hindustan Unilever",
        size: "500ml",
        features: ["Micro Crystals", "Gentle Scrubbing", "Multi-Purpose"],
      },
      {
        name: "Harpic Bathroom Cleaner",
        brand: "Reckitt",
        size: "1L",
        features: ["Thick Formula", "Stain Removal", "Long Lasting"],
      },
    ],
  },
  "detergent-fabric-care": {
    title: "Detergent & Fabric Care",
    description: "Complete fabric care solutions for all your laundry needs",
    products: [
      {
        name: "Surf Excel Matic",
        brand: "Hindustan Unilever",
        size: "2kg",
        features: ["Front Load", "Tough Stain Removal", "Low Suds"],
        badge: "Top Rated",
      },
      {
        name: "Ariel Matic",
        brand: "P&G",
        size: "2kg",
        features: ["Top Load", "Deep Clean", "Fresh Scent"],
      },
      {
        name: "Tide Plus",
        brand: "P&G",
        size: "1kg",
        features: ["Extra Power", "Whitening", "Long Lasting Fragrance"],
        badge: "Best Value",
      },
      {
        name: "Comfort Fabric Conditioner",
        brand: "Hindustan Unilever",
        size: "860ml",
        features: ["Softness", "Fresh Fragrance", "Easy Ironing"],
      },
      {
        name: "Vanish Stain Remover",
        brand: "Reckitt",
        size: "500g",
        features: ["Oxy Action", "Color Safe", "Tough on Stains"],
      },
      {
        name: "Rin Detergent Bar",
        brand: "Hindustan Unilever",
        size: "250g",
        features: ["Whitening", "Economical", "Trusted Quality"],
      },
    ],
  },
}

export default async function SubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params
  const data = productData[subcategory] || productData["dish-washers"]

  return (
    <div className="pt-20">
      {/* Breadcrumb & Header */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-background relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/products/home-care"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 group"
            >
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                <ArrowLeft className="w-4 h-4" />
              </motion.div>
              Back to Home Care
            </Link>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              {data.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid with Enhanced Animations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedProductGrid products={data.products} />
        </div>
      </section>
    </div>
  )
}
