import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  TrendingDown,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockStudent, stressEmojis, weeklyTasks } from "@/data/mockData";

export default function WeeklyAdaptation() {
  const [progressPercent, setProgressPercent] = useState(65);
  const [stressLevel, setStressLevel] = useState(2);
  const [blockers, setBlockers] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const completedTasks = weeklyTasks.filter((t) => t.completed).length;

  return (
    <DashboardLayout role="student" userName={mockStudent.user.name}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Weekly Check-in
          </h1>
          <p className="text-muted-foreground mt-1">
            Tell us how your week went so we can adapt your plan
          </p>
        </motion.div>

        {!submitted ? (
          <>
            {/* Progress Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">
                How much did you complete?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Completion</span>
                  <span className="text-2xl font-bold text-primary">{progressPercent}%</span>
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progressPercent}
                  onChange={(e) => setProgressPercent(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
                />
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>

                <div className="bg-muted/50 rounded-xl p-4 mt-4">
                  <p className="text-sm text-muted-foreground">
                    You completed <span className="font-medium text-foreground">{completedTasks} of {weeklyTasks.length}</span> tasks this week
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stress Level */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">
                How are you feeling?
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between gap-2">
                  {stressEmojis.map((emoji, index) => (
                    <button
                      key={index}
                      onClick={() => setStressLevel(index)}
                      className={`flex-1 py-4 text-3xl rounded-xl transition-all ${
                        stressLevel === index
                          ? "bg-primary-soft scale-105 shadow-soft"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Very relaxed</span>
                  <span>Very stressed</span>
                </div>
              </div>
            </motion.div>

            {/* Blockers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Any blockers or challenges?
              </h2>
              
              <textarea
                value={blockers}
                onChange={(e) => setBlockers(e.target.value)}
                placeholder="Tell us what got in your way this week (optional)"
                className="w-full h-32 p-4 rounded-xl bg-background border border-input focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-end"
            >
              <Button variant="hero" size="lg" onClick={handleSubmit} className="gap-2">
                <RefreshCw className="w-4 h-4" />
                Update My Plan
              </Button>
            </motion.div>
          </>
        ) : (
          /* AI Adaptation Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Success Message */}
            <div className="bg-success-soft rounded-2xl p-6 border border-success/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Plan Updated!</h2>
                  <p className="text-sm text-muted-foreground">Your AdaptIQ plan has been adjusted</p>
                </div>
              </div>
            </div>

            {/* What Changed */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg gradient-ai flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-energy-foreground" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">What Changed This Week</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-success-soft border border-success/20">
                  <TrendingUp className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground">Great progress on Python!</h3>
                    <p className="text-sm text-muted-foreground">
                      You're ahead of schedule. We've added an optional advanced module.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-warning-soft border border-warning/20">
                  <AlertCircle className="w-5 h-5 text-warning mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground">Adjusted ML project timeline</h3>
                    <p className="text-sm text-muted-foreground">
                      Based on your feedback, we've extended the deadline by 3 days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-primary-soft border border-primary/20">
                  <RefreshCw className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground">Workload optimized</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduced daily tasks from 3 to 2 to maintain your well-being.
                    </p>
                  </div>
                </div>

                {stressLevel >= 3 && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-energy-soft border border-energy/20">
                    <TrendingDown className="w-5 h-5 text-energy mt-0.5" />
                    <div>
                      <h3 className="font-medium text-foreground">Stress detected</h3>
                      <p className="text-sm text-muted-foreground">
                        We've added more rest breaks and reduced intensity this week.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Next Week Preview */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4">Next Week's Focus</h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary-soft flex items-center justify-center text-sm font-medium text-primary">
                    1
                  </div>
                  <span className="text-foreground">Complete Statistics Module (3 hours)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary-soft flex items-center justify-center text-sm font-medium text-primary">
                    2
                  </div>
                  <span className="text-foreground">Finish ML Mini-Project (4 hours)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary-soft flex items-center justify-center text-sm font-medium text-primary">
                    3
                  </div>
                  <span className="text-foreground">Practice Problems + Rest (2 hours)</span>
                </div>
              </div>

              <Button variant="soft" className="w-full mt-4 gap-2" onClick={() => setSubmitted(false)}>
                <ArrowRight className="w-4 h-4" />
                Back to Dashboard
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
