'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { ShoppingCart, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const bestsellers = [
    { id: 1, name: "Sahiwal A2 Desi Vedic Cow Ghee", price: 1399, originalPrice: 1999 },
    { id: 2, name: "Pure & Raw Multiflora Honey", price: 599, originalPrice: 799 },
    { id: 3, name: "Organic Turmeric Powder", price: 249, originalPrice: 299 },
    { id: 4, name: "Cold Pressed Coconut Oil", price: 449, originalPrice: 599 },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bestsellers.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % bestsellers.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + bestsellers.length) % bestsellers.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#006241] text-white p-2 text-center text-sm">
        Due to high customer and small scale production of A2 Sahiwal, STOCKS ARE RARE
      </header>
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/placeholder.svg" alt="Momdad Logo" width={120} height={40} className="h-10 w-auto" />
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-[#006241]">SHOP</a>
            <a href="#" className="text-gray-700 hover:text-[#006241]">BEST SELLERS</a>
            <a href="#" className="text-gray-700 hover:text-[#006241]">BEST DEALS</a>
            <a href="#" className="text-gray-700 hover:text-[#006241]">WHO WE ARE</a>
          </div>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-40 md:w-60" />
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#E6F3F5] p-4 md:p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-[#006241]">PURE SAHIWAL A2 DESI COW GHEE</h1>
            <p className="text-lg">MADE WITH CURD AND VEDIC BILONA PROCESS</p>
            <Button className="bg-[#006241] hover:bg-[#004d33]">Order Now</Button>
          </div>
          <div className="md:w-1/2">
            <Image src="/placeholder.svg" alt="A2 Desi Cow Ghee" width={600} height={400} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-white py-8">
        <div className="container mx-auto flex justify-between overflow-x-auto">
          {["GHEE PROCESS", "TESTIMONIAL", "RECIPES", "UNBOXING", "HONEY USES", "BENEFITS"].map((category) => (
            <div key={category} className="flex flex-col items-center mx-2">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
              <span className="text-xs text-center">{category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience the Making & Shop */}
      <section className="bg-[#E6F3F5] py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">EXPERIENCE THE MAKING & SHOP</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Sahiwal A2 Desi Vedic Cow Ghee", "Pure & Raw MULTIFLORA HONEY", "Pure & Raw JAMUN HONEY", "Ghee Making VEDIC PROCESS", "Pure & Raw HONEY HARVESTING"].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image src="/placeholder.svg" alt={item} width={200} height={200} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <p className="text-sm font-medium text-center">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Carousel */}
      <section className="bg-white py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">BESTSELLERS</h2>
          <div className="relative">
            <Button variant="outline" size="icon" className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous item</span>
            </Button>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {bestsellers.map((item) => (
                  <div key={item.id} className="flex-none w-full px-4">
                    <div className="max-w-sm mx-auto">
                      <Image src="/placeholder.svg" alt={item.name} width={256} height={256} className="w-full h-64 object-cover rounded-lg mb-2" />
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-[#006241] font-bold">₹{item.price}</span>
                        <span className="text-gray-500 line-through">₹{item.originalPrice}</span>
                        <span className="text-red-500">{Math.round((1 - item.price / item.originalPrice) * 100)}% OFF</span>
                      </div>
                      <Button className="w-full mt-2 bg-[#006241] hover:bg-[#004d33]">Add to Cart</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="outline" size="icon" className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next item</span>
            </Button>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#006241] text-[#006241] hover:bg-[#006241] hover:text-white">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#C68B59] py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center bg-[#FBE4E4] rounded-lg overflow-hidden">
          <div className="md:w-1/3 p-8">
            <Image src="/placeholder.svg" alt="A2 Desi Cow Ghee" width={300} height={300} className="w-full h-auto" />
          </div>
          <div className="md:w-2/3 p-8">
            <h2 className="text-3xl font-bold mb-4">PURE SAHIWAL A2 DESI COW GHEE</h2>
            <p className="mb-4">MADE WITH CURD AND VEDIC BILONA PROCESS</p>
            <ul className="space-y-2 mb-4">
              <li>• Helps in better Brain functioning</li>
              <li>• Enhances Digestion</li>
              <li>• Improves Immunity</li>
              <li>• Helps in Weight Loss</li>
            </ul>
            <Button className="bg-[#006241] hover:bg-[#004d33]">Order Now</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A3E8C] text-white py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's work on your digital transformation. Start your Project :)</h3>
          <p className="mb-4">For our latest work & news, Follow us on</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
          </div>
          <p className="mt-8 text-sm">© 2023. All rights reserved with designtank.in</p>
        </div>
      </footer>
    </div>
  )
}