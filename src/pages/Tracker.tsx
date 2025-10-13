import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  Building2,
  Calendar,
  MoreHorizontal,
} from "lucide-react";

export default function Tracker() {
  const applications = [
    {
      id: 1,
      company: "TechVision Inc",
      role: "Senior Frontend Developer",
      appliedDate: "2024-01-15",
      status: "interview",
      stage: 3,
      totalStages: 4,
      nextStep: "Final interview on Jan 22, 2:00 PM",
    },
    {
      id: 2,
      company: "CloudScale",
      role: "Full Stack Engineer",
      appliedDate: "2024-01-12",
      status: "under_review",
      stage: 2,
      totalStages: 4,
      nextStep: "Waiting for technical assessment results",
    },
    {
      id: 3,
      company: "StartupLab",
      role: "UI/UX Engineer",
      appliedDate: "2024-01-10",
      status: "interview",
      stage: 2,
      totalStages: 4,
      nextStep: "Phone screening on Jan 20, 10:00 AM",
    },
    {
      id: 4,
      company: "DataFlow Systems",
      role: "Frontend Developer",
      appliedDate: "2024-01-08",
      status: "applied",
      stage: 1,
      totalStages: 4,
      nextStep: "Application under review",
    },
    {
      id: 5,
      company: "MegaCorp",
      role: "React Developer",
      appliedDate: "2024-01-05",
      status: "rejected",
      stage: 2,
      totalStages: 4,
      nextStep: "Position filled",
    },
    {
      id: 6,
      company: "InnovateAI",
      role: "Senior Engineer",
      appliedDate: "2024-01-03",
      status: "offer",
      stage: 4,
      totalStages: 4,
      nextStep: "Offer expires on Jan 25",
    },
  ];

  const statusConfig = {
    applied: { 
      icon: Clock, 
      color: "text-muted-foreground", 
      bg: "bg-muted", 
      label: "Applied",
      badgeVariant: "secondary" as const
    },
    under_review: { 
      icon: AlertCircle, 
      color: "text-warning", 
      bg: "bg-warning-light", 
      label: "Under Review",
      badgeVariant: "secondary" as const
    },
    interview: { 
      icon: CheckCircle2, 
      color: "text-primary", 
      bg: "bg-primary-light", 
      label: "Interview",
      badgeVariant: "default" as const
    },
    offer: { 
      icon: CheckCircle2, 
      color: "text-success", 
      bg: "bg-success-light", 
      label: "Offer Received",
      badgeVariant: "default" as const
    },
    rejected: { 
      icon: XCircle, 
      color: "text-destructive", 
      bg: "bg-destructive/10", 
      label: "Not Selected",
      badgeVariant: "secondary" as const
    },
  };

  const stats = {
    total: applications.length,
    active: applications.filter(a => ['applied', 'under_review', 'interview'].includes(a.status)).length,
    interviews: applications.filter(a => a.status === 'interview').length,
    offers: applications.filter(a => a.status === 'offer').length,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-3xl font-bold">Application Tracker</h1>
        <p className="text-muted-foreground">
          Track and manage all your job applications in one place
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-6">
          <div className="text-2xl font-bold">{stats.total}</div>
          <p className="text-sm text-muted-foreground">Total Applications</p>
        </Card>
        <Card className="p-6">
          <div className="text-2xl font-bold text-primary">{stats.active}</div>
          <p className="text-sm text-muted-foreground">Active</p>
        </Card>
        <Card className="p-6">
          <div className="text-2xl font-bold text-warning">{stats.interviews}</div>
          <p className="text-sm text-muted-foreground">Interviews</p>
        </Card>
        <Card className="p-6">
          <div className="text-2xl font-bold text-success">{stats.offers}</div>
          <p className="text-sm text-muted-foreground">Offers</p>
        </Card>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((app) => {
          const config = statusConfig[app.status as keyof typeof statusConfig];
          const Icon = config.icon;
          const progress = (app.stage / app.totalStages) * 100;

          return (
            <Card key={app.id} className="overflow-hidden transition-all hover:shadow-card">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  {/* Icon & Info */}
                  <div className="flex gap-4">
                    <div className={`rounded-lg ${config.bg} p-3`}>
                      <Icon className={`h-6 w-6 ${config.color}`} />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold">{app.role}</h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                          <span>{app.company}</span>
                          <span>•</span>
                          <Calendar className="h-4 w-4" />
                          <span>Applied {new Date(app.appliedDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Stage {app.stage} of {app.totalStages}
                          </span>
                          <span className="font-medium">{Math.round(progress)}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>

                      {/* Next Step */}
                      <div className="rounded-lg border bg-muted/50 p-3">
                        <p className="text-sm">
                          <span className="font-medium">Next: </span>
                          {app.nextStep}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex flex-col items-end gap-3">
                    <Badge variant={config.badgeVariant} className={app.status === 'offer' ? 'bg-gradient-success border-0' : ''}>
                      {config.label}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
