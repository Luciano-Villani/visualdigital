import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'La activación con tablets superó todas nuestras expectativas. El engagement fue increíble y recopilamos datos valiosos de nuestros clientes.',
    author: 'María González',
    role: 'Marketing Manager, Coca-Cola',
    avatar: '/avatar-1.jpg',
  },
  {
    quote:
      'El equipo entendió perfectamente nuestra visión y creó una experiencia VR que dejó a todos asombrados en la feria.',
    author: 'Carlos Rodríguez',
    role: 'Director de Eventos, Nike',
    avatar: '/avatar-2.jpg',
  },
  {
    quote:
      'Profesionales, creativos y cumplidos. Recomiendo ampliamente para cualquier proyecto interactivo.',
    author: 'Ana Martínez',
    role: 'CEO, Agencia Creativa XYZ',
    avatar: '/avatar-3.jpg',
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
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
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Testimonios
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Lo que dicen nuestros{' '}
            <span className="text-gradient">clientes</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="relative p-8 lg:p-12 rounded-3xl bg-white/[0.03] border border-white/10">
                    {/* Quote Icon */}
                    <Quote
                      size={48}
                      className="absolute top-6 left-6 text-primary/20"
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8 italic">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                        />
                        <div>
                          <div className="font-display font-semibold text-white">
                            {testimonial.author}
                          </div>
                          <div className="text-white/50 text-sm">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-primary/30 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-primary/30 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
