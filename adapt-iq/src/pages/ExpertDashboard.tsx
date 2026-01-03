import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2,
  ArrowRight,
  Clock,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { expertStudents } from "@/data/mockData";

const getStatusColor = (status: string) => {
  switch (status) {
    case "on-track":
      return "bg-success-soft text-success";
    case "needs-attention":
      return "bg-warning-soft text-warning";
    case "behind":
      return "bg-destructive/10 text-destructive";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStressIndicator = (level: string) => {
  switch (level) {
    case "healthy":
      return { emoji: "😊", color: "text-success" };
    case "moderate":
      return { emoji: "😐", color: "text-warning" };
    case "high":
      return { emoji: "😓", color: "text-destructive" };
    default:
      return { emoji: "😊", color: "text-muted-foreground" };
  }
};

export default function ExpertDashboard() {
  const onTrack = expertStudents.filter((s) => s.status === "on-track").length;
  const needsAttention = expertStudents.filter((s) => s.status === "needs-attention").length;
  const behind = expertStudents.filter((s) => s.status === "behind").length;

  return (
    <DashboardLayout role="expert" userName="Dr. Sarah Mitchell">
      <div className="space-y-6">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Expert Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor and guide your assigned students
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
              <span className="text-sm text-muted-foreground">Total Students</span>
              <div className="w-8 h-8 rounded-lg bg-primary-soft flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground">{expertStudents.length}</div>
            <div className="text-sm text-muted-foreground mt-1">Active learners</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card rounded-2xl p-5 shadow-card border border-border"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">On Track</span>
              <div className="w-8 h-8 rounded-lg bg-success-soft flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-success" />
              </div>
            </div>
            <div className="text-3xl font-bold text-success">{onTrack}</div>
            <div className="text-sm text-muted-foreground mt-1">Progressing well</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-5 shadow-card border border-border"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Needs Attention</span>
              <div className="w-8 h-8 rounded-lg bg-warning-soft flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-warning" />
              </div>
            </div>
            <div className="text-3xl font-bold text-warning">{needsAttention}</div>
            <div className="text-sm text-muted-foreground mt-1">May need support</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-card rounded-2xl p-5 shadow-card border border-border"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Behind</span>
              <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Activity className="w-4 h-4 text-destructive" />
              </div>
            </div>
            <div className="text-3xl font-bold text-destructive">{behind}</div>
            <div className="text-sm text-muted-foreground mt-1">Needs intervention</div>
          </motion.div>
        </div>

        {/* Students List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card rounded-2xl p-6 shadow-card border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Your Students</h2>
            <span className="text-sm text-muted-foreground">{expertStudents.length} total</span>
          </div>

          <div className="space-y-4">
            {expertStudents.map((student) => {
              const stressIndicator = getStressIndicator(student.stressLevel);
              
              return (
                <div
                  key={student.id}
                  className="p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {student.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{student.name}</h3>
                        <p className="text-sm text-muted-foreground">Goal: {student.goal}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      {/* Progress */}
                      <div className="hidden sm:block">
                        <div className="text-sm text-muted-foreground mb-1">Progress</div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all"
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-foreground">{student.progress}%</span>
                        </div>
                      </div>

                      {/* Stress */}
                      <div className="hidden md:block text-center">
                        <div className="text-sm text-muted-foreground mb-1">Stress</div>
                        <span className={`text-xl ${stressIndicator.color}`}>{stressIndicator.emoji}</span>
                      </div>

                      {/* Status */}
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">Status</div>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(student.status)}`}>
                          {student.status.replace("-", " ")}
                        </span>
                      </div>

                      {/* Last Activity */}
                      <div className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {student.lastActivity}
                      </div>

                      {/* Review Button */}
                      <Button variant="soft" size="sm" asChild>
                        <Link to={`/expert/review/${student.id}`} className="gap-1">
                          Review
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
