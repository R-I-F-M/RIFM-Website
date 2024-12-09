import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated to Routes
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import VideoSection from './components/VideoSection/VideoSection';
import Blogs from "./components/Blogs/Blogs";
import MoreBlogs from "./components/MoreBlogs/MoreBlogs";
import Footer from './components/Footer/Footer';
import bgImage from "./assets/bg.png";

const HomePage = () => (
  <div>
    <Navbar />
    <div className="h-[700px] relative">
      <img src={bgImage} alt="Background" className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]" />
      <section id="Hero">
        <Hero />
      </section>
    </div>
    <section id="services">
      <Services />
    </section>
    <section id="banner">
      <Banner />
    </section>
    <Banner2 />
    <section id="videoSection">
      <VideoSection />
    </section>
    <section id="blogs">
      <Blogs />
    </section>
    <section id="contact">
      <Footer />
    </section>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/more-blogs" element={<MoreBlogs />} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}

export default App;
