import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles, Download, Eye, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Builder() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [experiences, setExperiences] = useState([
    { company: "", role: "", description: "" }
  ]);

  const handleAIEnhance = (field: string) => {
    toast({
      title: "AI Enhancement Applied",
      description: `Your ${field} has been optimized for ATS compatibility`,
    });
  };

  const addExperience = () => {
    setExperiences([...experiences, { company: "", role: "", description: "" }]);
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const templates = [
    { id: 1, name: "Professional", preview: "Clean and traditional" },
    { id: 2, name: "Modern", preview: "Contemporary design" },
    { id: 3, name: "Creative", preview: "Stand out design" },
  ];

  const steps = [
    { num: 1, title: "Personal Info" },
    { num: 2, title: "Experience" },
    { num: 3, title: "Skills" },
    { num: 4, title: "Template" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-3xl font-bold">AI Resume Builder</h1>
        <p className="text-muted-foreground">
          Create an ATS-optimized resume with AI-powered suggestions
        </p>
      </div>

      {/* Progress Steps */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, idx) => (
            <div key={step.num} className="flex flex-1 items-center">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    currentStep >= step.num
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.num}
                </div>
                <span
                  className={`font-medium ${
                    currentStep >= step.num ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="mx-4 h-0.5 flex-1 bg-muted" />
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Form Content */}
      {currentStep === 1 && (
        <Card className="p-6">
          <h2 className="mb-6 text-xl font-semibold">Personal Information</h2>
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="summary">Professional Summary</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAIEnhance("summary")}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  AI Enhance
                </Button>
              </div>
              <Textarea
                id="summary"
                rows={4}
                placeholder="Brief overview of your professional background and key achievements..."
              />
            </div>
          </div>
        </Card>
      )}

      {currentStep === 2 && (
        <Card className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Work Experience</h2>
            <Button onClick={addExperience} variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add Experience
            </Button>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Experience {idx + 1}</h3>
                  {experiences.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeExperience(idx)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input placeholder="Company name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Job Title</Label>
                    <Input placeholder="Your role" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Description & Achievements</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAIEnhance("experience")}
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      AI Enhance
                    </Button>
                  </div>
                  <Textarea
                    rows={3}
                    placeholder="Describe your responsibilities and achievements..."
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {currentStep === 3 && (
        <Card className="p-6">
          <h2 className="mb-6 text-xl font-semibold">Skills</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="role">Target Role</Label>
              <Select>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select your target role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend Developer</SelectItem>
                  <SelectItem value="backend">Backend Developer</SelectItem>
                  <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                  <SelectItem value="uiux">UI/UX Designer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Your Skills</Label>
                <Button variant="outline" size="sm">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Suggest Skills
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "CSS", "Git"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                    <button className="ml-2">×</button>
                  </Badge>
                ))}
              </div>
              <Input placeholder="Add a skill..." />
            </div>
          </div>
        </Card>
      )}

      {currentStep === 4 && (
        <Card className="p-6">
          <h2 className="mb-6 text-xl font-semibold">Choose a Template</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {templates.map((template) => (
              <div
                key={template.id}
                className="cursor-pointer rounded-lg border-2 border-transparent p-4 transition-all hover:border-primary hover:shadow-card"
              >
                <div className="mb-3 aspect-[3/4] rounded-md bg-gradient-hero" />
                <h3 className="font-semibold">{template.name}</h3>
                <p className="text-sm text-muted-foreground">{template.preview}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <div className="flex gap-3">
          {currentStep < 4 ? (
            <Button onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}>
              Next Step
            </Button>
          ) : (
            <>
              <Button variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
