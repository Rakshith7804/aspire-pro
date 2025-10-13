import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  FileText,
  Briefcase,
  Target,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const atsScore = 82;
  const activeApplications = 5;
  const upcomingInterviews = 2;

  const applications = [
    { company: "TechCorp", role: "Frontend Developer", status: "interview", date: "Today, 2:00 PM" },
    { company: "StartupXYZ", role: "UI/UX Designer", status: "under_review", date: "2 days ago" },
    { company: "MegaSoft", role: "Full Stack Engineer", status: "applied", date: "1 week ago" },
  ];

  const recommendedJobs = [
    { company: "InnovateLab", role: "Senior React Developer", match: 95, location: "Remote" },
    { company: "CloudTech", role: "Frontend Engineer", match: 88, location: "San Francisco" },
    { company: "DataFlow", role: "UI Developer", match: 85, location: "New York" },
  ];

  const skillSuggestions = [
    { skill: "TypeScript", priority: "high", reason: "Required in 8/10 matching jobs" },
    { skill: "Next.js", priority: "medium", reason: "Growing demand in your field" },
    { skill: "Testing (Jest)", priority: "medium", reason: "Common requirement" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-8 shadow-elegant animate-scale-in">
        <div className="relative z-10">
          <h1 className="mb-2 text-3xl font-bold">Welcome back! 👋</h1>
          <p className="text-lg text-muted-foreground">
            Your career dashboard is looking strong. Here's what's happening today.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-primary opacity-10 blur-3xl" />
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="group p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">ATS Score</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold">{atsScore}</span>
                <span className="text-lg text-muted-foreground">/100</span>
              </div>
              <div className="mt-3">
                <Progress value={atsScore} className="h-2" />
              </div>
            </div>
            <div className="rounded-full bg-success-light p-3">
              <TrendingUp className="h-6 w-6 text-success" />
            </div>
          </div>
          <Link to="/resume">
            <Button variant="ghost" size="sm" className="mt-4 w-full">
              Improve Score <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </Card>

        <Card className="group p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Applications</p>
              <div className="mt-2">
                <span className="text-3xl font-bold">{activeApplications}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {upcomingInterviews} interviews scheduled
              </p>
            </div>
            <div className="rounded-full bg-primary-light p-3">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
          </div>
          <Link to="/tracker">
            <Button variant="ghost" size="sm" className="mt-4 w-full">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </Card>

        <Card className="group p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Skills to Learn</p>
              <div className="mt-2">
                <span className="text-3xl font-bold">{skillSuggestions.length}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Based on job matches</p>
            </div>
            <div className="rounded-full bg-warning-light p-3">
              <Target className="h-6 w-6 text-warning" />
            </div>
          </div>
          <Button variant="ghost" size="sm" className="mt-4 w-full">
            View Skills <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </div>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Applications */}
        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Applications</h2>
            <Link to="/tracker">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {applications.map((app, idx) => {
              const statusConfig = {
                interview: { icon: Clock, color: "text-primary", bg: "bg-primary-light", label: "Interview" },
                under_review: { icon: AlertCircle, color: "text-warning", bg: "bg-warning-light", label: "Under Review" },
                applied: { icon: CheckCircle2, color: "text-muted-foreground", bg: "bg-muted", label: "Applied" },
              };
              const config = statusConfig[app.status as keyof typeof statusConfig];
              const Icon = config.icon;

              return (
                <div key={idx} className="flex items-start gap-4 rounded-lg border p-4 transition-all duration-300 hover:border-primary hover:shadow-card hover:-translate-y-0.5">
                  <div className={`rounded-lg ${config.bg} p-2.5`}>
                    <Icon className={`h-5 w-5 ${config.color}`} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold">{app.role}</h3>
                    <p className="text-sm text-muted-foreground">{app.company}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {config.label}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{app.date}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Recommended Jobs */}
        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recommended for You</h2>
            <Link to="/jobs">
              <Button variant="ghost" size="sm">
                Browse More
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {recommendedJobs.map((job, idx) => (
              <div key={idx} className="flex items-start gap-4 rounded-lg border p-4 transition-all duration-300 hover:border-primary hover:shadow-card hover:-translate-y-0.5">
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{job.role}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <Badge className="bg-gradient-success border-0">
                      {job.match}% Match
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{job.location}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Skill Suggestions */}
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Skills to Boost Your Profile</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skillSuggestions.map((skill, idx) => (
            <div key={idx} className="rounded-lg border p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">{skill.skill}</h3>
                <Badge
                  variant={skill.priority === "high" ? "default" : "secondary"}
                  className={skill.priority === "high" ? "bg-warning" : ""}
                >
                  {skill.priority}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{skill.reason}</p>
              <Button size="sm" variant="ghost" className="mt-3 w-full">
                Find Courses
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
