import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:centyanita@gmail.com',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/centrine-ongaria',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/centrine-ongaria',
      icon: Github,
    },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Centrine Ong'aria</h3>
            <p className="text-muted-foreground">
              Virtual Assistant & Executive Support Specialist providing comprehensive 
              administrative solutions and technical expertise for busy professionals.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="/portfolio" className="block text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="/experience" className="block text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="/assets/Centrine_Ongaria_CV.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block text-muted-foreground hover:text-primary transition-colors">
                Download CV
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Ready to support your business with professional virtual assistant services.
            </p>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Centrine Ong'aria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;