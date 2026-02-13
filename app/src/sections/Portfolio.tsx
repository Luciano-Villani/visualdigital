import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    image: '/project-luigibosca.jpg',
    category: 'Realidad Virtual',
    title: 'Luigi Bosca - Tour Virtual de Finca',
    description:
      'Experiencia VR inmersiva que permite recorrer virtualmente la finca y bodega, conociendo el proceso de elaboración del vino.',
    tags: ['Oculus Quest', 'Unity', 'Turismo'],
    featured: true,
  },
  {
    image: '/project-penal.jpg',
    category: 'Juego Kinético',
    title: 'Penal Virtual - Activación Deportiva',
    description:
      'Simulador de penales con sensor de movimiento que mide velocidad, precisión y muestra resultados en tiempo real.',
    tags: ['Kinect', 'Unity', 'Deportes'],
    featured: true,
  },
  {
    image: '/project-memotest.jpg',
    category: 'Juego en Tablet',
    title: 'Memotest - Activación de Marca',
    description: 'Juego de memoria personalizado para activación en puntos de venta.',
    tags: ['Tablet', 'Unity', 'Branding'],
    featured: false,
  },
  {
    image: '/project-touchscreen.jpg',
    category: 'Pantalla Touch',
    title: 'Interactive Product Showcase',
    description: 'Showroom interactivo para feria tecnológica.',
    tags: ['Touch', 'React', 'CMS'],
    featured: false,
  },
  {
    image: '/project-vr-nike.jpg',
    category: 'Realidad Virtual',
    title: 'Training VR Experience',
    description: 'Experiencia inmersiva de entrenamiento virtual.',
    tags: ['Oculus Quest', 'Unity', '3D'],
    featured: false,
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(projects.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      projects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 100);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [isVisible]);

  const featuredProjects = projects.filter((p) => p.featured);
  const gridProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark-light"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Proyectos que nos{' '}
            <span className="text-gradient">enorgullecen</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Algunas de las experiencias interactivas que hemos creado
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
                visibleCards[index]
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium mb-3 w-fit">
                    {project.category}
                  </span>
                  <h3 className="font-display font-semibold text-xl lg:text-2xl text-white mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-white/10 text-white/60 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={18} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project, index) => {
            const actualIndex = featuredProjects.length + index;
            return (
              <div
                key={project.title}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                  visibleCards[actualIndex]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${actualIndex * 100}ms` }}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium mb-2 w-fit">
                      {project.category}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-white/10 text-white/60 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
