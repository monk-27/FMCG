"use client"

import { motion } from "framer-motion"
import { Home, User, ShoppingBasket, Coffee, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    icon: Home,
    title: "Home Care",
    items: [
      "Dish Washers",
      "Specialty Cleaners",
      "Toilet Cleaner",
      "Insect Killers & Repellants",
      "Utensils",
      "Air Room Fresheners",
      "Detergent & Fabric Care",
    ],
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
  {
    icon: User,
    title: "Personal Care",
    items: [
      "Hair care",
      "Baby Care",
      "Oral care",
      "Fragrance",
      "Bath & Body",
      "Cosmetic",
      "Shaving",
      "Women Care",
      "Dental Floss",
    ],
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
  {
    icon: ShoppingBasket,
    title: "Groceries",
    items: [
      "Baby Food",
      "Pasta and Sauces",
      "Spices",
      "Noodles/Cookies",
      "Pulses & Cereals",
      "Canned Food",
      "Pharma Products",
      "Dietary Supplements",
    ],
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
  {
    icon: Coffee,
    title: "Beverages",
    items: [
      "Water Based",
      "Plain Water",
      "Infused Water",
      "Sparkling Water",
      "Dairy",
      "Milk",
      "Tea/Coffee",
      "Soup",
      "Carbonated Drinks",
      "Juice/Drinks",
      "Alcoholic Beverages",
    ],
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
]

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with Title + View All Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Everything your home needs — fresh, trusted, and delivered fast.
            </p>
          </motion.div>

          {/* Single "View All" Button - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-green-600 font-medium text-sm rounded-xl border border-green-200 hover:bg-green-50 hover:border-green-300 transition-all duration-200 group"
              >
                View All Categories
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`${category.color} ${category.hoverColor} rounded-2xl p-6 space-y-5 border border-gray-200 shadow-sm transition-all duration-300`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <category.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/products/${category.title.toLowerCase().replace(" ", "-")}/${item
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/ /g, "-")}`}
                      className="text-sm text-gray-700 hover:text-green-600 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:scale-150 transition-transform" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}