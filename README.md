# 📚 TOEIC Learning App

A comprehensive mobile application for TOEIC test preparation, built with React Native and Expo. This app provides an all-in-one platform for students to practice listening, reading, vocabulary, grammar, and track their learning progress with AI-powered study plans.

## ✨ Features

### 🎯 Core Learning Modules

- **Listening Practice**
  - Part 1, 2, 3 exercises with audio playback
  - Dictation practice
  - Listening history tracking
  - Tips and strategies

- **Reading Comprehension**
  - Part 5 exercises
  - Skim & Scan practice
  - Grammar-focused reading
  - Result tracking and analysis

- **Vocabulary Building**
  - Word of the Day
  - Topic-based vocabulary
  - Flashcards system
  - Spaced repetition learning
  - Pronunciation practice
  - Interactive vocabulary games
  - Personal word lists
  - Vocabulary quizzes

- **Grammar Mastery**
  - Structured grammar lessons
  - Grammar comparison tools
  - Common mistakes analysis
  - Practice exercises

### 🤖 AI-Powered Study Planning

- **Smart Study Plan Generator**
  - Personalized plans based on target score (600+, 700+, 800+, 900+)
  - Customizable study duration (1-6 months)
  - Daily study time options (30 min, 1 hour, 2 hours, 3+ hours)
  - Focus area selection (Listening, Reading, Grammar, Vocabulary)
  - AI-generated daily schedules using Groq LLM

- **Study Plan Management**
  - Daily schedule view
  - Weekly plan overview
  - Goal setting and tracking
  - Milestone achievements
  - Study reminders

### 📝 Testing & Assessment

- **Practice Tests**
  - Full-length TOEIC tests
  - Mini tests for quick practice
  - Test progress tracking
  - Detailed result summaries

### 🏆 Gamification & Motivation

- **Achievements System**
  - Badges and rewards
  - Daily challenges
  - Streak tracking
  - Achievement store

### 👥 Community Features

- **Social Learning**
  - Community forum
  - Study groups
  - Post creation and sharing
  - Chat functionality
  - Ranking system

### 📱 User Management

- **Profile & Settings**
  - User authentication (login/register)
  - Profile editing
  - Notification preferences
  - Subscription management
  - App settings

### 📚 Resources

- **Learning Materials**
  - Video tutorials
  - Downloadable resources
  - Study tips and strategies
  - Daily tasks

## 🛠️ Tech Stack

- **Frontend Framework**: React Native 0.81.5
- **Development Platform**: Expo ~54.0
- **Navigation**: React Navigation 7.x
- **Backend**: Supabase (PostgreSQL)
- **AI Integration**: Groq API (LLaMA 3.3 70B)
- **State Management**: React Hooks
- **Storage**: AsyncStorage, Expo FileSystem
- **Audio**: Expo AV, Expo Audio
- **UI Components**: Custom components with Lucide icons
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator
- Supabase account
- Groq API account

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/anh1704/toeic-learning-app.git
cd toeic-learning-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file and configure your keys:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# Groq API Key for AI study plan generation
EXPO_PUBLIC_GROQ_API_KEY=your_groq_api_key_here

# Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url_here
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

**Getting API Keys:**

- **Groq API**: Sign up at [console.groq.com](https://console.groq.com/) and create an API key
- **Supabase**: Create a project at [supabase.com](https://supabase.com/) and get your URL and anon key from Settings > API

### 4. Database Setup

Run the database migration in your Supabase SQL Editor:

1. Open your Supabase Dashboard
2. Navigate to SQL Editor
3. Copy the contents of `supabase_migration.sql`
4. Execute the migration

This will:
- Set up the `study_plans` table
- Create the `daily_schedules` table
- Configure Row Level Security policies
- Add necessary indexes

### 5. Start the development server

```bash
npm start
```

Then:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app on your phone

## 📁 Project Structure

```
toeic-learning-app/
├── src/
│   ├── lib/                    # Service layer & utilities
│   │   ├── supabase.ts        # Supabase client
│   │   ├── authService.ts     # Authentication
│   │   ├── studyPlanService.ts # Study plan management
│   │   ├── vocabularyService.ts
│   │   ├── listeningService.ts
│   │   └── ...
│   └── screens/               # Screen components
│       ├── Home/
│       ├── StudyPlan/
│       ├── Vocabulary/
│       ├── Listening/
│       ├── Reading/
│       ├── Grammar/
│       ├── Community/
│       └── ...
├── App.tsx                    # Main app component
├── .env.example              # Environment template
├── supabase_migration.sql    # Database schema
├── SETUP.md                  # Detailed setup guide
└── package.json
```

## 🔐 Security Notes

⚠️ **Important**: Never commit your `.env` file to version control!

- The `.env` file contains sensitive API keys
- Always use `.env.example` as a template
- Keep your actual credentials in `.env` (which is gitignored)
- Rotate your API keys if they are accidentally exposed

## 🎨 Key Features Implementation

### AI Study Plan Generation

The app uses Groq's LLaMA 3.3 70B model to generate personalized daily study schedules:

- Analyzes user's target score, available time, and focus areas
- Creates balanced daily schedules with appropriate time allocation
- Generates 3-8 study activities per day based on total study time
- Stores plans in Supabase for cross-device sync

### Database Architecture

- **study_plans**: Stores user study plan settings
- **daily_schedules**: Stores generated daily schedules with items
- Row Level Security ensures users only access their own data
- Efficient indexing for fast queries



