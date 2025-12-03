import { useState, useEffect } from "react";
import { X, User, Search, ShoppingBag, Instagram, Facebook, Youtube, Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const promoMessages = [
  "10% OFF YOUR FIRST PURCHASE! CODE: VINSARANEW",
  "MADE WITH LOVE AND PURE FABRICS",
  "FREE SHIPPING ON ORDERS OVER $100",
  "HANDCRAFTED TRADITIONAL ARTISTRY",
  "NEW COLLECTION JUST ARRIVED"
];

const menuCategories = [
  {
    title: "PRODUCTS",
    items: [
      { name: "New Arrivals", path: "/all-products" },
      { name: "All Products", path: "/all-products" }
    ]
  },
  {
    title: "CLOTHING",
    items: [
      { name: "Sleeved", path: "/all-products" },
      { name: "Sleeveless", path: "/all-products" }
    ]
  },
];

const Header = () => {
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>("PRODUCTS");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex((prev) => (prev + 1) % promoMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* Promo Banner */}
      <div className="bg-promo text-promo-foreground py-2 text-center text-xs md:text-sm tracking-wider overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPromoIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-medium"
          >
            {promoMessages[currentPromoIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Header */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-background text-foreground shadow-md' 
            : 'bg-transparent text-hero-text'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Top row - Social Icons - Hidden on mobile, tablet, and small desktop, and when scrolled */}
          {!isScrolled && (
            <div className="hidden lg:flex justify-end items-center gap-4 py-2 border-b border-hero-text/10">
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Pinterest">
                <FaPinterest className="w-4 h-4" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Bottom row - Menu and Actions */}
          <div className="flex items-center justify-between h-14 md:h-20">
            {/* Left: Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 transition-colors flex flex-col items-start gap-1.5 hover:opacity-70"
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-current transition-all"></span>
              <span className="w-4 h-0.5 bg-current transition-all"></span>
              <span className="w-6 h-0.5 bg-current transition-all"></span>
            </button>

            {/* Center: Brand Name */}
            <Link to="/" className="flex-1 text-center">
              <span className="font-serif text-2xl md:text-3xl tracking-[0.3em] font-light">
                VINSARAA
              </span>
            </Link>

            {/* Right: User Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <button 
                className={`p-2 transition-colors ${
                  isScrolled ? 'hover:bg-foreground/5' : 'hover:bg-hero-text/10'
                }`}
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
              <button 
                className={`p-2 transition-colors ${
                  isScrolled ? 'hover:bg-foreground/5' : 'hover:bg-hero-text/10'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                className={`p-2 transition-colors ${
                  isScrolled ? 'hover:bg-foreground/5' : 'hover:bg-hero-text/10'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-hero-overlay/50 z-50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 bottom-0 w-80 md:w-96 bg-menu text-menu-foreground z-50 overflow-y-auto"
            >
              {/* Close Button */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex justify-end p-4 border-b border-menu-border"
              >
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-foreground/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>

              {/* Menu Content */}
              <nav className="p-6">
                {menuCategories.map((category, index) => (
                  <motion.div 
                    key={category.title} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (index * 0.05), duration: 0.3 }}
                    className="border-b border-menu-border"
                  >
                    <button
                      onClick={() => toggleCategory(category.title)}
                      className="w-full flex items-center justify-between py-4 text-left font-medium tracking-wider text-sm hover:text-muted-foreground transition-colors"
                    >
                      {category.title}
                      {expandedCategory === category.title ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {expandedCategory === category.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="pb-4 space-y-2">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </nav>

              {/* Social Icons in Menu - Mobile */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="lg:hidden flex items-center justify-center gap-6 p-6 border-t border-menu-border"
              >
                <a href="#" className="p-2 hover:bg-foreground/5 rounded-full transition-all hover:scale-110" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:bg-foreground/5 rounded-full transition-all hover:scale-110" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:bg-foreground/5 rounded-full transition-all hover:scale-110" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:bg-foreground/5 rounded-full transition-all hover:scale-110" aria-label="Pinterest">
                  <FaPinterest className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:bg-foreground/5 rounded-full transition-all hover:scale-110" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;