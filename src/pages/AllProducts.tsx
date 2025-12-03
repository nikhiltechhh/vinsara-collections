import { motion } from "framer-motion";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/data/products";

const AllProducts = () => {
  const allProducts = getAllProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Content */}
      <main className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="font-serif text-3xl md:text-5xl font-normal tracking-wide text-foreground mb-4">
              All Products
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Explore our complete collection of handcrafted ethnic wear, where tradition meets contemporary elegance.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-border"
          >
            <p className="text-sm text-muted-foreground">
              Showing <span className="text-foreground font-medium">{allProducts.length}</span> products
            </p>
            <div className="flex items-center gap-4">
              <select className="bg-transparent border border-border px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground">
                <option value="newest">Sort by: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {allProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.images[0]}
                title={product.title}
                price={product.price}
                sizes={product.sizes}
                index={index}
              />
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 md:mt-16"
          >
            <button className="view-all-btn">
              Load More
            </button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground tracking-wider">
            © 2024 VINSARAA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AllProducts;