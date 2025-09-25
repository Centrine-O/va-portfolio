import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { experiences } from '@/data/portfolio';

const Experience = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'certification':
        return Award;
      default:
        return Briefcase;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-primary';
      case 'education':
        return 'bg-accent';
      case 'certification':
        return 'bg-orange-500';
      default:
        return 'bg-primary';
    }
  };

  const workExperience = experiences.filter(exp => exp.type === 'work');
  const education = experiences.filter(exp => exp.type === 'education');
  const certifications = experiences.filter(exp => exp.type === 'certification');

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 text-primary-foreground">
            <h1 className="text-5xl font-bold">Experience & Education</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A journey through my professional experience, education, and continuous learning 
              in statistics, data analysis, and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">
              Building expertise across diverse roles in technology and data
            </p>
          </div>

          <div className="space-y-8">
            {workExperience.map((experience, index) => {
              const Icon = getIcon(experience.type);
              return (
                <Card key={experience.id} className="relative overflow-hidden border-0 bg-gradient-card hover:shadow-large transition-all duration-300">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary" />
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${getTypeColor(experience.type)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-xl">{experience.title}</CardTitle>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-muted-foreground">
                              <Briefcase className="h-4 w-4" />
                              <span className="font-medium">{experience.company}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{experience.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="flex-shrink-0">
                        {experience.type === 'work' ? 'Professional' : 'Experience'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Education</h2>
                <p className="text-muted-foreground">Academic foundation and formal learning</p>
              </div>

              {education.map((edu) => {
                const Icon = getIcon(edu.type);
                return (
                  <Card key={edu.id} className="border-0 bg-gradient-card hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${getTypeColor(edu.type)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{edu.title}</CardTitle>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-muted-foreground">
                              <GraduationCap className="h-4 w-4" />
                              <span className="font-medium">{edu.company}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{edu.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{edu.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {edu.description.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Certifications</h2>
                <p className="text-muted-foreground">Professional development and specialized training</p>
              </div>

              {certifications.map((cert) => {
                const Icon = getIcon(cert.type);
                return (
                  <Card key={cert.id} className="border-0 bg-gradient-card hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${getTypeColor(cert.type)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{cert.title}</CardTitle>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-muted-foreground">
                              <Award className="h-4 w-4" />
                              <span className="font-medium">{cert.company}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{cert.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{cert.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {cert.description.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Professional Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Key achievements and milestones in my career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 bg-gradient-card hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl font-bold gradient-text">4+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-card hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl font-bold gradient-text">8+</div>
                <div className="text-muted-foreground">Organizations Worked With</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-card hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl font-bold gradient-text">15+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-card hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl font-bold gradient-text">6+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;