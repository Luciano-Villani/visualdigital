import { useRef } from 'react';

const technologies = [
  { name: 'Unity', icon: '⚡' },
  { name: 'Unreal Engine', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Three.js', icon: '🎲' },
  { name: 'Oculus', icon: '🥽' },
  { name: 'Spark AR', icon: '✨' },
  { name: 'TouchDesigner', icon: '🎨' },
  { name: 'Arduino', icon: '🔌' },
  { name: 'Raspberry Pi', icon: '🍓' },
  { name: 'Node.js', icon: '🟢' },
];

export function Technologies() {
  const sectionRef = useRef<HTMLElement>(null);

  const row1 = [...technologies, ...technologies];
  const row2 = [...technologies.slice().reverse(), ...technologies.slice().reverse()];

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="relative py-20 bg-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center">
          <span className="inline-block text-secondary text-sm font-semibold tracking-wider uppercase mb-4">
            Tecnologías
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Herramientas de{' '}
            <span className="text-gradient">última generación</span>
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Rows */}
      <div className="space-y-6">
        {/* Row 1 - Left */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {row1.map((tech, index) => (
              <div
                key={`row1-${tech.name}-${index}`}
                className="flex-shrink-0 mx-4 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">
                    {tech.icon}
                  </span>
                  <span className="text-white/60 group-hover:text-white font-medium whitespace-nowrap transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {row2.map((tech, index) => (
              <div
                key={`row2-${tech.name}-${index}`}
                className="flex-shrink-0 mx-4 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-secondary/30 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">
                    {tech.icon}
                  </span>
                  <span className="text-white/60 group-hover:text-white font-medium whitespace-nowrap transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent pointer-events-none z-10" />
    </section>
  );
}
