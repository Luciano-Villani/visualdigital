import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Solutions } from './sections/Solutions';
import { About } from './sections/About';
import { Portfolio } from './sections/Portfolio';
import { Technologies } from './sections/Technologies';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { CTA } from './sections/CTA';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <About />
        <Portfolio />
        <Technologies />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
