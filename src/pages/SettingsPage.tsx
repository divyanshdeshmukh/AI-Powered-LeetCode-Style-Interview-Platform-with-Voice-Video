
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useSettings } from '@/contexts/SettingsContext';
import { ArrowLeft, Moon, Sun, Mic, Speaker, BrainCircuit } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
  
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3 px-4">
        <div className="flex items-center max-w-3xl mx-auto">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mr-4"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} className="mr-1" /> Back
          </Button>
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
      </header>
      
      <main className="p-4 max-w-3xl mx-auto">
        <Tabs defaultValue="general" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="interview">Interview</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Display Settings</CardTitle>
                <CardDescription>Customize your app appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {darkMode ? (
                      <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <Sun className="h-5 w-5 text-amber-500" />
                    )}
                    <div>
                      <Label htmlFor="dark-mode" className="text-base">Dark Mode</Label>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Switch between light and dark themes
                      </p>
                    </div>
                  </div>
                  <Switch 
                    id="dark-mode" 
                    checked={darkMode} 
                    onCheckedChange={toggleDarkMode} 
                  />
                </div>
                
                {/* Add more display settings here */}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="interview">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>AI Settings</CardTitle>
                <CardDescription>Customize your interview experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <BrainCircuit className="h-5 w-5 text-purple-500" />
                    <Label className="text-base">Interview Difficulty</Label>
                  </div>
                  <RadioGroup 
                    value={aiDifficulty} 
                    onValueChange={(value) => setAiDifficulty(value as 'beginner' | 'intermediate' | 'advanced')}
                    className="flex flex-col space-y-1 ml-7"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="beginner" />
                      <Label htmlFor="beginner">
                        Beginner - Introductory questions with detailed guidance
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="intermediate" />
                      <Label htmlFor="intermediate">
                        Intermediate - Standard interview questions with some hints
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advanced" id="advanced" />
                      <Label htmlFor="advanced">
                        Advanced - Challenging problems with minimal guidance
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Mic className="h-5 w-5 text-green-500" />
                    <div>
                      <Label htmlFor="speech-to-text" className="text-base">Speech Recognition</Label>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Let the AI understand your spoken explanations
                      </p>
                    </div>
                  </div>
                  <Switch 
                    id="speech-to-text" 
                    checked={speechToText} 
                    onCheckedChange={toggleSpeechToText} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Speaker className="h-5 w-5 text-blue-500" />
                    <div>
                      <Label htmlFor="text-to-speech" className="text-base">AI Voice</Label>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Enable voice responses from the AI interviewer
                      </p>
                    </div>
                  </div>
                  <Switch 
                    id="text-to-speech" 
                    checked={textToSpeech} 
                    onCheckedChange={toggleTextToSpeech} 
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your profile and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Profile Information</Label>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-interview-blue flex items-center justify-center text-white font-bold">
                        JS
                      </div>
                      <div>
                        <p className="font-medium">John Smith</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">john.smith@example.com</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-2">Edit Profile</Button>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button variant="destructive">Sign Out</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default SettingsPage;
