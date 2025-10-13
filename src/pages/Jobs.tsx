import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  Heart,
  TrendingUp,
  Clock,
  Building2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Jobs() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const jobs = [
    {
      id: 1,
      company: "TechVision Inc",
      role: "Senior Frontend Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      match: 95,
      posted: "2 days ago",
      description: "Join our innovative team building next-gen web applications with React and TypeScript.",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
      id: 2,
      company: "CloudScale",
      role: "Full Stack Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$140k - $180k",
      match: 88,
      posted: "5 days ago",
      description: "Help us build scalable cloud infrastructure and modern web applications.",
      skills: ["React", "Python", "Docker", "Kubernetes"],
    },
    {
      id: 3,
      company: "StartupLab",
      role: "UI/UX Engineer",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $140k",
      match: 85,
      posted: "1 week ago",
      description: "Design and implement beautiful user experiences for our SaaS platform.",
      skills: ["React", "Figma", "CSS", "JavaScript"],
    },
    {
      id: 4,
      company: "DataFlow Systems",
      role: "Frontend Developer",
      location: "Remote",
      type: "Contract",
      salary: "$90k - $120k",
      match: 82,
      posted: "3 days ago",
      description: "Build data visualization dashboards using modern frontend frameworks.",
      skills: ["React", "D3.js", "TypeScript", "Redux"],
    },
    {
      id: 5,
      company: "InnovateAI",
      role: "React Developer",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $150k",
      match: 90,
      posted: "1 day ago",
      description: "Work on AI-powered applications with cutting-edge technologies.",
      skills: ["React", "TypeScript", "GraphQL", "AI/ML"],
    },
  ];

  const toggleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
      toast({
        title: "Job removed",
        description: "Removed from saved jobs",
      });
    } else {
      setSavedJobs([...savedJobs, jobId]);
      toast({
        title: "Job saved!",
        description: "Added to your saved jobs",
      });
    }
  };

  const handleApply = (jobRole: string) => {
    toast({
      title: "Application sent!",
      description: `Your application for ${jobRole} has been submitted`,
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-3xl font-bold">Job Discovery</h1>
        <p className="text-muted-foreground">
          Find your next opportunity from our curated job listings
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs, companies, or keywords..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="sf">San Francisco</SelectItem>
              <SelectItem value="ny">New York</SelectItem>
              <SelectItem value="austin">Austin</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="fulltime">Full-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="parttime">Part-time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{jobs.length}</span> jobs matching your profile
        </p>
        <Button variant="outline" size="sm">
          <TrendingUp className="mr-2 h-4 w-4" />
          Sort by Match
        </Button>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="overflow-hidden transition-all hover:shadow-elegant">
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <Badge className="bg-gradient-success border-0 text-base">
                      {job.match}% Match
                    </Badge>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground">{job.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <Button onClick={() => handleApply(job.role)} className="flex-1">
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => toggleSaveJob(job.id)}
                      className={savedJobs.includes(job.id) ? "text-destructive" : ""}
                    >
                      <Heart
                        className="h-4 w-4"
                        fill={savedJobs.includes(job.id) ? "currentColor" : "none"}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <Button variant="outline" size="lg">
          Load More Jobs
        </Button>
      </div>
    </div>
  );
}
