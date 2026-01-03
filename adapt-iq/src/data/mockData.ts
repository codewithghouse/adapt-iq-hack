// Mock data for AdaptIQ platform

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'expert';
  avatar?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: string;
}

export interface LearningGoal {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WeeklyTask {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'learning' | 'practice' | 'rest' | 'review';
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

export interface RoadmapMilestone {
  id: string;
  title: string;
  description: string;
  week: number;
  status: 'completed' | 'current' | 'upcoming';
  skills: string[];
}

export interface StudentProfile {
  user: User;
  skills: Skill[];
  goal: LearningGoal;
  weeklyHours: number;
  stressLevel: number; // 1-5
  energyLevel: number; // 1-5
  adaptiqScore: number;
  streak: number;
}

export interface ExpertStudent {
  id: string;
  name: string;
  goal: string;
  progress: number;
  stressLevel: 'healthy' | 'moderate' | 'high';
  lastActivity: string;
  status: 'on-track' | 'needs-attention' | 'behind';
}

// Mock current user (student)
export const mockStudent: StudentProfile = {
  user: {
    id: '1',
    name: 'Alex Chen',
    email: 'alex@example.com',
    role: 'student',
  },
  skills: [
    { id: '1', name: 'Python', level: 65, category: 'Programming' },
    { id: '2', name: 'Machine Learning', level: 40, category: 'AI/ML' },
    { id: '3', name: 'Data Analysis', level: 55, category: 'Data' },
    { id: '4', name: 'SQL', level: 70, category: 'Data' },
    { id: '5', name: 'Statistics', level: 50, category: 'Math' },
  ],
  goal: {
    id: '1',
    title: 'ML Engineer',
    description: 'Become a Machine Learning Engineer',
    icon: '🤖',
  },
  weeklyHours: 15,
  stressLevel: 2,
  energyLevel: 4,
  adaptiqScore: 78,
  streak: 12,
};

// Mock learning goals
export const learningGoals: LearningGoal[] = [
  { id: '1', title: 'Land a Tech Job', description: 'Prepare for software engineering roles', icon: '💼' },
  { id: '2', title: 'Internship Ready', description: 'Build skills for summer internships', icon: '🎓' },
  { id: '3', title: 'Build Projects', description: 'Create portfolio-worthy projects', icon: '🚀' },
  { id: '4', title: 'Upskill in AI', description: 'Master AI and machine learning', icon: '🤖' },
  { id: '5', title: 'Career Switch', description: 'Transition into tech from another field', icon: '🔄' },
];

// Mock weekly tasks
export const weeklyTasks: WeeklyTask[] = [
  {
    id: '1',
    title: 'Complete Neural Networks Module',
    description: 'Finish the basics of neural networks course',
    duration: '3 hours',
    type: 'learning',
    completed: true,
    priority: 'high',
  },
  {
    id: '2',
    title: 'Practice Python Algorithms',
    description: 'Solve 5 medium-level coding problems',
    duration: '2 hours',
    type: 'practice',
    completed: true,
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Build ML Mini-Project',
    description: 'Create a simple image classifier',
    duration: '4 hours',
    type: 'practice',
    completed: false,
    priority: 'high',
  },
  {
    id: '4',
    title: 'Review Statistics Concepts',
    description: 'Refresh probability and distributions',
    duration: '1.5 hours',
    type: 'review',
    completed: false,
    priority: 'low',
  },
  {
    id: '5',
    title: 'Rest & Recharge',
    description: 'Take a break to maintain well-being',
    duration: '1 hour',
    type: 'rest',
    completed: false,
    priority: 'medium',
  },
];

// Mock roadmap
export const roadmapMilestones: RoadmapMilestone[] = [
  {
    id: '1',
    title: 'Python Foundations',
    description: 'Master Python fundamentals and data structures',
    week: 1,
    status: 'completed',
    skills: ['Python', 'Data Structures'],
  },
  {
    id: '2',
    title: 'Data Analysis Basics',
    description: 'Learn pandas, numpy, and data visualization',
    week: 3,
    status: 'completed',
    skills: ['Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    id: '3',
    title: 'Statistics & Probability',
    description: 'Build strong mathematical foundations',
    week: 5,
    status: 'current',
    skills: ['Statistics', 'Probability', 'Linear Algebra'],
  },
  {
    id: '4',
    title: 'Machine Learning Fundamentals',
    description: 'Understand core ML algorithms',
    week: 8,
    status: 'upcoming',
    skills: ['Scikit-learn', 'Regression', 'Classification'],
  },
  {
    id: '5',
    title: 'Deep Learning Introduction',
    description: 'Neural networks and deep learning basics',
    week: 11,
    status: 'upcoming',
    skills: ['TensorFlow', 'Neural Networks', 'CNNs'],
  },
  {
    id: '6',
    title: 'Portfolio Project',
    description: 'Build an end-to-end ML project',
    week: 14,
    status: 'upcoming',
    skills: ['Project Management', 'MLOps', 'Deployment'],
  },
];

// Mock expert's students
export const expertStudents: ExpertStudent[] = [
  {
    id: '1',
    name: 'Alex Chen',
    goal: 'ML Engineer',
    progress: 65,
    stressLevel: 'healthy',
    lastActivity: '2 hours ago',
    status: 'on-track',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    goal: 'Data Scientist',
    progress: 45,
    stressLevel: 'moderate',
    lastActivity: '1 day ago',
    status: 'needs-attention',
  },
  {
    id: '3',
    name: 'Michael Park',
    goal: 'Frontend Developer',
    progress: 80,
    stressLevel: 'healthy',
    lastActivity: '5 hours ago',
    status: 'on-track',
  },
  {
    id: '4',
    name: 'Emma Wilson',
    goal: 'Full Stack Developer',
    progress: 30,
    stressLevel: 'high',
    lastActivity: '3 days ago',
    status: 'behind',
  },
  {
    id: '5',
    name: 'David Kim',
    goal: 'Cloud Engineer',
    progress: 55,
    stressLevel: 'healthy',
    lastActivity: '12 hours ago',
    status: 'on-track',
  },
];

// Available skills for onboarding
export const availableSkills = [
  'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Go', 'Rust',
  'React', 'Vue', 'Angular', 'Node.js', 'Django', 'Flask', 'FastAPI',
  'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision',
  'Data Analysis', 'SQL', 'MongoDB', 'PostgreSQL',
  'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes',
  'Git', 'Linux', 'Algorithms', 'Data Structures',
  'Statistics', 'Mathematics', 'UI/UX Design', 'Product Management',
];

// Stress level emojis
export const stressEmojis = ['😌', '🙂', '😐', '😓', '😰'];
export const energyEmojis = ['😴', '🥱', '😊', '💪', '🔥'];
