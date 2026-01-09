export interface Template {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  category: 'productivity' | 'finance' | 'business' | 'student';
  features: string[];
  image: string;
  gumroadUrl: string;
  notionPreviewUrl: string;
  popular?: boolean;
  new?: boolean;
}

export const categories = [
  { id: 'all', name: 'All Templates', icon: '📦' },
  { id: 'productivity', name: 'Productivity', icon: '⚡' },
  { id: 'finance', name: 'Finance', icon: '💰' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'student', name: 'Student', icon: '📚' },
];

export const templates: Template[] = [
  // PRODUCTIVITY TEMPLATES
  {
    id: 'ultimate-life-os',
    name: 'Ultimate Life OS',
    description: 'All-in-one life management system with goals, habits, projects & journal.',
    longDescription: 'Transform your life with this comprehensive Notion system. Track goals, build habits, manage projects, and maintain a daily journal - all in one beautiful dashboard. Includes 50+ pre-built pages and templates.',
    price: 19,
    originalPrice: 29,
    category: 'productivity',
    features: [
      'Goal setting & tracking dashboard',
      'Daily, weekly & monthly reviews',
      'Habit tracker with streaks',
      'Project management system',
      'Daily journal with prompts',
      'Reading list & notes',
      'Health & fitness tracker',
      '50+ pre-built templates'
    ],
    image: '/images/life-os.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/life-os',
    notionPreviewUrl: 'https://notion.so',
    popular: true,
  },
  {
    id: 'habit-tracker-pro',
    name: 'Habit Tracker Pro',
    description: 'Build lasting habits with visual tracking, streaks & analytics.',
    longDescription: 'Science-backed habit tracking system designed to help you build and maintain positive habits. Features streak counting, habit stacking suggestions, and monthly analytics.',
    price: 9,
    category: 'productivity',
    features: [
      'Visual habit calendar',
      'Streak tracking & rewards',
      'Habit stacking templates',
      'Weekly & monthly analytics',
      'Morning & evening routines',
      'Habit categories & tags'
    ],
    image: '/images/habit-tracker.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/habit-tracker',
    notionPreviewUrl: 'https://notion.so',
    new: true,
  },
  {
    id: 'weekly-planner',
    name: 'Weekly Planner',
    description: 'Plan your perfect week with time blocking & priority management.',
    longDescription: 'Simple yet powerful weekly planning system. Includes time blocking, priority matrix, and weekly review templates to help you stay focused on what matters.',
    price: 7,
    category: 'productivity',
    features: [
      'Weekly overview dashboard',
      'Time blocking templates',
      'Priority matrix (Eisenhower)',
      'Weekly review checklist',
      'Goal alignment tracker'
    ],
    image: '/images/weekly-planner.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/weekly-planner',
    notionPreviewUrl: 'https://notion.so',
  },

  // FINANCE TEMPLATES
  {
    id: 'personal-finance-hub',
    name: 'Personal Finance Hub',
    description: 'Complete money management with budgets, expenses & savings goals.',
    longDescription: 'Take control of your finances with this comprehensive financial dashboard. Track income, expenses, budgets, and savings goals. Includes automated calculations and visual reports.',
    price: 15,
    originalPrice: 24,
    category: 'finance',
    features: [
      'Monthly budget planner',
      'Expense tracking with categories',
      'Income tracking & analysis',
      'Savings goals tracker',
      'Net worth calculator',
      'Bill payment reminders',
      'Financial reports & charts',
      'Debt payoff tracker'
    ],
    image: '/images/finance-hub.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/finance-hub',
    notionPreviewUrl: 'https://notion.so',
    popular: true,
  },
  {
    id: 'investment-tracker',
    name: 'Investment Tracker',
    description: 'Track your portfolio, dividends & investment performance.',
    longDescription: 'Professional investment tracking system for stocks, ETFs, crypto, and more. Monitor performance, track dividends, and analyze your portfolio allocation.',
    price: 12,
    category: 'finance',
    features: [
      'Portfolio overview dashboard',
      'Stock & ETF tracking',
      'Crypto portfolio section',
      'Dividend tracker',
      'Performance analytics',
      'Investment journal'
    ],
    image: '/images/investment-tracker.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/investment-tracker',
    notionPreviewUrl: 'https://notion.so',
  },
  {
    id: 'budget-template',
    name: 'Simple Budget',
    description: 'Easy-to-use monthly budget template for beginners.',
    longDescription: 'Perfect for those just starting their budgeting journey. Simple, clean design with all the essentials to track your monthly income and expenses.',
    price: 5,
    category: 'finance',
    features: [
      'Monthly income tracker',
      'Expense categories',
      'Savings calculator',
      'Visual spending breakdown',
      'Easy setup guide'
    ],
    image: '/images/simple-budget.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/simple-budget',
    notionPreviewUrl: 'https://notion.so',
    new: true,
  },

  // BUSINESS TEMPLATES
  {
    id: 'freelancer-os',
    name: 'Freelancer OS',
    description: 'Complete freelance business management - clients, projects & invoices.',
    longDescription: 'Everything you need to run your freelance business. Manage clients, track projects, create invoices, and monitor your income - all in one organized workspace.',
    price: 24,
    originalPrice: 39,
    category: 'business',
    features: [
      'Client relationship manager (CRM)',
      'Project management board',
      'Invoice generator',
      'Time tracking integration',
      'Income & expense tracking',
      'Contract templates',
      'Proposal templates',
      'Client onboarding checklist'
    ],
    image: '/images/freelancer-os.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/freelancer-os',
    notionPreviewUrl: 'https://notion.so',
    popular: true,
  },
  {
    id: 'content-calendar',
    name: 'Content Calendar',
    description: 'Plan & schedule your content across all platforms.',
    longDescription: 'Streamline your content creation with this comprehensive content calendar. Plan posts, track performance, and manage your content pipeline for all social platforms.',
    price: 11,
    category: 'business',
    features: [
      'Multi-platform calendar view',
      'Content pipeline tracker',
      'Post ideas database',
      'Performance tracking',
      'Hashtag library',
      'Content repurposing tracker'
    ],
    image: '/images/content-calendar.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/content-calendar',
    notionPreviewUrl: 'https://notion.so',
  },
  {
    id: 'meeting-notes',
    name: 'Meeting Notes Hub',
    description: 'Organize all your meeting notes with action items & follow-ups.',
    longDescription: 'Never lose track of meeting outcomes again. This template helps you capture notes, assign action items, and track follow-ups for all your meetings.',
    price: 7,
    category: 'business',
    features: [
      'Meeting notes template',
      'Action items tracker',
      'Follow-up reminders',
      'Meeting calendar view',
      'Participant management',
      'Decision log'
    ],
    image: '/images/meeting-notes.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/meeting-notes',
    notionPreviewUrl: 'https://notion.so',
  },

  // STUDENT TEMPLATES
  {
    id: 'student-os',
    name: 'Student OS',
    description: 'Complete academic system - courses, assignments, grades & study planning.',
    longDescription: 'The ultimate academic companion for students. Manage courses, track assignments, calculate grades, and plan your study sessions - all designed for academic success.',
    price: 14,
    originalPrice: 22,
    category: 'student',
    features: [
      'Course management dashboard',
      'Assignment tracker with deadlines',
      'Grade calculator & GPA tracker',
      'Study session planner',
      'Exam preparation templates',
      'Reading list manager',
      'Note-taking system',
      'Semester overview'
    ],
    image: '/images/student-os.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/student-os',
    notionPreviewUrl: 'https://notion.so',
    popular: true,
  },
  {
    id: 'cornell-notes',
    name: 'Cornell Notes System',
    description: 'Proven note-taking method for better learning & retention.',
    longDescription: 'Implement the scientifically-proven Cornell note-taking method in Notion. Includes templates for different subjects and automatic summary generation.',
    price: 6,
    category: 'student',
    features: [
      'Cornell notes template',
      'Subject organization',
      'Summary section',
      'Review reminders',
      'Search & filter notes'
    ],
    image: '/images/cornell-notes.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/cornell-notes',
    notionPreviewUrl: 'https://notion.so',
  },
  {
    id: 'thesis-planner',
    name: 'Thesis & Research Planner',
    description: 'Organize your thesis, research papers & academic projects.',
    longDescription: 'Structured workspace for managing long-term academic projects. Perfect for thesis writing, dissertations, and research papers. Includes literature review tracker and writing progress monitoring.',
    price: 11,
    category: 'student',
    features: [
      'Thesis outline builder',
      'Literature review tracker',
      'Writing progress tracker',
      'Citation manager',
      'Research notes database',
      'Deadline countdown',
      'Supervisor meeting log'
    ],
    image: '/images/thesis-planner.png',
    gumroadUrl: 'https://notionhub.gumroad.com/l/thesis-planner',
    notionPreviewUrl: 'https://notion.so',
    new: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Freelance Designer',
    content: 'The Freelancer OS template completely transformed how I manage my business. I went from chaos to organized in one day!',
    rating: 5,
  },
  {
    id: 2,
    name: 'James K.',
    role: 'Software Engineer',
    content: 'Life OS is incredible. I\'ve tried dozens of productivity systems and this is the first one that actually stuck.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily R.',
    role: 'Graduate Student',
    content: 'The Student OS helped me improve my GPA significantly. The assignment tracker alone is worth the price.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael T.',
    role: 'Small Business Owner',
    content: 'Finally got my finances under control with the Personal Finance Hub. The visual breakdowns are so helpful!',
    rating: 5,
  },
];

export const stats = [
  { label: 'Happy Customers', value: '2,500+' },
  { label: 'Templates Sold', value: '8,000+' },
  { label: '5-Star Reviews', value: '500+' },
  { label: 'Hours Saved', value: '50,000+' },
];
