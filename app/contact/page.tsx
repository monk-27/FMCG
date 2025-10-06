"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Headphones, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Business Park", "Green Valley, New Delhi", "Delhi, India"],
    color: "from-green-500/10 to-green-600/10",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211", "Toll Free: 1800-123-4567"],
    color: "from-blue-500/10 to-blue-600/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@newmart.com", "support@newmart.com", "sales@newmart.com"],
    color: "from-purple-500/10 to-purple-600/10",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    color: "from-orange-500/10 to-orange-600/10",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
]

const quickContact = [
  { icon: MessageSquare, label: "Live Chat", description: "Chat with our team" },
  { icon: Headphones, label: "Support", description: "24/7 customer support" },
  { icon: Building, label: "Office Visit", description: "Schedule a meeting" },
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -180, 0] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-8"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 text-balance"
            >
              We'd Love to{" "}
              <motion.span
                className="text-primary inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Hear From You
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed mb-10"
            >
              Have questions about our products or services? Our team is here to help you with any inquiries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {quickContact.map((option, index) => (
                <motion.div
                  key={option.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"
                  >
                    <option.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="text-left">
                    <p className="font-semibold text-sm text-foreground">{option.label}</p>
                    <p className="text-xs text-muted-foreground">{option.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -12, scale: 1.03 }}
                className={`bg-gradient-to-br ${info.color} rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden`}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl"
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 ${info.iconBg} rounded-xl flex items-center justify-center mb-6 relative z-10`}
                >
                  <info.icon className={`w-8 h-8 ${info.iconColor}`} />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">{info.title}</h3>
                <div className="space-y-2 relative z-10">
                  {info.details.map((detail, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {detail}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-10 shadow-2xl border border-border/50 relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              />

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 relative z-10">Send Us a Message</h2>
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                    <Input placeholder="John" className="w-full h-12" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                    <Input placeholder="Doe" className="w-full h-12" />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" className="w-full h-12" />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <Input type="tel" placeholder="+91 98765 43210" className="w-full h-12" />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <Textarea placeholder="Tell us how we can help you..." className="w-full min-h-40 resize-none" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="w-full group text-lg h-14">
                    Send Message
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Send className="ml-2 w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[700px] group"
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="w-full h-full">
                <img
                  src="/modern-office-building-location-map.jpg"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10 }}
                className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <MapPin className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Visit our office for in-person consultations and product demonstrations. We're here to help!
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
