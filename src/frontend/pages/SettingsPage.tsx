
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from 'lucide-react';
import { useSettings } from '@/frontend/contexts/SettingsContext';

const SettingsPage = () => {
  const { 
    darkMode, 
    aiDifficulty, 
    speechToText, 
    textToSpeech, 
    toggleDarkMode, 
    setAiDifficulty, 
    toggleSpeechToText, 
    toggleTextToSpeech 
  } = useSettings();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-gray-400">Customize your interview experience</p>
          </div>
        </header>
        
        <div className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription className="text-gray-400">Customize how the application looks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <Switch 
                  id="dark-mode" 
                  checked={darkMode} 
                  onCheckedChange={toggleDarkMode} 
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle>AI Interviewer</CardTitle>
              <CardDescription className="text-gray-400">Configure the AI interviewer behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Difficulty Level</Label>
                <RadioGroup defaultValue={aiDifficulty} onValueChange={(value) => setAiDifficulty(value as 'beginner' | 'intermediate' | 'advanced')}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner">Beginner</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">Intermediate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced">Advanced</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
              <CardDescription className="text-gray-400">Change accessibility settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="speech-to-text">Speech-to-Text</Label>
                <Switch 
                  id="speech-to-text" 
                  checked={speechToText} 
                  onCheckedChange={toggleSpeechToText} 
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="text-to-speech">Text-to-Speech</Label>
                <Switch 
                  id="text-to-speech" 
                  checked={textToSpeech} 
                  onCheckedChange={toggleTextToSpeech} 
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription className="text-gray-400">Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400">user@example.com</p>
                </div>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-700">
                  Change
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Password</p>
                  <p className="text-gray-400">Last changed 3 months ago</p>
                </div>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-700">
                  Change
                </Button>
              </div>
              <div className="pt-4 flex justify-end">
                <Button variant="destructive" className="bg-red-900 hover:bg-red-800">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
