"use client"

import { motion } from "framer-motion"
import { Home, User, ShoppingBasket, Coffee } from "lucide-react"
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
    color: "bg-emerald-50",
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
    color: "bg-teal-50",
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
    color: "bg-lime-50",
  },
]

export default function Categories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Everyday Essentials, Delivered with Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of quality FMCG products across multiple categories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`${category.color} rounded-2xl p-6 space-y-4 border border-border/50 shadow-sm hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/products/${category.title.toLowerCase().replace(" ", "-")}/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
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
