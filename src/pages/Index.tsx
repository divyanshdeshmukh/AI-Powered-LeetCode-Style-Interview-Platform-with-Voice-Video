
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Monitor, MessageSquare, Award } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const startInterview = () => {
    navigate('/interview');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-interview-gray-light dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Monitor className="h-6 w-6 text-interview-blue" />
            <span className="text-xl font-bold">InterviewSim</span>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>Dashboard</Button>
            <Button variant="ghost" onClick={() => navigate('/settings')}>Settings</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Ace Your <span className="text-interview-blue">Technical Interviews</span> with AI
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Practice coding interviews with our AI interviewer. Get real-time feedback, improve your skills, and build confidence for your next tech interview.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-interview-blue hover:bg-interview-blue-dark text-white"
              onClick={startInterview}
            >
              Start Interview
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/dashboard')}
            >
              View Dashboard
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <FeatureCard 
            icon={<Monitor className="h-8 w-8 text-interview-blue" />}
            title="Real Interview Experience"
            description="Simulates a real video interview environment with AI interviewer feedback"
          />
          <FeatureCard 
            icon={<Code className="h-8 w-8 text-interview-blue" />}
            title="Live Coding Environment"
            description="Solve algorithms and data structure problems in our integrated code editor"
          />
          <FeatureCard 
            icon={<MessageSquare className="h-8 w-8 text-interview-blue" />}
            title="Voice Interaction"
            description="Explain your approach verbally and get AI feedback on your communication"
          />
          <FeatureCard 
            icon={<Award className="h-8 w-8 text-interview-blue" />}
            title="Performance Analytics"
            description="Track your progress and identify areas for improvement"
          />
        </div>
      </main>

      <footer className="container mx-auto py-6 text-center text-gray-500 dark:text-gray-400">
        <p>© 2023 InterviewSim | AI-Powered Interview Practice</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;
