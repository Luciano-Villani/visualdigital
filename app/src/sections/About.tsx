import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: 150, suffix: '+', label: 'Proyectos entregados' },
  { value: 50, suffix: '+', label: 'Clientes satisfechos' },
  { value: 6, suffix: '', label: 'Años de experiencia' },
  { value: 98, suffix: '%', label: 'Tasa de recomendación' },
];

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span className="text-gradient">
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Creamos experiencias que{' '}
              <span className="text-gradient">conectan marcas</span> con personas
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Somos un equipo apasionado por la tecnología y el entretenimiento.
              Desde 2018, ayudamos a marcas a destacar en eventos mediante
              experiencias interactivas memorables.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Nuestro equipo multidisciplinario combina expertise en desarrollo de
              software, diseño de experiencias de usuario y producción de eventos
              para crear soluciones que superan expectativas.
            </p>
            <button className="group flex items-center gap-2 text-white font-semibold hover:text-secondary transition-colors">
              Conoce al equipo
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Stats */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 lg:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-colors"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="font-display font-bold text-4xl lg:text-5xl mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
