"use client"

import { motion } from "framer-motion"
import { Info, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Product {
  name: string
  brand: string
  size: string
  features: string[]
  image?: string
  badge?: string
}

interface AnimatedProductGridProps {
  products: Product[]
}

export default function AnimatedProductGrid({ products }: AnimatedProductGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.name}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          className="group relative"
        >
          <motion.div
            animate={{
              y: hoveredIndex === index ? -12 : 0,
              rotateY: hoveredIndex === index ? 5 : 0,
            }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-shadow"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Product Image with Parallax Effect */}
            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.15 : 1,
                  rotate: hoveredIndex === index ? 3 : 0,
                }}
                transition={{ duration: 0.6 }}
                className="w-full h-full flex items-center justify-center"
              >
                {product.image ? (
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.8 }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                  >
                    <TrendingUp className="w-16 h-16 text-primary/40" />
                  </motion.div>
                )}
              </motion.div>

              {/* Floating Badge */}
              {product.badge && (
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                  className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold shadow-lg"
                >
                  {product.badge}
                </motion.div>
              )}

              {/* Size Badge */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground rounded-full text-sm font-semibold shadow-md"
              >
                {product.size}
              </motion.div>

              {/* Animated Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"
              />
            </div>

            {/* Product Details */}
            <div className="p-6 space-y-4">
              <div>
                <motion.h3
                  animate={{
                    color: hoveredIndex === index ? "hsl(var(--primary))" : "hsl(var(--foreground))",
                  }}
                  className="text-xl font-bold mb-1"
                >
                  {product.name}
                </motion.h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  {product.brand}
                </p>
              </div>

              {/* Features with Stagger Animation */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Key Features:</p>
                <ul className="space-y-1">
                  {product.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <motion.div
                        animate={{
                          scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                        }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Animated Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <Button className="w-full group/btn relative overflow-hidden">
                  <motion.span
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    className="relative z-10 flex items-center justify-center gap-2"
                  >
                    <Info className="w-4 h-4" />
                    Learn More
                  </motion.span>
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1 : 0,
                      opacity: hoveredIndex === index ? 0.2 : 0,
                    }}
                    className="absolute inset-0 bg-white rounded-md"
                  />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Shadow Effect */}
          <motion.div
            animate={{
              opacity: hoveredIndex === index ? 0.3 : 0,
              scale: hoveredIndex === index ? 1 : 0.8,
            }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/20 blur-xl rounded-full"
          />
        </motion.div>
      ))}
    </div>
  )
}
