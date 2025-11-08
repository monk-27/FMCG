"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Home,
  Shield,
  Baby,
  Shirt,
  Heart,
  Scissors,
  Sparkles,
  Droplets,
  User,
  ShoppingBasket,
  Coffee,
  ArrowRight,
} from "lucide-react";

import Image from "next/image";

/** ------------------------------
 *  Helpers: deterministic numbers
 *  ------------------------------ */
function hashString(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}
function deterministicVariants(label: string) {
  // Map to 5..45 and keep it stable across SSR/CSR
  return (hashString(label) % 41) + 5;
}

/** Map icon names (strings) → actual components */
const iconComponents = {
  Home,
  Shield,
  Baby,
  Shirt,
  Heart,
  Scissors,
  Sparkles,
  Droplets,
  User,
  ShoppingBasket,
  Coffee,
} as const;

type IconName = keyof typeof iconComponents;

type CategoryItem = { name: string; image: string };
type Category = {
  id: string;
  title: string;
  icon: IconName;
  badge: string;
  heroImage: string;
  items: CategoryItem[];
  color: string;
  hoverColor: string;
};

/** ------------------------------
 *  Data
 *  ------------------------------ */
const categories: Category[] = [
  {
    id: "home-care",
    title: "Home Care",
    icon: "Home",
    badge: "Clean & Hygienic",
    heroImage: "/images/home.jpg",
    items: [
      { name: "Dish Washers", image: "/images/dish.webp" },
      { name: "Specialty Cleaners", image: "/images/home2.webp" },
      { name: "Toilet Cleaner", image: "/images/home3.webp" },
      { name: "Insect Killers & Repellants", image: "/images/home4.webp" },
      { name: "Utensils", image: "/images/home5.webp" },
      { name: "Air Room Fresheners", image: "/images/home6.webp" },
      { name: "Detergent & Fabric Care", image: "/images/home7.jpg" },
    ],
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
  {
    id: "personal-care",
    title: "Personal Care",
    icon: "User",
    badge: "Daily Essentials",
    heroImage: "/images/ph.png",
    items: [
      { name: "Hair care", image: "https://www.mudraglobal.com/wp-content/uploads/2020/09/Hair-care.jpeg" },
      { name: "Baby Care", image: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/09/13/Photos/Processed/johnson-kMk--621x414@LiveMint.jpg" },
      { name: "Oral care", image: "https://wearenordics.com/wp-content/uploads/2021/12/How-Dental-Care-Products-Earned-Their-Spot-In-E-commerce-Of-FMCG-1.png" },
      { name: "Fragrance", image: "https://snackfax.com/wp-content/uploads/2024/11/image-of-fragrances-696x392.jpg" },
      { name: "Bath & Body", image: "https://www.shutterstock.com/image-photo/shower-gel-by-bath-body-600nw-2314849137.jpg" },
      { name: "Cosmetic", image: "https://new.vdpack.com/media/userfiles/images/Personal-Care-&-Cosmetics.png" },
      { name: "Shaving", image: "https://images.moneycontrol.com/static-mcnews/2021/01/Products-1-435x435.jpg?impolicy=website&width=770&height=431" },
      { name: "Women Care", image: "https://content.jdmagicbox.com/quickquotes/images_main/personal-care-383227335-cohth.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit" },
      { name: "Dental Floss", image: "https://thumbs.dreamstime.com/b/composition-colgate-products-poznan-poland-may-brand-oral-hygiene-such-as-toothpastes-toothbrushes-mouthwashes-92146418.jpg" },
    ],
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
  {
    id: "groceries",
    title: "Groceries",
    icon: "ShoppingBasket",
    badge: "Everyday Needs",
    heroImage: "/images/groceries.jpeg",
    items: [
      { name: "Baby Food", image: "https://cureka-static.s3.ap-south-1.amazonaws.com/Uploads/2025/06/Easum-Moong-Dal-Rice-1-600x600.jpg" },
      { name: "Pasta and Sauces", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLaq-zV32o_WFYB_bekm-KOcYesQuL0nsxg&s" },
      { name: "Spices", image: "https://5.imimg.com/data5/JG/IG/RE/SELLER-3101912/spices-fmcg-products.png" },
      { name: "Noodles/Cookies", image: "https://subkuz.com/uploads/news/2025/07/sub17517946619837.webp" },
      { name: "Pulses & Cereals", image: "https://5.imimg.com/data5/SELLER/Default/2020/10/JI/ZY/WT/115458137/types-of-cereals-and-pulses.jpg" },
      { name: "Canned Food", image: "https://www.jadlifoods.com/products/Canned-Foods.png" },
      { name: "Pharma Products", image: "https://5.imimg.com/data5/SELLER/Default/2024/8/440691121/OH/QD/JJ/23825933/barcode-label-thermal-label-500x500.jpg" },
      { name: "Dietary Supplements", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-wLeYPc83Tq4TIz5O7MYpJ_h8O7TGP2SBgQ&s" },
    ],
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
  {
    id: "beverages",
    title: "Beverages",
    icon: "Coffee",
    badge: "Refresh & Hydrate",
    heroImage: "https://m-pacific.com/wp-content/uploads/2025/06/new-arrival-12_6_2025.1.jpg",
    items: [
      { name: "Water Based", image: "https://images.jdmagicbox.com/v2/comp/bangalore/h8/080pxx80.xx80.240903220925.e7h8/catalogue/wow-water-bottle-available-horamavu-bangalore-fmcg-product-wholesalers-0hh78xu96y.jpg" },
      { name: "Plain Water", image: "https://images.jdmagicbox.com/v2/comp/bangalore/h8/080pxx80.xx80.240903220925.e7h8/catalogue/wow-water-bottle-available-horamavu-bangalore-fmcg-product-wholesalers-0hh78xu96y.jpg" },
      { name: "Infused Water", image: "https://worldbranddesign.com/wp-content/uploads/2019/04/Denomination---True-Water3.jpg" },
      { name: "Sparkling Water", image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/60a9b8211542161.6724dd4e371d6.gif" },
      { name: "Dairy", image: "https://etimg.etb2bimg.com/photo/70068296.cms" },
      { name: "Milk", image: "https://etimg.etb2bimg.com/photo/70068296.cms" },
      { name: "Tea/Coffee", image: "https://img.freepik.com/free-photo/delicious-organic-tea-herbs-high-view_23-2148317022.jpg?semt=ais_hybrid&w=740&q=80" },
      { name: "Soup", image: "https://assets.epicurious.com/photos/66f1e474b0d850f8f8cd3fb6/4:3/w_4152,h_3114,c_limit/vegetable-soup_RECIPE_V1_092024_10321_VOG_final.jpg" },
      { name: "Carbonated Drinks", image: "https://fmcg-viet.com/wp-content/uploads/2023/04/soft-drink.jpg" },
      { name: "Juice/Drinks", image: "https://5.imimg.com/data5/SELLER/Default/2023/1/QF/BL/FT/163771626/cold-drinks-supplier.jpg" },
      { name: "Alcoholic Beverages", image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Common_alcoholic_beverages.jpg" },
    ],
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
  
  {
    id: "personal-health-care",
    title: "Personal Health Care",
    icon: "Shield",
    badge: "Wellness & Protection",
    heroImage: "https://cpimg.tistatic.com/01808629/b/4/Fmcg-Personal-Care-Products.jpg",
    items: [
      { name: "Hand Sanitizer", image: "https://m.media-amazon.com/images/I/51bBWOXg7JL.jpg" },
      { name: "Face Masks", image: "https://d29azk3rh443yy.cloudfront.net/static/Products/61ilDgVVwS._SL1500_.webp" },
      { name: "First Aid Kit", image: "https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23a9_First%20aid%20kit%20box%20with%20medical%20equipment%20and%20medications%20for%20emergency.jpg" },
      { name: "Pain Relief Balm", image: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/voltaren-delta/en_IN/local_images/Iodex-493x493_v2_20250918.jpg?auto=format" },
      { name: "Bandages", image: "https://m.media-amazon.com/images/I/71SlxOk8DCL._AC_UF1000,1000_QL80_.jpg" },
      { name: "Antiseptic Liquid", image: "https://www.planethealth.in/image/cache/catalog/10640-500x500.JPG" },
      { name: "Thermometer", image: "https://m.media-amazon.com/images/I/51aWXfsCt8L.jpg" },
    ],
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100", // fixed from HoverColor → hoverColor
  },
  {
    id: "skin-and-personal-care",
    title: "Skin and Personal Care",
    icon: "Sparkles",
    badge: "Glow & Nourish",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALxJ_oyPCt8ENo5O_i-6RT9vs6gTZPXoyog&s",
    items: [
      { name: "Face Wash", image: "https://5.imimg.com/data5/SELLER/Default/2025/5/507509606/EC/GK/JS/133360592/mamaearth-vitamin-c-face-wash-100ml-500x500.jpeg" },
      { name: "Moisturizer", image: "https://static.meds.cvpharmacy.in/wp-content/uploads/2024/06/57446-1.jpg" },
      { name: "Sunscreen", image: "https://5.imimg.com/data5/SELLER/Default/2025/5/513076443/FA/CM/PW/133360592/lakme-sun-expert-18ml-500x500.jpg" },
      { name: "Body Lotion", image: "https://www.vishalmegamart.com/dw/image/v2/BGHT_PRD/on/demandware.static/-/Sites-vmm-fmcg-master-catalog/default/dwe416b210/images/large/1311014622.jpg?sw=900&sh=900" },
      { name: "Lip Balm", image: "https://static.meds.cvpharmacy.in/wp-content/uploads/2024/06/54273-1-600x600.jpg" },
      { name: "Hand Cream", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKWsMPquZCdpCC9U7ElTUUaSabf_uMRU4tQ&s" },
      { name: "Scrub", image: "https://www.aumnicrafts.in/cdn/shop/products/ac-fmcg-00001_5.jpg?v=1620540484" },
            { name: "Face Masks", image: "https://d29azk3rh443yy.cloudfront.net/static/Products/61ilDgVVwS._SL1500_.webp" },

    ],
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
];

export default function AllCategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {categories.map((category) => {
        const Icon = iconComponents[category.icon] ?? Home; // safe fallback

        return (
          <div key={category.id} className="pt-16 md:pt-20">
            {/* HERO */}
            <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-gray-50">
              <motion.div
                initial={false}
                animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-70"
              />
              <motion.div
                initial={false}
                animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-20 w-48 h-48 bg-green-200 rounded-full blur-2xl opacity-50"
              />

              <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
                    >
                      <Icon className="w-4 h-4" />
                      {category.badge}
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                    >
                      {category.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-gray-600 leading-relaxed max-w-xl"
                    >
                      Premium quality {category.title.toLowerCase()} products for daily wellness and care.
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <motion.div
                      initial={false}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-gradient-to-br from-green-100 to-gray-100 rounded-2xl "
                    >
                      <div className=" rounded-xl w-full h-96 flex items-center justify-center ">
                         <Image
                           src={category.heroImage}
                           alt="hero image"
                           width={600}
                           height={400}
                           className="w-full h-full object-cover"
                         />                      
                         </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* PRODUCT CARDS */}
            <section className="py-16 md:py-20 bg-white">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Our {category.title} Range
                  </h2>
                  <p className="text-lg text-gray-600">
                    {category.items.length} premium products available
                  </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item, idx) => {
                    const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                    const variantCount = deterministicVariants(`${category.id}:${item.name}`);

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        whileHover={{ y: -8, scale: 1.03 }}
                        className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 ${category.hoverColor}`}
                      >
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-50 to-gray-50">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                          />
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                            whileHover={{ rotate: 360 }}
                            className="absolute top-3 right-3 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>

                        <div className="p-5 space-y-3">
                          <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors text-lg">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            Eco-friendly • Dermatologically Tested
                          </p>

                          {/* <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <span className="text-xs text-gray-500">
                              {variantCount}+ Variants
                            </span>
                            <Link href={`/product/${category.id}/${slug}`}>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-green-600 hover:text-green-700 hover:bg-green-50 text-xs"
                              >
                                View <ArrowRight className="ml-1 w-3 h-3" />
                              </Button>
                            </Link>
                          </div> */}
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 0.4 }}
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-green-400 blur-xl rounded-full"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
