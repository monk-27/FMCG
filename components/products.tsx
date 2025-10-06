"use client"

import { motion } from "framer-motion"
import ProductCarousel from "./product-carousel"

const products = [
  {
    name: "Premium Dish Wash Liquid",
    category: "Home Care",
    description: "Powerful cleaning formula for sparkling dishes",
    image: "/dish-wash-liquid-bottle-green.jpg",
  },
  {
    name: "Organic Hair Shampoo",
    category: "Personal Care",
    description: "Natural ingredients for healthy, shiny hair",
    image: "/shampoo-bottle-natural-organic.jpg",
  },
  {
    name: "Whole Wheat Pasta",
    category: "Groceries",
    description: "100% whole grain, nutritious and delicious",
    image: "/pasta-package-healthy.jpg",
  },
  {
    name: "Fresh Orange Juice",
    category: "Beverages",
    description: "Pure, fresh-squeezed orange goodness",
    image: "/orange-juice-bottle-fresh.jpg",
  },
  {
    name: "Laundry Detergent",
    category: "Home Care",
    description: "Deep cleaning power for all fabrics",
    image: "/laundry-detergent-package.jpg",
  },
  {
    name: "Baby Care Lotion",
    category: "Personal Care",
    description: "Gentle, hypoallergenic formula for sensitive skin",
    image: "/baby-lotion-bottle-gentle.jpg",
  },
]

export default function Products() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our best-selling FMCG products trusted by thousands of customers
          </p>
        </motion.div>

        <ProductCarousel products={products} />
      </div>
    </section>
  )
}
