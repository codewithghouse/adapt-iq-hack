import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle,
  Sparkles,
  MessageSquare,
  ThumbsUp,
  Edit3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { expertStudents, roadmapMilestones } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";

export default function ExpertReview() {
  const { studentId } = useParams();
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const student = expertStudents.find((s) => s.id === studentId) || expertStudents[0];

  const handleApprove = () => {
    toast({
      title: "Plan Approved!",
      description: `AI-generated plan for ${student.name} has been approved.`,
    });
    setSubmitted(true);
  };

  const handleSuggestChanges = () => {
    if (!feedback.trim()) {
      toast({
        title: "Feedback required",
        description: "Please add your feedback before suggesting changes.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Feedback Submitted",
      description: "Your suggestions have been sent for plan revision.",
    });
    setSubmitted(true);
  };

  return (
    <DashboardLayout role="expert" userName="Dr. Sarah Mitchell">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Back Button */}
        <Link
          to="/expert"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Student Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl p-6 shadow-card border border-border"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xl font-semibold">
              {student.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{student.name}</h1>
              <p className="text-muted-foreground">Goal: {student.goal}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Progress:</span>
                  <span className="text-sm font-medium text-primary">{student.progress}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    student.status === "on-track" 
                      ? "bg-success-soft text-success"
                      : student.status === "needs-attention"
                      ? "bg-warning-soft text-warning"
                      : "bg-destructive/10 text-destructive"
                  }`}>
                    {student.status.replace("-", " ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Generated Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-2xl p-6 shadow-card border border-border"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg gradient-ai flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-energy-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">AI-Generated Roadmap</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-energy-soft text-energy ml-2">
              Pending Review
            </span>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-4">
              {roadmapMilestones.slice(0, 4).map((milestone) => (
                <div key={milestone.id} className="relative pl-12">
                  <div
                    className={`absolute left-2 w-5 h-5 rounded-full border-4 ${
                      milestone.status === "completed"
                        ? "bg-success border-success-soft"
                        : milestone.status === "current"
                        ? "bg-primary border-primary-soft"
                        : "bg-muted border-background"
                    }`}
                  ></div>

                  <div className="p-4 rounded-xl bg-background border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-foreground">{milestone.title}</h3>
                      <span className="text-xs text-muted-foreground">Week {milestone.week}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{milestone.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {milestone.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="mt-6 p-4 rounded-xl bg-energy-soft border border-energy/20">
            <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-energy" />
              AI Recommendations
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Strong foundation in Python - ready for advanced topics</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                <span>Statistics module may need more time based on current progress</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Stress levels healthy - can maintain current pace</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Expert Feedback */}
        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground">Your Feedback</h2>
            </div>

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Add your expert feedback, suggestions, or additional guidance for this student..."
              className="w-full h-32 p-4 rounded-xl bg-background border border-input focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
            />

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button variant="hero" onClick={handleApprove} className="flex-1 gap-2">
                <ThumbsUp className="w-4 h-4" />
                Approve Plan
              </Button>
              <Button variant="outline" onClick={handleSuggestChanges} className="flex-1 gap-2">
                <Edit3 className="w-4 h-4" />
                Suggest Changes
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-success-soft rounded-2xl p-6 border border-success/20"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-success" />
              <div>
                <h2 className="font-semibold text-foreground">Review Submitted!</h2>
                <p className="text-sm text-muted-foreground">
                  Your feedback has been saved and the student will be notified.
                </p>
              </div>
            </div>
            <Button variant="soft" className="mt-4" asChild>
              <Link to="/expert">Back to Dashboard</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
