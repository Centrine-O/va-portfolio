import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'centyanita@gmail.com',
      href: 'mailto:centyanita@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 712 382 443',
      href: 'tel:+254712382443'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/centrine-ongaria',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/centrine-ongaria',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:centyanita@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission (replace with actual form handling)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 text-primary-foreground">
            <h1 className="text-5xl font-bold">Let's Work Together</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to streamline your business operations? I'm here to provide comprehensive 
              virtual assistant services, executive support, and digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 bg-gradient-card shadow-large">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your business needs or how I can support you..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <p className="text-muted-foreground">
                    Prefer to reach out directly? Here's how you can contact me.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                  <p className="text-muted-foreground">
                    Connect with me on social media and stay updated with my work.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300 ${link.color}`}
                      >
                        <link.icon className="h-5 w-5" />
                        <span className="sr-only">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Available for new projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I'm currently accepting new clients and ready to support your business. 
                    Typical response time is within 12 hours during business days.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Time Zone:</strong> East Africa Time (EAT, UTC+3)
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">What services do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I offer comprehensive virtual assistant services including executive support, 
                  administrative management, CRM administration, digital marketing support, and AI data annotation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you start supporting my business?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I can typically begin supporting your business within 1-3 business days after our initial consultation. 
                  For ongoing support, I offer flexible arrangements from part-time to full-time assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">Do you work with international clients?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! I specialize in remote support and work with clients across different time zones. 
                  I'm experienced in virtual collaboration and maintaining professional relationships remotely.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">What's your preferred communication method?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I prefer email for initial contact and detailed planning. For daily operations, 
                  I'm comfortable with Slack, Teams, WhatsApp, or your preferred communication platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;