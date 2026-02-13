import { useEffect, useRef, useState } from 'react';
import { FileText, Bot, Building2, ArrowRight, ExternalLink } from 'lucide-react';

const solutions = [
  {
    icon: FileText,
    title: 'Automatización de Facturas',
    description:
      'Sistemas inteligentes para carga, procesamiento y gestión automatizada de facturas y documentación.',
    features: [
      'OCR y reconocimiento de texto',
      'Validación automática',
      'Integración con sistemas contables',
      'Reportes y auditoría',
    ],
  },
  {
    icon: Bot,
    title: 'Bots y Automatización',
    description:
      'Desarrollo de bots para automatizar tareas repetitivas y optimizar procesos internos.',
    features: [
      'Bots de WhatsApp/Telegram',
      'Automatización de reportes',
      'Integraciones API',
      'Notificaciones inteligentes',
    ],
  },
  {
    icon: Building2,
    title: 'Herramientas para Municipios',
    description:
      'Soluciones a medida para organismos públicos: gestión, trámites y atención al ciudadano.',
    features: [
      'Gestión documental',
      'Trámites digitales',
      'Portal ciudadano',
      'Estadísticas en tiempo real',
    ],
  },
];

export function Solutions() {
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
      id="solutions"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Soluciones Corporativas
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Desarrollo de{' '}
            <span className="text-gradient">software a medida</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Más allá de las experiencias interactivas, desarrollamos soluciones tecnológicas 
            para optimizar procesos y transformar la gestión de organizaciones.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon size={28} className="text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-xl text-white mb-4">
                {solution.title}
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-white/50 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Case Study: QuickData */}
        <div
          className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 w-fit mb-4">
                <Building2 size={14} className="text-secondary" />
                <span className="text-secondary text-xs font-medium uppercase tracking-wider">
                  Caso de Éxito
                </span>
              </div>
              
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4">
                QuickData - Municipalidad de Vicente López
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                Plataforma de automatización de carga de facturas desarrollada para 
                optimizar los procesos internos de la municipalidad. El sistema procesa 
                miles de documentos mensuales, reduciendo el tiempo de gestión en un 80%.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Automatización', 'OCR', 'Gestión Documental', 'Reportes'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://quickdata.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-dark font-semibold hover:bg-secondary transition-all duration-300"
                >
                  Visitar QuickData
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <button className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:border-secondary hover:bg-white/5 transition-all duration-300">
                  Ver más casos
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-display font-bold text-3xl lg:text-4xl text-gradient mb-2">
                  80%
                </div>
                <div className="text-white/60 text-sm">
                  Reducción en tiempo de procesamiento
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-display font-bold text-3xl lg:text-4xl text-gradient mb-2">
                  10K+
                </div>
                <div className="text-white/60 text-sm">
                  Facturas procesadas mensualmente
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-display font-bold text-3xl lg:text-4xl text-gradient mb-2">
                  99%
                </div>
                <div className="text-white/60 text-sm">
                  Precisión en reconocimiento OCR
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-display font-bold text-3xl lg:text-4xl text-gradient mb-2">
                  24/7
                </div>
                <div className="text-white/60 text-sm">
                  Disponibilidad del sistema
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
