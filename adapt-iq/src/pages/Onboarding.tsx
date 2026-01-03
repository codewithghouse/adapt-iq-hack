import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  ArrowRight, 
  ArrowLeft, 
  X, 
  Sparkles,
  Target,
  Clock,
  Heart
} from "lucide-react";
import { availableSkills, learningGoals, stressEmojis, energyEmojis } from "@/data/mockData";

const steps = [
  { id: 1, title: "Skills", icon: Target, description: "What do you already know?" },
  { id: 2, title: "Goals", icon: Sparkles, description: "Where do you want to go?" },
  { id: 3, title: "Time", icon: Clock, description: "How much time can you invest?" },
  { id: 4, title: "Well-being", icon: Heart, description: "How are you feeling?" },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [weeklyHours, setWeeklyHours] = useState(10);
  const [stressLevel, setStressLevel] = useState(2);
  const [energyLevel, setEnergyLevel] = useState(3);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedSkills.length > 0;
      case 2:
        return selectedGoal !== null;
      case 3:
        return weeklyHours >= 1;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Select all the skills you currently have. Don't worry about levels—we'll figure that out together.
            </p>
            <div className="flex flex-wrap gap-2 max-h-[300px] overflow-y-auto p-1">
              {availableSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedSkills.includes(skill)
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {skill}
                  {selectedSkills.includes(skill) && (
                    <X className="inline w-3 h-3 ml-2" />
                  )}
                </button>
              ))}
            </div>
            {selectedSkills.length > 0 && (
              <p className="text-sm text-primary">
                {selectedSkills.length} skills selected
              </p>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              What's your main learning goal? This helps us align your roadmap.
            </p>
            <div className="grid gap-3">
              {learningGoals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedGoal === goal.id
                      ? "border-primary bg-primary-soft"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{goal.icon}</span>
                    <div>
                      <div className={`font-medium ${selectedGoal === goal.id ? "text-primary" : "text-foreground"}`}>
                        {goal.title}
                      </div>
                      <div className="text-sm text-muted-foreground">{goal.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              How many hours per week can you dedicate to learning? Be realistic—we'll help you stay on track.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Hours per week</span>
                <span className="text-3xl font-bold text-primary">{weeklyHours}</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1 hr</span>
                <span>20 hrs</span>
                <span>40 hrs</span>
              </div>
            </div>
            <div className="bg-primary-soft rounded-xl p-4">
              <p className="text-sm text-primary">
                {weeklyHours <= 5 && "Light pace — great for busy schedules"}
                {weeklyHours > 5 && weeklyHours <= 15 && "Balanced pace — good for steady progress"}
                {weeklyHours > 15 && weeklyHours <= 25 && "Focused pace — for serious learners"}
                {weeklyHours > 25 && "Intensive pace — we'll make sure you don't burn out"}
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <p className="text-muted-foreground">
              Understanding how you feel helps us create a sustainable learning plan.
            </p>
            
            <div className="space-y-4">
              <label className="text-sm font-medium text-foreground">
                How stressed do you feel about learning right now?
              </label>
              <div className="flex justify-between gap-2">
                {stressEmojis.map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => setStressLevel(index)}
                    className={`w-14 h-14 text-2xl rounded-xl transition-all ${
                      stressLevel === index
                        ? "bg-primary-soft scale-110 shadow-soft"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Relaxed</span>
                <span>Very stressed</span>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-foreground">
                What's your energy level for learning?
              </label>
              <div className="flex justify-between gap-2">
                {energyEmojis.map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => setEnergyLevel(index)}
                    className={`w-14 h-14 text-2xl rounded-xl transition-all ${
                      energyLevel === index
                        ? "bg-primary-soft scale-110 shadow-soft"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low energy</span>
                <span>High energy</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">AdaptIQ</span>
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Exit
          </button>
        </div>
      </header>

      {/* Progress */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentStep >= step.id
                      ? "gradient-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 sm:w-24 h-1 mx-2 rounded-full transition-all ${
                      currentStep > step.id ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 container mx-auto px-4 pb-8">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {steps[currentStep - 1].description}
                </h2>
              </div>
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button
              variant={currentStep === 4 ? "hero" : "default"}
              onClick={handleNext}
              disabled={!canProceed()}
              className="gap-2"
            >
              {currentStep === 4 ? (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate My AdaptIQ Plan
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
