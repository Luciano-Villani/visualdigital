import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" ref={sectionRef} className="relative py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`relative rounded-[40px] bg-gradient-primary p-12 lg:p-20 overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />

          {/* Floating elements */}
          <div className="absolute top-10 left-10 animate-float">
            <Sparkles size={32} className="text-white/30" />
          </div>
          <div
            className="absolute bottom-10 right-10 animate-float"
            style={{ animationDelay: '1s' }}
          >
            <Sparkles size={24} className="text-white/20" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              ¿Listo para crear tu próxima experiencia interactiva?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Contáctanos y hablemos sobre tu proyecto. Cotización sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-secondary hover:text-dark transition-all duration-300 hover:scale-105"
              >
                Iniciar proyecto
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={scrollToPortfolio}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Ver más proyectos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
