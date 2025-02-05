import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection/CardSection";
import Footer from "./components/Footer";
import { Blog } from "./pages/Blog";
import { Shop } from "./pages/Shop";
import { Lookbook } from "./pages/Lookbook";
import { Features } from "./pages/Features";
import { Pages } from "./pages/Pages";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product/:cardId" element={<ProductDetail />} />
          <Route path="/*" element={<h1>Такой страницы не существует</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
