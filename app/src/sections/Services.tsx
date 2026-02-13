import { useEffect, useRef, useState } from 'react';
import { Tablet, Monitor, Glasses, Zap, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: Tablet,
    title: 'Juegos en Tablets',
    description:
      'Memotest, quizzes, juegos de destreza y más. Perfectos para activaciones en puntos de venta y eventos corporativos.',
    features: [
      'Interfaz táctil intuitiva',
      'Personalización de marca',
      'Captura de datos de usuarios',
      'Reportes en tiempo real',
    ],
    color: 'from-primary to-primary-light',
    glowColor: 'shadow-glow',
  },
  {
    icon: Monitor,
    title: 'Pantallas Touch Interactivas',
    description:
      'Experiencias multijugador en pantallas grandes. Ideales para ferias, exposiciones y espacios públicos.',
    features: [
      'Pantallas de 32" a 86"',
      'Multitouch avanzado',
      'Contenido dinámico',
      'Integración con redes sociales',
    ],
    color: 'from-secondary to-secondary-light',
    glowColor: 'shadow-glow-secondary',
  },
  {
    icon: Zap,
    title: 'Juegos Kinéticos',
    description:
      'Penales virtuales, simuladores deportivos y experiencias con sensores de movimiento. ¡La acción sin límites!',
    features: [
      'Penales virtuales con radar',
      'Simuladores deportivos',
      'Sensores de movimiento',
      'Leaderboards en tiempo real',
    ],
    color: 'from-accent to-accent-light',
    glowColor: 'shadow-glow-accent',
  },
  {
    icon: Glasses,
    title: 'Experiencias VR & AR',
    description:
      'Sumérgete en mundos virtuales. Desde experiencias Oculus hasta filtros AR para redes sociales.',
    features: [
      'Oculus Quest, HTC Vive, Pico',
      'Experiencias 360°',
      'Filtros AR Instagram/TikTok',
      'WebAR sin descargas',
    ],
    color: 'from-primary to-secondary',
    glowColor: 'shadow-glow',
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark-light"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary text-sm font-semibold tracking-wider uppercase mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Soluciones interactivas para{' '}
            <span className="text-gradient">cada necesidad</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Desde juegos simples hasta experiencias inmersivas complejas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`service-card group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(108, 93, 211, 0.1), transparent 40%)',
                  }}
                />
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${service.glowColor}`}
              >
                <service.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-xl text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-secondary" />
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="group/btn flex items-center gap-2 text-white font-medium hover:text-secondary transition-colors">
                Ver ejemplos
                <ArrowRight
                  size={16}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
