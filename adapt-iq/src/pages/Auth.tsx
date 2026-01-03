import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Mail, Lock, ArrowRight, User, GraduationCap } from "lucide-react";

type AuthMode = "login" | "signup";
type Role = "student" | "expert";

export default function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get("mode") === "login" ? "login" : "signup";
  const initialRole = searchParams.get("role") === "expert" ? "expert" : "student";
  
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [role, setRole] = useState<Role>(initialRole);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (role === "student") {
      navigate("/onboarding");
    } else {
      navigate("/expert");
    }
  };

  return (
    <div className="min-h-screen gradient-hero flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
            <Brain className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary-foreground">AdaptIQ</span>
        </Link>
        
        <div>
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            {mode === "login" ? "Welcome back" : "Start your journey"}
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            {mode === "login" 
              ? "Continue your adaptive learning journey with AdaptIQ."
              : "Join thousands of learners growing their skills without burnout."
            }
          </p>
        </div>
        
        <div className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} AdaptIQ. All rights reserved.
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AdaptIQ</span>
          </Link>

          <div className="bg-card rounded-2xl p-8 shadow-medium border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {mode === "login" ? "Sign in" : "Create account"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {mode === "login" 
                ? "Enter your credentials to continue"
                : "Fill in your details to get started"
              }
            </p>

            {/* Role Selection (Signup only) */}
            {mode === "signup" && (
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-3 block">
                  I want to join as
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole("student")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      role === "student"
                        ? "border-primary bg-primary-soft"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <GraduationCap className={`w-6 h-6 mx-auto mb-2 ${role === "student" ? "text-primary" : "text-muted-foreground"}`} />
                    <div className={`text-sm font-medium ${role === "student" ? "text-primary" : "text-foreground"}`}>
                      Student
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Learn & grow</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("expert")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      role === "expert"
                        ? "border-primary bg-primary-soft"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <User className={`w-6 h-6 mx-auto mb-2 ${role === "expert" ? "text-primary" : "text-muted-foreground"}`} />
                    <div className={`text-sm font-medium ${role === "expert" ? "text-primary" : "text-foreground"}`}>
                      Expert
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Guide others</div>
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              {mode === "login" && (
                <div className="text-right">
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {mode === "login" ? "Sign in" : "Create account"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-muted-foreground text-sm">
                {mode === "login" ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
                className="text-primary font-medium text-sm hover:underline"
              >
                {mode === "login" ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
