import Hero from "@/components/hero"
import Features from "@/components/features"
import Categories from "@/components/categories"
import Products from "@/components/products"
import WhyChooseUs from "@/components/why-choose-us"
import Brands from "@/components/brands"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      
      <Hero />
      <Features />
      <Categories />
      <Products />
      <WhyChooseUs />
      <Brands />
      <Newsletter />
      <Footer />
    </main>
  )
}
