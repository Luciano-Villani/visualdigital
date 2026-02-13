import { Linkedin, Instagram, Dribbble } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Juegos en Tablets', href: '#services' },
    { label: 'Pantallas Touch', href: '#services' },
    { label: 'Juegos Kinéticos', href: '#services' },
    { label: 'Realidad Virtual', href: '#services' },
    { label: 'Realidad Aumentada', href: '#services' },
  ],
  solutions: [
    { label: 'Automatización', href: '#solutions' },
    { label: 'Bots', href: '#solutions' },
    { label: 'Herramientas Municipales', href: '#solutions' },
    { label: 'QuickData', href: 'https://quickdata.com.ar' },
  ],
  company: [
    { label: 'Sobre nosotros', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#' },
    { label: 'Contacto', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Dribbble, href: '#', label: 'Behance' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center mb-6">
              <img 
                src="/logo-vd.png" 
                alt="VisualDigital" 
                className="h-10 w-auto"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Desarrollo de experiencias interactivas para eventos, activaciones
              y ferias.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/30 hover:bg-white/10 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Soluciones
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/60 hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/60">
                <a
                  href="mailto:hola@visualdigital.com.ar"
                  className="hover:text-secondary transition-colors"
                >
                  hola@visualdigital.com.ar
                </a>
              </li>
              <li className="text-white/60">
                <a
                  href="tel:+541112345678"
                  className="hover:text-secondary transition-colors"
                >
                  +54 11 1234-5678
                </a>
              </li>
              <li className="text-white/60">Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 VisualDigital. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
