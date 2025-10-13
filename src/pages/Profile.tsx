import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Briefcase, MapPin, DollarSign, Bell, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Profile() {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Profile updated!",
      description: "Your changes have been saved successfully",
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-3xl font-bold">Profile & Settings</h1>
        <p className="text-muted-foreground">
          Manage your personal information and preferences
        </p>
      </div>

      {/* Profile Overview */}
      <Card className="p-6">
        <div className="flex items-start gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-muted-foreground">john.doe@example.com</p>
            <div className="mt-3 flex gap-2">
              <Badge>Frontend Developer</Badge>
              <Badge variant="secondary">Remote</Badge>
              <Badge variant="secondary">$120k+</Badge>
            </div>
          </div>
          <Button variant="outline">Change Photo</Button>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        {/* Personal Info */}
        <TabsContent value="personal" className="mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <User className="h-5 w-5" />
              Basic Information
            </h3>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea
                  id="bio"
                  rows={4}
                  defaultValue="Passionate frontend developer with 5+ years of experience building modern web applications."
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Briefcase className="h-5 w-5" />
              Professional Details
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentRole">Current Role</Label>
                <Input id="currentRole" defaultValue="Senior Frontend Developer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Select defaultValue="5-7">
                  <SelectTrigger id="experience">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-7">5-7 years</SelectItem>
                    <SelectItem value="8+">8+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" placeholder="linkedin.com/in/johndoe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio Website</Label>
                  <Input id="portfolio" placeholder="johndoe.com" />
                </div>
              </div>
            </div>
          </Card>

          <Button onClick={handleSave} className="w-full">
            Save Changes
          </Button>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <MapPin className="h-5 w-5" />
              Job Preferences
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="desiredRole">Desired Role</Label>
                <Input id="desiredRole" defaultValue="Senior Frontend Developer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Preferred Location</Label>
                <Select defaultValue="remote">
                  <SelectTrigger id="location">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="onsite">On-site</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobType">Job Type</Label>
                <Select defaultValue="fulltime">
                  <SelectTrigger id="jobType">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fulltime">Full-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="parttime">Part-time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <DollarSign className="h-5 w-5" />
              Salary Expectations
            </h3>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="minSalary">Minimum Salary</Label>
                  <Input id="minSalary" defaultValue="$120,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxSalary">Desired Salary</Label>
                  <Input id="maxSalary" defaultValue="$160,000" />
                </div>
              </div>
            </div>
          </Card>

          <Button onClick={handleSave} className="w-full">
            Save Preferences
          </Button>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Bell className="h-5 w-5" />
              Email Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Job Recommendations</div>
                  <p className="text-sm text-muted-foreground">
                    Get notified about new job matches
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Application Updates</div>
                  <p className="text-sm text-muted-foreground">
                    Status changes on your applications
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Interview Reminders</div>
                  <p className="text-sm text-muted-foreground">
                    Reminders for upcoming interviews
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Weekly Digest</div>
                  <p className="text-sm text-muted-foreground">
                    Summary of your activity and new opportunities
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Privacy */}
        <TabsContent value="privacy" className="mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Shield className="h-5 w-5" />
              Privacy Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Public Profile</div>
                  <p className="text-sm text-muted-foreground">
                    Make your profile visible to recruiters
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Show Resume to Employers</div>
                  <p className="text-sm text-muted-foreground">
                    Allow employers to view your resume
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Anonymous Application</div>
                  <p className="text-sm text-muted-foreground">
                    Hide your name until employers show interest
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          <Card className="border-destructive/50 bg-destructive/5 p-6">
            <h3 className="mb-2 font-semibold text-destructive">Danger Zone</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              These actions are permanent and cannot be undone
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Download My Data
              </Button>
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
