"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
const footerLinks = {
  products: {
    title: "Products",
    links: ["Home Care", "Personal Care", "Groceries", "Beverages", "All Products"],
  },
  company: {
    title: "Company",
    links: ["About Us", "Our Story", "Careers", "Press", "Blog"],
  },
  support: {
    title: "Support",
    links: ["Contact Us", "FAQs", "Shipping", "Returns", "Track Order"],
  },
  legal: {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"],
  },
}

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Axis Global</h3> */}
              <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
                          <Image src="/images/logowhite.png" alt="axis trader logo" height={200} width={200}/>
                          </motion.div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Your trusted partner for quality FMCG products. Delivering everyday essentials with care and
                reliability.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                  <span>info@Axis Global.in</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                  <span>New Delhi, Delhi, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-bold mb-4 text-primary-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${key}/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary-foreground/20"
        >
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">© 2025 Axis Global. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
