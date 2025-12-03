import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/pages/CartContext";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Sleeved from "./pages/Sleeved";
import Sleeveless from "./pages/Sleeveless";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isIndexPage = location.pathname === "/";

  return (
    <>
      {!isIndexPage && <Header forceScrolled={true} />}
      <main className={!isIndexPage ? "pt-16" : ""}>
        {children}
      </main>
      {!isIndexPage && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />
          
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/sleeved" element={<Sleeved />} />
              <Route path="/sleeveless" element={<Sleeveless />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;