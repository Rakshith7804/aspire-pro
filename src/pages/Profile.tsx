import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  FolderGit2,
  FileText,
  TrendingUp,
  Edit,
  Share2,
  Download,
  Plus,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Profile() {
  const { toast } = useToast();

  const handleShare = () => {
    toast({
      title: "Profile link copied!",
      description: "Your public profile link has been copied to clipboard",
    });
  };

  return (
    <div className="space-y-0 pb-16">
      {/* Profile Header */}
      <div className="relative px-8 pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Avatar & Basic Info */}
          <div className="flex items-end gap-6">
            <Avatar className="h-40 w-40 border-4 border-background shadow-elegant animate-scale-in">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
              <AvatarFallback className="text-3xl">JD</AvatarFallback>
            </Avatar>
            <div className="mb-4 space-y-1">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">John Doe</h1>
                <Badge className="bg-success/20 text-success hover:bg-success/30">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Open to Work
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                Senior Full Stack Developer @ Infosys
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  5+ years experience
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-4">
            <Button onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share Profile
            </Button>
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="mt-8 grid gap-6 px-8 lg:grid-cols-[300px_1fr]">
        {/* Left Sidebar - 25% */}
        <div className="space-y-6">
          {/* Contact Info Card */}
          <Card className="animate-fade-up shadow-card transition-all duration-300 hover:shadow-elegant">
            <CardHeader>
              <CardTitle className="text-lg">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <a href="#" className="text-primary hover:underline">
                  linkedin.com/in/johndoe
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Github className="h-4 w-4 text-muted-foreground" />
                <a href="#" className="text-primary hover:underline">
                  github.com/johndoe
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <a href="#" className="text-primary hover:underline">
                  johndoe.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats Card */}
          <Card className="animate-fade-up shadow-card transition-all duration-300 hover:shadow-elegant" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="text-lg">Profile Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Profile Views</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Search Appearances</span>
                  <span className="font-semibold">856</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">ATS Score</span>
                  <span className="font-semibold text-success">87/100</span>
                </div>
                <Progress value={87} className="h-2 bg-muted [&>div]:bg-success" />
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Right Main Content - 75% */}
        <div className="space-y-6">
          {/* About / Summary Section */}
          <Card className="animate-fade-up shadow-card transition-all duration-300 hover:shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                About
              </CardTitle>
              <Button variant="ghost" size="sm">
                <Sparkles className="mr-2 h-4 w-4" />
                AI Enhance
              </Button>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="leading-relaxed">
                Passionate Full Stack Developer with 5+ years of experience building scalable web applications 
                using React, Node.js, and cloud technologies. Proven track record of delivering high-impact 
                projects that improve user experience and drive business growth. Seeking opportunities to leverage 
                my expertise in modern web development and contribute to innovative tech solutions.
              </p>
            </CardContent>
          </Card>

          {/* AI Insights Panel */}
          <Card className="border-primary/20 bg-primary/5 shadow-card transition-all duration-300 hover:shadow-glow animate-fade-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                AI Career Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-primary/20 bg-background/50 p-4">
                  <div className="mb-1 text-sm text-muted-foreground">ATS Score</div>
                  <div className="text-2xl font-bold text-success">87/100</div>
                  <div className="mt-1 text-xs text-muted-foreground">Excellent match</div>
                </div>
                <div className="rounded-lg border border-primary/20 bg-background/50 p-4">
                  <div className="mb-1 text-sm text-muted-foreground">Job Match</div>
                  <div className="text-2xl font-bold text-primary">92%</div>
                  <div className="mt-1 text-xs text-muted-foreground">Strong alignment</div>
                </div>
                <div className="rounded-lg border border-primary/20 bg-background/50 p-4">
                  <div className="mb-1 text-sm text-muted-foreground">Skill Gaps</div>
                  <div className="text-2xl font-bold text-improvement">3</div>
                  <div className="mt-1 text-xs text-muted-foreground">Areas to improve</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Recommended Improvements:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="mt-0.5 h-4 w-4 text-improvement" />
                    <span>Add Docker and Kubernetes to skills section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="mt-0.5 h-4 w-4 text-improvement" />
                    <span>Include metrics in project descriptions (e.g., "Increased performance by 40%")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="mt-0.5 h-4 w-4 text-improvement" />
                    <span>Get AWS certification to match job requirements</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="shadow-card transition-all duration-300 hover:shadow-elegant animate-fade-up" style={{ animationDelay: "200ms" }}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Experience
              </CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Experience
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Experience Item 1 */}
              <div className="group relative border-l-2 border-primary/20 pl-6 pb-6 last:pb-0">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Senior Full Stack Developer</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-medium">Infosys</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">Jan 2022 - Present</span>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      San Francisco, CA (Remote)
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Led development of microservices architecture serving 2M+ users, improving system scalability by 40%</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Architected and implemented real-time dashboard using React, Redux, and WebSockets</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Mentored team of 5 junior developers and conducted code reviews</span>
                      </li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">AWS</Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="group relative border-l-2 border-muted pl-6">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-muted bg-background" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Full Stack Developer</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-medium">TechCorp</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">Jun 2019 - Dec 2021</span>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      New York, NY
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Built and maintained 15+ RESTful APIs serving mobile and web applications</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Reduced page load time by 60% through code optimization and lazy loading</span>
                      </li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">Express</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Docker</Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="shadow-card transition-all duration-300 hover:shadow-elegant animate-fade-up" style={{ animationDelay: "300ms" }}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Education
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <div className="mt-1 text-sm font-medium text-muted-foreground">Stanford University</div>
                  <div className="mt-1 text-sm text-muted-foreground">2015 - 2019 • GPA: 3.8/4.0</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="shadow-card transition-all duration-300 hover:shadow-elegant animate-fade-up" style={{ animationDelay: "400ms" }}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Skills & Expertise
              </CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Skill
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Frontend */}
              <div>
                <h4 className="mb-3 font-semibold text-sm text-muted-foreground">Frontend Development</h4>
                <div className="space-y-3">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">React & TypeScript</span>
                      <span className="text-sm text-muted-foreground">Expert</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">Tailwind CSS</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">Next.js</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="mb-3 font-semibold text-sm text-muted-foreground">Backend Development</h4>
                <div className="space-y-3">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">Node.js & Express</span>
                      <span className="text-sm text-muted-foreground">Expert</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">PostgreSQL & MongoDB</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">REST & GraphQL APIs</span>
                      <span className="text-sm text-muted-foreground">Expert</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </div>
              </div>

              {/* Cloud & Tools */}
              <div>
                <h4 className="mb-3 font-semibold text-sm text-muted-foreground">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-sm">AWS</Badge>
                  <Badge variant="secondary" className="text-sm">Docker</Badge>
                  <Badge variant="secondary" className="text-sm">Git</Badge>
                  <Badge variant="secondary" className="text-sm">CI/CD</Badge>
                  <Badge variant="secondary" className="text-sm">Kubernetes</Badge>
                  <Badge variant="secondary" className="text-sm">Jenkins</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="shadow-card transition-all duration-300 hover:shadow-elegant animate-fade-up" style={{ animationDelay: "500ms" }}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FolderGit2 className="h-5 w-5" />
                Projects & Portfolio
              </CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Project 1 */}
              <div className="group rounded-lg border p-4 transition-all hover:border-primary hover:shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">E-Commerce Platform</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Lead Developer</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Built a full-featured e-commerce platform with real-time inventory management, 
                      payment integration, and analytics dashboard. Increased conversion rate by 35%.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Stripe</Badge>
                      <Badge variant="secondary">AWS</Badge>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button variant="outline" size="sm" className="h-8">
                        <Globe className="mr-1 h-3 w-3" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="h-8">
                        <Github className="mr-1 h-3 w-3" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group rounded-lg border p-4 transition-all hover:border-primary hover:shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Task Management SaaS</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Full Stack Developer</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Developed a collaborative task management application with real-time updates, 
                      team collaboration features, and advanced analytics.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Supabase</Badge>
                      <Badge variant="secondary">Tailwind</Badge>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button variant="outline" size="sm" className="h-8">
                        <Globe className="mr-1 h-3 w-3" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="h-8">
                        <Github className="mr-1 h-3 w-3" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications Section */}
          <Card className="shadow-card transition-all duration-300 hover:shadow-elegant animate-fade-up" style={{ animationDelay: "600ms" }}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certifications & Licenses
              </CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Certificate
              </Button>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="flex gap-3 rounded-lg border p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">AWS Certified Solutions Architect</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Amazon Web Services</p>
                  <p className="mt-1 text-xs text-muted-foreground">Issued: Jan 2023</p>
                </div>
              </div>

              <div className="flex gap-3 rounded-lg border p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">React Professional Certificate</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Meta</p>
                  <p className="mt-1 text-xs text-muted-foreground">Issued: Mar 2022</p>
                </div>
              </div>

              <div className="flex gap-3 rounded-lg border p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">MongoDB Certified Developer</h4>
                  <p className="mt-1 text-sm text-muted-foreground">MongoDB University</p>
                  <p className="mt-1 text-xs text-muted-foreground">Issued: Sep 2021</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
