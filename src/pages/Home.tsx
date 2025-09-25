import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, Mail, Code, BarChart3, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/centrine-photo.jpg';

const Home = () => {
  const highlights = [
    {
      icon: Mail,
      title: 'Executive Support',
      description: 'Email management, calendar scheduling, document handling, and comprehensive administrative support for busy executives.'
    },
    {
      icon: Code,
      title: 'Digital Solutions',
      description: 'Website management, CRM systems, SEO optimization, and technical support using WordPress, Wix, and custom platforms.'
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'AI data annotation, workflow automation, and digital process optimization to enhance business efficiency.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="gradient-text">Centrine</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  Virtual Assistant | Executive Support Specialist | AI & Tech Solutions Expert
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Versatile virtual assistant with 4+ years of executive support experience and technical expertise. 
                  I streamline operations, manage digital workflows, and provide comprehensive administrative 
                  support to help businesses thrive in the digital age.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Link to="/portfolio">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/assets/Centrine_Ongaria_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center space-x-6 pt-4">
                <a 
                  href="mailto:centyanita@gmail.com"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>centyanita@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Centrine Ong'aria - Professional Photo"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-large hover:shadow-glow transition-all duration-500 animate-float"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining technical expertise with executive support skills to streamline business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 bg-gradient-card">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <highlight.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">4+</div>
              <div className="text-muted-foreground">Years VA Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">50+</div>
              <div className="text-muted-foreground">Tasks Automated</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">10+</div>
              <div className="text-muted-foreground">Platforms Mastered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-primary-foreground">
            <h2 className="text-4xl font-bold">Ready to Work Together?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ready to streamline your business operations and free up your time? 
              Let's discuss how I can support your success as your dedicated virtual assistant.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;