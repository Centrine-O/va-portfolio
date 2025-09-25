import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { projects } from '@/data/portfolio';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-primary-foreground">
            <Button variant="secondary" asChild className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/30">
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <h1 className="text-5xl font-bold">{project.title}</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              {project.longDescription}
            </p>
            <div className="flex gap-4">
              {project.demoUrl && (
                <Button variant="secondary" asChild className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="secondary" asChild className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Image */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-large">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Features */}
              <Card className="border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Outcome */}
              <Card className="border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Project Outcome</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.outcome}</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <Card className="border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle>Project Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Category</h4>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {(project.demoUrl || project.githubUrl) && (
                    <div className="space-y-2 pt-4 border-t">
                      {project.demoUrl && (
                        <Button className="w-full" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" className="w-full" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Related Projects */}
              <Card className="border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle>More Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projects
                    .filter(p => p.id !== project.id && p.category === project.category)
                    .slice(0, 2)
                    .map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        to={`/portfolio/${relatedProject.id}`}
                        className="block p-4 rounded-lg border hover:shadow-medium transition-all duration-300"
                      >
                        <h4 className="font-semibold text-sm mb-1">{relatedProject.title}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </Link>
                    ))}
                  
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to="/portfolio">View All Projects</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;