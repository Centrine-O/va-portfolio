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
      highlight: 'Strong foundation in statistical analysis and mathematical modeling'
    },
    {
      icon: Award,
      title: 'Software Engineering',
      description: 'Moringa School (2024-2025)',
      highlight: 'Full-stack web development with modern frameworks'
    },
    {
      icon: Briefcase,
      title: 'Professional Experience',
      description: '4+ Years in Tech Industry',
      highlight: 'From data analysis to full-stack development'
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
              A passionate professional with a unique blend of statistical expertise and 
              full-stack development skills, dedicated to solving complex problems with data-driven solutions.
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
                  I am a versatile and adaptable professional with a strong background in statistics 
                  and comprehensive hands-on experience across web development, data analysis, 
                  AI data annotation, digital content creation, and executive support.
                </p>
                <p>
                  My journey has taken me from analyzing statistical data at the Kenya National 
                  Bureau of Statistics to developing full-stack applications for international 
                  clients. I have contributed to AI and data-driven projects, worked with both 
                  frontend and backend technologies, and collaborated on multilingual content and SEO.
                </p>
                <p>
                  With a foundation in statistical thinking, I approach each project—whether technical, 
                  creative, or administrative—with structure, attention to detail, and a strong learning 
                  mindset. I thrive in environments that require flexibility, problem-solving, and 
                  communication across diverse teams.
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
            <h2 className="text-4xl font-bold">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive toolkit for modern software development and data analysis
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
              'Statistical Analysis', 'Web Development', 'Data Visualization', 'API Development',
              'Database Design', 'Machine Learning', 'Project Management', 'Team Collaboration',
              'Problem Solving', 'Client Communication', 'Agile Development', 'Code Review',
              'Performance Optimization', 'Testing & QA', 'Documentation', 'Mentoring'
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
              When I'm not coding or analyzing data, I enjoy exploring new technologies, 
              contributing to open-source projects, mentoring aspiring developers, and 
              staying updated with the latest trends in AI and data science. I believe 
              in continuous learning and sharing knowledge with the tech community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;