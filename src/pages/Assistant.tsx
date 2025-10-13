import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, Send, FileText, Briefcase, Target, MessageSquare } from "lucide-react";

export default function Assistant() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm your AI Career Assistant. I can help you with resume improvements, job search strategies, interview prep, and career advice. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickActions = [
    { icon: FileText, label: "Review my resume", color: "text-primary" },
    { icon: Briefcase, label: "Find matching jobs", color: "text-secondary" },
    { icon: Target, label: "Suggest skills to learn", color: "text-warning" },
    { icon: MessageSquare, label: "Interview tips", color: "text-success" },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { role: "user", content: input },
      {
        role: "assistant",
        content: "I can help you with that! Let me analyze your request and provide personalized recommendations based on your profile and career goals.",
      },
    ]);
    setInput("");
  };

  const handleQuickAction = (label: string) => {
    setMessages([
      ...messages,
      { role: "user", content: label },
      {
        role: "assistant",
        content: `Great question! I'll help you with "${label}". Based on your profile and current job market trends, here are my recommendations...`,
      },
    ]);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-3xl font-bold">AI Career Assistant</h1>
        <p className="text-muted-foreground">
          Get instant AI-powered career guidance and personalized recommendations
        </p>
      </div>

      {/* Chat Interface */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Chat */}
        <Card className="lg:col-span-2 flex h-[600px] flex-col">
          {/* Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-gradient-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="mb-2 flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        <span className="text-xs font-semibold">AI Assistant</span>
                      </div>
                    )}
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask me anything about your career..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="mb-4 font-semibold">Quick Actions</h3>
            <div className="space-y-2">
              {quickActions.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={idx}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => handleQuickAction(action.label)}
                  >
                    <Icon className={`mr-2 h-4 w-4 ${action.color}`} />
                    {action.label}
                  </Button>
                );
              })}
            </div>
          </Card>

          {/* Tips */}
          <Card className="p-6">
            <h3 className="mb-4 font-semibold">Example Questions</h3>
            <div className="space-y-2">
              <Badge variant="secondary" className="w-full justify-start py-2">
                How can I improve my resume?
              </Badge>
              <Badge variant="secondary" className="w-full justify-start py-2">
                What skills should I learn next?
              </Badge>
              <Badge variant="secondary" className="w-full justify-start py-2">
                Help me prepare for interviews
              </Badge>
              <Badge variant="secondary" className="w-full justify-start py-2">
                Optimize my LinkedIn profile
              </Badge>
            </div>
          </Card>

          {/* Stats */}
          <Card className="p-6">
            <h3 className="mb-4 font-semibold">Your Progress</h3>
            <div className="space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-muted-foreground">Profile Completion</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[85%] rounded-full bg-gradient-success" />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-muted-foreground">Skills Endorsed</span>
                  <span className="font-semibold">12/15</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[80%] rounded-full bg-gradient-primary" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
