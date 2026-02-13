import { useEffect, useRef, useState } from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Descubrimiento',
    description: 'Entendemos tus objetivos, audiencia y requisitos técnicos.',
    color: 'primary',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Diseño UX/UI',
    description: 'Creamos wireframes, prototipos y el diseño visual de la experiencia.',
    color: 'secondary',
  },
  {
    number: '03',
    icon: Code,
    title: 'Desarrollo',
    description: 'Programamos, integramos assets y realizamos pruebas continuas.',
    color: 'accent',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Lanzamiento',
    description: 'Instalación en sitio, capacitación y soporte durante el evento.',
    color: 'primary',
  },
];

const colorMap: Record<string, string> = {
  primary: '#6C5DD3',
  secondary: '#00D4AA',
  accent: '#FF6B6B',
};

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);

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

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setLineProgress(100);
    }, 300);

    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark-light"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Nuestro Proceso
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            De la idea a la experiencia en{' '}
            <span className="text-gradient">4 pasos</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1500 ease-out"
              style={{ width: `${lineProgress}%` }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step Card */}
                <div className="text-center lg:text-left">
                  {/* Icon */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${colorMap[step.color]}20` }}
                    >
                      <step.icon
                        size={28}
                        style={{ color: colorMap[step.color] }}
                      />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
