import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";

export const newArrivalsProducts = [
  {
    id: "1",
    image: product1,
    title: "Teal Hand Embroidered Velvet Dress",
    price: 19080,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "2",
    image: product2,
    title: "Wine Hand Embroidered Velvet Dress",
    price: 17490,
    sizes: ["XS", "S/M", "L/XL"]
  },
  {
    id: "3",
    image: product3,
    title: "Navy Tissue Jacket With Cotton Slip",
    price: 20860,
    sizes: ["S/M", "L/XL"]
  },
  {
    id: "4",
    image: product4,
    title: "Mustard Tissue Jacket With Cotton Slip",
    price: 20860,
    sizes: ["S/M", "L/XL"]
  },
  {
    id: "5",
    image: product5,
    title: "Beige Hand Embroidered Chanderi Dupatta",
    price: 8500,
    sizes: ["FS"]
  }
];

const NewArrivals = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="section-title mb-6">New Arrivals</h2>
          <Link
            to="/all-products"
            className="view-all-btn inline-block"
          >
            VIEW All
          </Link>
        </motion.div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {newArrivalsProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              index={index}
            />
          ))}
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="md:hidden relative">
          {/* Carousel Navigation */}
          <button
            onClick={scrollPrev}
            className="absolute -left-2 top-1/3 z-10 p-2 bg-background/80 shadow-md backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-2 top-1/3 z-10 p-2 bg-background/80 shadow-md backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {newArrivalsProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="flex-[0_0_75%] min-w-0"
                >
                  <ProductCard {...product} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Swipe Indicator */}
          <p className="text-center text-xs text-muted-foreground mt-4 tracking-wider">
            SWIPE TO EXPLORE →
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;