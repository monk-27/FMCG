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
    details: [
      "A‑18, 2ND FLOOR, JHILMIL INDUSTRIAL AREA",
      "GT ROAD, SHAHDARA",
      "DELHI‑110095"
    ],
    color: "from-green-500/10 to-green-600/10",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+91 98104 82171",
      "Mon–Sat: 9 AM – 6 PM",
    ],
    color: "from-blue-500/10 to-blue-600/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "info@axisglobaltraders.com",
      "We reply within 2 hours",
    ],
    color: "from-purple-500/10 to-purple-600/10",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday – Friday: 9:00 AM – 6:00 PM",
      "Saturday: 9:00 AM – 2:00 PM",
      "Sunday: Closed",
    ],
    color: "from-orange-500/10 to-orange-600/10",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
]

const quickContact = [
  { icon: MessageSquare, label: "WhatsApp Chat", description: "Tap to message" },
  { icon: Headphones, label: "Instant Support", description: "Call or email anytime" },
  { icon: Building, label: "Book a Visit", description: "See our warehouse live" },
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* HERO – CLEAN & BOLD */}
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
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-8"
            >
              Lightning Fast
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
            >
              Quote in{" "}
              <motion.span
                className="text-primary inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                2 Hours
              </motion.span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl block mt-3 text-foreground/80 font-medium">
                Or Talk Now
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Need a fast quote? Samples? Logistics help?  
              We move at startup speed — your order, our priority.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="tel:+919810482171"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>

              <motion.a
                href="https://wa.me/919810482171?text=Hi!%20Need%20a%20quote%20ASAP."
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* REST OF THE PAGE (UNCHANGED) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

          {/* Form + Map */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 relative z-10">Drop a Message</h2>
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                    <Input placeholder="Rahul" className="w-full h-12" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                    <Input placeholder="Sharma" className="w-full h-12" />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="you@company.com" className="w-full h-12" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <Input type="tel" placeholder="+91 98104 82171" className="w-full h-12" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <Textarea placeholder="Tell us what you need..." className="w-full min-h-40 resize-none" />
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

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] lg:h-auto group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.550074720304!2d77.300621614963!3d28.669159982399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb3e3d7e9b7d%3A0x8e8f8e8f8e8f8e8f!2sA-18%2C%202nd%20Floor%2C%20Jhilmil%20Industrial%20Area%2C%20GT%20Road%2C%20Shahdara%2C%20Delhi%2C%20110095!5e0!3m2!1sen!2sin!4v1698000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10 }}
                className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-2xl"
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
                    <h3 className="text-xl font-bold text-foreground mb-1">Axis Global Traders</h3>
                    <p className="text-sm text-muted-foreground leading-tight">
                      A‑18, 2nd Floor, Jhilmil Industrial Area, GT Road, Shahdara, Delhi‑110095
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {quickContact.map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 text-center border border-border/50"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h4 className="font-bold text-foreground">{item.label}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}