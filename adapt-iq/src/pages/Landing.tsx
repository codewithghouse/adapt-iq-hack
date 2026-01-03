import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Brain, 
  Target, 
  Heart, 
  Zap, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  Shield,
  Sparkles,
  Users
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Roadmaps",
    description: "Get personalized learning paths that adapt to your pace, goals, and available time.",
  },
  {
    icon: Heart,
    title: "Well-being First",
    description: "Balance skill growth with mental health. We track stress levels and adjust your workload.",
  },
  {
    icon: Target,
    title: "Goal Alignment",
    description: "Whether it's a job, internship, or passion project—your plan aligns with your destination.",
  },
  {
    icon: Zap,
    title: "Weekly Adaptation",
    description: "Your plan evolves every week based on progress, blockers, and how you're feeling.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Share Your Goals",
    description: "Tell us your skills, aspirations, and how much time you can dedicate.",
  },
  {
    step: "02",
    title: "Get Your Plan",
    description: "Our AI creates a personalized roadmap with weekly milestones and tasks.",
  },
  {
    step: "03",
    title: "Adapt & Grow",
    description: "Check in weekly. We adjust your plan based on progress and well-being.",
  },
];

const differentiators = [
  { icon: TrendingUp, text: "Continuous adaptation, not static plans" },
  { icon: Heart, text: "Mental well-being as a core metric" },
  { icon: Shield, text: "Expert validation of AI recommendations" },
  { icon: Sparkles, text: "Personalized pace, not one-size-fits-all" },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Powered Adaptive Learning
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Adapt to Change.{" "}
              <span className="text-primary">Grow Without Burnout.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              AdaptIQ creates personalized learning roadmaps that evolve with you—balancing skill growth with mental well-being in an AI-driven world.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup" className="gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/signup?role=expert" className="gap-2">
                  <Users className="w-5 h-5" />
                  Join as Expert
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl bg-card shadow-medium border border-border overflow-hidden">
              <div className="absolute inset-0 gradient-hero opacity-50"></div>
              <div className="relative p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Score Card */}
                  <div className="bg-background/80 backdrop-blur rounded-xl p-5 shadow-card">
                    <div className="text-sm text-muted-foreground mb-2">AdaptIQ Score</div>
                    <div className="text-4xl font-bold text-primary mb-2">78</div>
                    <div className="flex items-center gap-1 text-sm text-success">
                      <TrendingUp className="w-4 h-4" />
                      <span>+5 this week</span>
                    </div>
                  </div>
                  
                  {/* Weekly Focus */}
                  <div className="bg-background/80 backdrop-blur rounded-xl p-5 shadow-card">
                    <div className="text-sm text-muted-foreground mb-3">Weekly Focus</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span className="text-sm">Neural Networks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span className="text-sm">Python Practice</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-muted-foreground"></div>
                        <span className="text-sm text-muted-foreground">ML Project</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Well-being */}
                  <div className="bg-background/80 backdrop-blur rounded-xl p-5 shadow-card">
                    <div className="text-sm text-muted-foreground mb-3">Well-being</div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">😊</span>
                      <span className="text-sm font-medium">Healthy Balance</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-success rounded-full"></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">Stress level: Low</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The world is changing faster than ever
              </h2>
              <p className="text-lg text-muted-foreground">
                AI is reshaping industries overnight. Static curriculums can't keep up. Students feel overwhelmed trying to learn everything while battling burnout. 
                <span className="text-foreground font-medium"> There has to be a better way.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learning that adapts to <span className="text-primary">you</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AdaptIQ combines AI intelligence with human validation to create learning experiences that work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-medium transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How AdaptIQ Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to a smarter learning journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why AdaptIQ */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why AdaptIQ is different
                </h2>
                <p className="text-muted-foreground mb-8">
                  We don't just create a learning plan and leave you to it. AdaptIQ continuously evolves your journey based on real progress, real challenges, and real well-being.
                </p>
                <ul className="space-y-4">
                  {differentiators.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-soft flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-medium border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full gradient-ai flex items-center justify-center">
                    <Brain className="w-5 h-5 text-energy-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">AI Insight</div>
                    <div className="font-semibold text-foreground">Weekly Adaptation</div>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="bg-success-soft text-success p-3 rounded-lg">
                    ✓ Great progress on Python this week!
                  </div>
                  <div className="bg-warning-soft text-warning p-3 rounded-lg">
                    ⚡ Detected higher stress—reducing workload by 15%
                  </div>
                  <div className="bg-primary-soft text-primary p-3 rounded-lg">
                    → Shifting focus to practical projects next week
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to learn smarter?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join AdaptIQ today and get a personalized learning roadmap that grows with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup" className="gap-2">
                  Start Learning
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="soft" size="xl" asChild>
                <Link to="/signup?role=expert">Become an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
