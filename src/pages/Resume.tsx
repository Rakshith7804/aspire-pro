import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Download,
  Sparkles,
  XCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Resume() {
  const { toast } = useToast();
  const [atsScore, setAtsScore] = useState(82);
  const [hasResume, setHasResume] = useState(true);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setHasResume(true);
      toast({
        title: "Resume uploaded successfully!",
        description: "Analyzing your resume...",
      });
      setTimeout(() => {
        toast({
          title: "Analysis complete!",
          description: `Your ATS score is ${atsScore}/100`,
        });
      }, 2000);
    }
  };

  const strengths = [
    "Clear professional summary",
    "Quantified achievements",
    "Relevant keywords present",
    "Clean formatting",
  ];

  const improvements = [
    { text: "Add more action verbs", priority: "high" },
    { text: "Include technical skills section", priority: "high" },
    { text: "Optimize for ATS keywords", priority: "medium" },
    { text: "Add LinkedIn profile link", priority: "low" },
  ];

  const missingKeywords = [
    "React", "TypeScript", "REST API", "Agile", "Git", "CI/CD"
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-3xl font-bold">Resume Lab</h1>
        <p className="text-muted-foreground">
          Upload your resume and get AI-powered insights to improve your ATS score
        </p>
      </div>

      {/* Upload Section */}
      <Card className="p-8">
        <div className="flex flex-col items-center justify-center text-center">
          {!hasResume ? (
            <>
              <div className="mb-4 rounded-full bg-primary-light p-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Upload Your Resume</h3>
              <p className="mb-6 text-muted-foreground">
                Supports PDF, DOCX formats (Max 5MB)
              </p>
              <label htmlFor="resume-upload">
                <Button asChild>
                  <span className="cursor-pointer">
                    <Upload className="mr-2 h-4 w-4" />
                    Choose File
                  </span>
                </Button>
              </label>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={handleFileUpload}
              />
            </>
          ) : (
            <div className="w-full">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary-light p-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">resume_john_doe.pdf</h3>
                    <p className="text-sm text-muted-foreground">Uploaded 2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <label htmlFor="resume-reupload">
                    <Button variant="outline" size="sm" asChild>
                      <span className="cursor-pointer">
                        <Upload className="mr-2 h-4 w-4" />
                        Replace
                      </span>
                    </Button>
                  </label>
                  <input
                    id="resume-reupload"
                    type="file"
                    accept=".pdf,.docx"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      {hasResume && (
        <>
          {/* ATS Score Card */}
          <Card className="overflow-hidden p-6 shadow-elegant">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <h2 className="text-2xl font-bold">ATS Compatibility Score</h2>
                  {atsScore >= 80 ? (
                    <CheckCircle2 className="h-6 w-6 text-success" />
                  ) : (
                    <AlertCircle className="h-6 w-6 text-warning" />
                  )}
                </div>
                <p className="mb-6 text-muted-foreground">
                  Your resume's compatibility with Applicant Tracking Systems
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold">{atsScore}</span>
                  <span className="text-2xl text-muted-foreground">/100</span>
                </div>
                <Progress value={atsScore} className="mt-4 h-3" />
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-muted-foreground">
                    {atsScore >= 80 ? "Excellent" : atsScore >= 60 ? "Good" : "Needs Improvement"}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center rounded-lg bg-gradient-hero p-6">
                <div className="text-center">
                  <Sparkles className="mx-auto mb-3 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold">AI-Powered Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    We've analyzed your resume against 500+ job postings to provide personalized recommendations
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Analysis Tabs */}
          <Tabs defaultValue="strengths" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="strengths">Strengths</TabsTrigger>
              <TabsTrigger value="improvements">Improvements</TabsTrigger>
              <TabsTrigger value="keywords">Missing Keywords</TabsTrigger>
            </TabsList>

            <TabsContent value="strengths" className="mt-6">
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-semibold">What's Working Well</h3>
                <div className="space-y-3">
                  {strengths.map((strength, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="improvements" className="mt-6">
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Suggested Improvements</h3>
                <div className="space-y-4">
                  {improvements.map((improvement, idx) => (
                    <div key={idx} className="flex items-start justify-between rounded-lg border p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-warning" />
                        <span>{improvement.text}</span>
                      </div>
                      <Badge
                        variant={improvement.priority === "high" ? "default" : "secondary"}
                        className={improvement.priority === "high" ? "bg-warning" : ""}
                      >
                        {improvement.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button className="mt-6 w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Apply AI Suggestions
                </Button>
              </Card>
            </TabsContent>

            <TabsContent value="keywords" className="mt-6">
              <Card className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Missing Keywords</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  These keywords appear frequently in matching job postings but are missing from your resume
                </p>
                <div className="flex flex-wrap gap-2">
                  {missingKeywords.map((keyword, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm">
                      <XCircle className="mr-1 h-3 w-3" />
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="mt-6 w-full">
                  Optimize Keywords
                </Button>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1" size="lg">
              <Sparkles className="mr-2 h-5 w-5" />
              AI Rewrite Resume
            </Button>
            <Button variant="outline" className="flex-1" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Export Optimized Version
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
