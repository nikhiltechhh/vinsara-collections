import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <NewArrivals />
      
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

export default Index;