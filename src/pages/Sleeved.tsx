import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, ArrowLeft } from 'lucide-react';
import { getProductsByCategory } from '@/data/productss';

import ProductCard from '@/components/ProductCard';

const sortOptions = [
  'Date, new to old',
  'Date, old to new',
  'Price, low to high',
  'Price, high to low',
  'Alphabetically, A-Z',
  'Alphabetically, Z-A'
];

const Sleeved = () => {
  const products = getProductsByCategory('sleeved');
  const [sortBy, setSortBy] = useState('Date, new to old');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'Price, low to high':
        return a.price - b.price;
      case 'Price, high to low':
        return b.price - a.price;
      case 'Alphabetically, A-Z':
        return a.title.localeCompare(b.title);
      case 'Alphabetically, Z-A':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wide">Back</span>
          </Link>
        </div>
      </header> */}

      {/* Page Title */}
      <div className="text-center py-10 md:py-14 mt-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] text-foreground">
          Sleeved
        </h1>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex items-center justify-between">
          {/* Filter Button */}
          {/* <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-foreground transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm tracking-wide">Filter</span>
          </button> */}

          {/* Product Count */}
          <span className="text-sm text-muted-foreground tracking-wide">
            {products.length} products
          </span>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-foreground transition-colors min-w-[180px] justify-between"
            >
              <span className="text-sm tracking-wide">{sortBy}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showSortDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-background border border-border shadow-lg z-20 min-w-[180px]">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setShowSortDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm tracking-wide hover:bg-secondary transition-colors ${
                      sortBy === option ? 'bg-secondary' : ''
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {showFilter && (
          <div className="mt-6 p-6 border border-border animate-fade-in">
            {/* FILTER CONTENT (unchanged) */}
          </div>
        )}
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {sortedProducts.map((product, index) => (
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
      </div>

      {showSortDropdown && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowSortDropdown(false)}
        />
      )}
    </div>
  );
};

export default Sleeved;
