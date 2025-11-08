"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Search, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const categories = [
  {
    name: "Home Care",
    sublinks: [
      "Dish Washers",
      "Specialty Cleaners",
      "Toilet Cleaner",
      "Insect Killers & Repellants",
      "Utensils",
      "Air Room Fresheners",
      "Detergent & Fabric Care",
    ],
  },
  {
    name: "Personal Care",
    sublinks: [
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
  },
  {
    name: "Groceries",
    sublinks: [
      "Baby Food",
      "Pasta and Sauces",
      "Spices",
      "Noodles/Cookies",
      "Pulses & Cereals",
      "Canned Food",
      "Pharma Products",
      "Dietary Supplements",
    ],
  },
  {
    name: "Beverages",
    sublinks: [
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
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex text-center items-center gap-2 ">
            <motion.div whileHover={{ scale: 1.05 }} className="">
            <Image src="/images/logowhite.png" alt="axis trader logo" height={160} width={160}/>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            {/* <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium">
                Products <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-border p-6"
                  >
                    <div className="grid grid-cols-4 gap-6">
                      {categories.map((category) => (
                        <div key={category.name}>
                          <h3 className="font-semibold text-primary mb-3">{category.name}</h3>
                          <ul className="space-y-2">
                            {category.sublinks.map((sublink) => (
                              <li key={sublink}>
                                <Link
                                  href={`/products/${category.name.toLowerCase().replace(" ", "-")}/${sublink.toLowerCase().replace(" ", "-")}`}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {sublink}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}
            <Link
              href="/products"
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              Products
            </Link>

            <Link
              href="/brands"
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              Brands
            </Link>
            <Link
              href="/contact"
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Phone className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-primary-foreground/20 overflow-hidden"
            >
              <nav className="py-4 space-y-4">
                <Link
                  href="/"
                  className="block py-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block py-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
                >
                  About Us
                </Link>

                {categories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === category.name ? null : category.name)}
                      className="flex items-center justify-between w-full py-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
                    >
                      {category.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${activeDropdown === category.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === category.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-2"
                        >
                          {category.sublinks.map((sublink) => (
                            <Link
                              key={sublink}
                              href={`/products/${category.name.toLowerCase().replace(" ", "-")}/${sublink.toLowerCase().replace(" ", "-")}`}
                              className="block py-1 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                            >
                              {sublink}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link
                  href="/brands"
                  className="block py-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
                >
                  Brands
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
