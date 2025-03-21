// src/app/page.tsx
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
// import Sponsors from './components/Sponsors';
import Venue from './components/Venue';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="schedule" className="min-h-screen">
          <Schedule />
        </section>
        {/* <section className="min-h-screen">
          <Sponsors />
        </section> */}
        <section id="venue" className="min-h-screen">
          <Venue />
        </section>
        <section id="register" className="min-h-screen">
          <Footer />
        </section>
      </div>
    </div>
  );
}