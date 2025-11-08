"use client"

import { motion } from "framer-motion"
import {
  Award,
  Users,
  TrendingUp,
  Heart,
  Target,
  Eye,
  Zap,
  Shield,
  Leaf,
  Globe,
  Handshake,
  Star,
  Rocket,
  Sparkles,
  Lightbulb,
  Package,
} from "lucide-react"

const stats = [
  { label: "Happy Clients", value: "1000+", icon: Users },
  { label: "Products Range", value: "2,000+", icon: Package },
{ label: "Customer Satisfaction", value: "98%", icon: Heart },
]

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make India’s best FMCG brands accessible to every corner of the world — fast, fresh, and affordable.",
    color: "from-green-500/10 to-green-600/10",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the #1 go-to platform for global retailers looking for trusted, high-quality Indian essentials.",
    color: "from-blue-500/10 to-blue-600/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Zap,
    title: "Speed & Agility",
    description:
      "From order to delivery in 10–20 days — powered by smart tech and real-time tracking.",
    color: "from-purple-500/10 to-purple-600/10",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Shield,
    title: "Quality Obsessed",
    description:
      "Every product is handpicked, lab-tested, and certified — no compromises, ever.",
    color: "from-orange-500/10 to-orange-600/10",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
]

const features = [
  { icon: Leaf, title: "Eco Packaging", description: "100% recyclable & biodegradable" },
  // { icon: Globe, title: "12+ Countries", description: "UAE, Kenya, Malaysia & more" },
  { icon: Handshake, title: "Direct from Factory", description: "Zero middlemen, max value" },
  { icon: Star, title: "Curated Brands", description: "Only the best make it" },
]

const timeline = [
  {
    year: "2022",
    event: "Launched Axis Global",
    description: "Started with 50 products and a dream to take Indian FMCG global.",
  },
  {
    year: "2023",
    event: "First 100 Orders",
    description: "Shipped to UAE, Kenya, and Malaysia — all in under 15 days.",
  },
  {
    year: "2024",
    event: "Tech-Powered Platform",
    description: "Launched live inventory, instant quotes, and WhatsApp order tracking.",
  },
  {
    year: "2025",
    event: "1,000+ Shipments",
    description: "Now live in 12 countries with 2,000+ products and growing fast.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -180, 0] }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold"
              >
                We’re Axis Global
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance"
              >
                India to the World,{" "}
                <motion.span
                  className="text-primary inline-block"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  One Click Away
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}

                className="text-xl text-muted-foreground leading-relaxed"
              >
                A young, hungry startup on a mission to bring India’s best FMCG brands to global shelves — fast, fresh, and hassle-free.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                    >
                      <feature.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl transform scale-110" />
              <motion.div
                animate={{ y: [0, -25, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src="/modern-warehouse-with-fmcg-products.jpg"
                  alt="Axis Global startup warehouse"
                  className="w-full h-auto rounded-3xl shadow-2xl border-8 border-white"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-primary/30 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, -30, 0], rotate: [360, 180, 0] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/30 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────── STATS ────────────────────── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <motion.div
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                className="text-center space-y-4"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto bg-primary-foreground/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                >
                  <stat.icon className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
                  className="text-5xl font-bold text-primary-foreground"
                >
                  {stat.value}
                </motion.div>
                <p className="text-primary-foreground/90 font-semibold text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── VALUES ────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView ={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
            >
              What Fuels Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Built for Speed & Trust
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We move fast, deliver quality, and keep it real — because your business can’t wait.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`bg-gradient-to-br ${value.color} rounded-3xl p-10 border border-border/50 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden`}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl"
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 ${value.iconBg} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                >
                  <value.icon className={`w-10 h-10 ${value.iconColor}`} />
                </motion.div>
                <h3 className="text-3xl font-bold text-foreground mb-4 relative z-10">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg relative z-10">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── TIMELINE ────────────────────── */}
      <section className="py-24 md:py-36 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />

        {/* <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
            >
              Our Journey
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              From Idea to Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We started small, moved fast, and never looked back.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                className="relative pl-12 pb-16 border-l-4 border-primary/30 last:pb-0"
              >
                <motion.div
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full -translate-x-[13px] shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute inset-0 bg-primary rounded-full"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-border/50"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4, type: "spring", bounce: 0.6 }}
                    className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-full text-base font-bold mb-4 shadow-md"
                  >
                    {item.year}
                  </motion.span>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.event}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div> */}
      </section>
    </div>
  )
}