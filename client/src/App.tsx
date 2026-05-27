import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import FRPProducts from "./pages/FRPProducts";
import DataRoom from "./pages/DataRoom";
import Inquiry from "./pages/Inquiry";
import SearchResults from "./pages/SearchResults";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* About Pages - 각 서브페이지를 독립적인 경로로 분리 */}
      <Route path="/about/greeting" component={About} />
      <Route path="/about/philosophy" component={About} />
      <Route path="/about/history" component={About} />
      <Route path="/about/location" component={About} />
      <Route path="/about" component={About} />
      
      {/* Products Pages */}
      <Route path="/products/resin" component={Products} />
      <Route path="/products/fiberglass" component={Products} />
      <Route path="/products/paint" component={Products} />
      <Route path="/products/accessories" component={Products} />
      <Route path="/products" component={Products} />
      <Route path="/product/:id" component={ProductDetail} />
      
      {/* FRP Products Pages */}
      <Route path="/frp/acid-tank" component={FRPProducts} />
      <Route path="/frp/water-tank" component={FRPProducts} />
      <Route path="/frp/bathtub" component={FRPProducts} />
      <Route path="/frp/others" component={FRPProducts} />
      <Route path="/frp" component={FRPProducts} />
      
      {/* Inquiry */}
      <Route path="/inquiry" component={Inquiry} />
      
      {/* Data Room Pages */}
      <Route path="/data-room/new-products" component={DataRoom} />
      <Route path="/data-room/technical" component={DataRoom} />
      <Route path="/data-room" component={DataRoom} />
      
      {/* Search */}
      <Route path="/search" component={SearchResults} />
      
      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
