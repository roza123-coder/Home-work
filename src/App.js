import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection/CardSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;
