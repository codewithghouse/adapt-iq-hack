import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  TrendingUp, 
  Flame, 
  CheckCircle2, 
  Circle,
  ArrowRight,
  Brain,
  Sparkles,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mockStudent, weeklyTasks, roadmapMilestones } from "@/data/mockData";

export default function StudentDashboard() {
  const completedTasks = weeklyTasks.filter((t) => t.completed).length;
  const totalTasks = weeklyTasks.length;
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <DashboardLayout role="student" userName={mockStudent.user.name}>
      <div className="space-y-6">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Welcome back, {mockStudent.user.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's your learning progress this week
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-5 shadow-card border border-border"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">AdaptIQ Score</span>
              <div className="w-8 h-8 rounded-lg bg-primary-soft flex items-center justify-center">
                <Brain className="w-4 h-4 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground">{mockStudent.adaptiqScore}</div>
            <div className="flex items-center gap-1 text-sm text-success mt-1">
              <TrendingUp className="w-4 h-4" />
              <span>+5 this week</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card rounded-2xl p-5 shadow-card border border-border"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Current Streak</span>
              <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center">
                <Flame className="w-4 h-4 text-accent" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground">{mockStudent.streak} days</div>
            <div className="text-sm text-muted-foreground mt-1">Keep it going!</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-5 shadow-card border border-border"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Weekly Progress</span>
              <div className="w-8 h-8 rounded-lg bg-success-soft flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-success" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground">{progressPercentage}%</div>
            <div className="text-sm text-muted-foreground mt-1">
              {completedTasks} of {totalTasks} tasks done
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-card rounded-2xl p-5 shadow-card border border-border"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Well-being</span>
              <div className="w-8 h-8 rounded-lg bg-energy-soft flex items-center justify-center">
                <Heart className="w-4 h-4 text-energy" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">😊</span>
              <span className="text-lg font-semibold text-foreground">Healthy</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">Low stress level</div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Weekly Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-card border border-border"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Weekly Focus</h2>
              <Link to="/dashboard/weekly">
                <Button variant="soft" size="sm" className="gap-1">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-3">
              {weeklyTasks.map((task, index) => (
                <div
                  key={task.id}
                  className={`p-4 rounded-xl border transition-all ${
                    task.completed
                      ? "bg-success-soft border-success/20"
                      : "bg-background border-border hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {task.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-medium ${task.completed ? "text-success" : "text-foreground"}`}>
                          {task.title}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          task.priority === "high" 
                            ? "bg-accent-soft text-accent" 
                            : task.priority === "medium"
                            ? "bg-warning-soft text-warning"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">{task.description}</div>
                      <div className="text-xs text-muted-foreground mt-2">{task.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-ai flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-energy-foreground" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">AI Insights</h2>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-success-soft">
                <p className="text-sm text-success">
                  ✓ You're ahead on Python practice. Great job!
                </p>
              </div>
              <div className="p-3 rounded-lg bg-primary-soft">
                <p className="text-sm text-primary">
                  → Focus on ML project this week for best progress
                </p>
              </div>
              <div className="p-3 rounded-lg bg-energy-soft">
                <p className="text-sm text-energy">
                  💡 Your optimal learning time seems to be mornings
                </p>
              </div>
            </div>

            <Button variant="ai" className="w-full mt-4" asChild>
              <Link to="/dashboard/weekly">
                Update Weekly Progress
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Roadmap Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card rounded-2xl p-6 shadow-card border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Your Learning Roadmap</h2>
            <span className="text-sm text-muted-foreground">
              Goal: {mockStudent.goal.icon} {mockStudent.goal.title}
            </span>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-6">
              {roadmapMilestones.map((milestone) => (
                <div key={milestone.id} className="relative pl-12">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 w-5 h-5 rounded-full border-4 ${
                      milestone.status === "completed"
                        ? "bg-success border-success-soft"
                        : milestone.status === "current"
                        ? "bg-primary border-primary-soft animate-pulse"
                        : "bg-muted border-background"
                    }`}
                  ></div>

                  <div
                    className={`p-4 rounded-xl border ${
                      milestone.status === "current"
                        ? "bg-primary-soft border-primary/20"
                        : "bg-background border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`font-medium ${
                          milestone.status === "completed"
                            ? "text-success"
                            : milestone.status === "current"
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {milestone.title}
                      </h3>
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
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
