import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { ParticlesBackground } from '../components/ParticlesBackground';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Background Effects */}
      <ParticlesBackground />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />
      
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-medium text-white/80 tracking-wider uppercase">
                Desarrollo Interactivo
              </span>
            </div>

            <h1
              className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Transformamos tus{' '}
              <span className="text-gradient">eventos</span> en experiencias{' '}
              <span className="text-gradient-accent">inolvidables</span>
            </h1>

            <p
              className={`text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Desarrollamos juegos interactivos, aplicaciones touch y experiencias de
              realidad virtual para activaciones de marca, ferias y promociones.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-dark font-semibold hover:bg-secondary transition-all duration-300 hover:scale-105"
              >
                Ver nuestros proyectos
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:border-secondary hover:bg-white/5 transition-all duration-300"
              >
                <Play size={18} className="text-secondary" />
                Contáctanos
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="relative animate-float">
              <img
                src="/hero-devices.png"
                alt="Dispositivos interactivos"
                className="w-full max-w-lg mx-auto relative z-10"
              />
              
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-[100px] rounded-full scale-75" />
            </div>

            {/* Floating badges */}
            <div className="absolute top-10 -left-4 px-4 py-2 rounded-xl glass animate-pulse-glow">
              <span className="text-sm font-medium text-white">150+ Proyectos</span>
            </div>
            <div className="absolute bottom-20 -right-4 px-4 py-2 rounded-xl glass animate-pulse-glow" style={{ animationDelay: '1s' }}>
              <span className="text-sm font-medium text-white">VR / AR / Touch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
