import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Download, Award, GraduationCap, Briefcase } from 'lucide-react';
import { skills } from '@/data/portfolio';

const About = () => {
  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

  const achievements = [
    {
      icon: GraduationCap,
      title: 'BSc in Statistics',
      description: 'University of Nairobi (2015-2019)',
      highlight: 'Strong analytical foundation for data-driven decision making'
    },
    {
      icon: Award,
      title: 'Virtual Assistant Certification',
      description: 'ALX Africa (2024)',
      highlight: 'Professional training in remote work and client management'
    },
    {
      icon: Briefcase,
      title: 'Professional Experience',
      description: '4+ Years in Administrative Support',
      highlight: 'From executive assistance to AI-powered business solutions'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 text-primary-foreground">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your dedicated virtual assistant with a unique blend of administrative expertise, 
              technical skills, and AI knowledge to streamline your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Professional Summary</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a versatile virtual assistant with over 4 years of experience providing 
                  comprehensive administrative support, executive assistance, and digital solutions. 
                  My background in statistics gives me a unique analytical approach to organizing 
                  workflows and optimizing business processes.
                </p>
                <p>
                  From managing complex calendars and coordinating international meetings to developing 
                  custom WordPress solutions and providing AI data annotation services, I bring a 
                  technical edge to traditional virtual assistant work. I specialize in CRM management, 
                  digital marketing support, and workflow automation.
                </p>
                <p>
                  My experience spans working with C-level executives, small business owners, and 
                  tech companies. I excel at understanding unique business needs and implementing 
                  efficient systems that save time, reduce costs, and improve productivity. 
                  I'm committed to delivering exceptional service while maintaining the highest 
                  standards of professionalism and confidentiality.
                </p>
              </div>
              <Button asChild className="bg-gradient-primary">
                <a href="/assets/Centrine_Ongaria_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full CV
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        <p className="text-sm font-medium text-primary">{achievement.highlight}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Professional Skills</h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive toolkit for modern virtual assistance and business support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <Card key={category} className="border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Core Competencies</h2>
            <p className="text-xl text-muted-foreground">
              Key areas where I excel and deliver exceptional results
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Executive Support', 'Calendar Management', 'Email Administration', 'CRM Management',
              'Digital Marketing', 'Content Creation', 'Social Media Management', 'SEO Optimization',
              'Website Management', 'Data Entry', 'Research & Analysis', 'Event Coordination',
              'Travel Planning', 'Document Management', 'AI Data Annotation', 'Process Automation'
            ].map((competency) => (
              <Badge key={competency} variant="secondary" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {competency}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Beyond Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When I'm not supporting clients, I enjoy learning about new productivity tools, 
              exploring automation technologies, staying updated with the latest business trends, 
              and contributing to the virtual assistant community. I believe in continuous 
              improvement and sharing best practices that help other professionals excel in 
              remote work environments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;