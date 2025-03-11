
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { Calendar, Clock, Code, ThumbsUp, Award, Play, ArrowLeft, Home } from 'lucide-react';

// Sample data for dashboard
const pastInterviews = [
  { id: 1, date: '2023-05-15', problem: 'Two Sum', difficulty: 'easy', duration: 28, score: 92 },
  { id: 2, date: '2023-05-18', problem: 'Valid Parentheses', difficulty: 'easy', duration: 22, score: 85 },
  { id: 3, date: '2023-05-25', problem: 'Merge Sorted Lists', difficulty: 'medium', duration: 35, score: 78 },
];

const performanceData = [
  { name: 'Problem Solving', score: 82 },
  { name: 'Code Quality', score: 78 },
  { name: 'Communication', score: 90 },
  { name: 'Edge Cases', score: 65 },
  { name: 'Time Complexity', score: 72 },
];

const difficultyData = [
  { name: 'Easy', value: 5 },
  { name: 'Medium', value: 3 },
  { name: 'Hard', value: 1 },
];

const COLORS = ['#4ade80', '#facc15', '#f87171'];

const progressData = [
  { day: 'Day 1', score: 65 },
  { day: 'Day 3', score: 72 },
  { day: 'Day 7', score: 78 },
  { day: 'Day 14', score: 82 },
  { day: 'Day 21', score: 85 },
  { day: 'Day 30', score: 90 },
];

const DashboardPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/70 to-blue-50/70 dark:from-gray-900/90 dark:to-blue-900/90 backdrop-blur-md">
      <header className="bg-white/20 dark:bg-gray-800/20 border-b border-gray-200/30 dark:border-gray-700/30 py-3 px-4 backdrop-blur-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full mr-2 hover:bg-white/10"
              onClick={() => navigate(-1)}
              title="Go Back"
            >
              <ArrowLeft size={18} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full mr-4 hover:bg-white/10"
              onClick={() => navigate('/')}
              title="Home"
            >
              <Home size={18} />
            </Button>
            <h1 className="text-xl font-bold">Your Dashboard</h1>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={() => navigate('/settings')}
              className="bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-md"
            >
              Settings
            </Button>
            <Button 
              className="bg-interview-blue/80 hover:bg-interview-blue-dark/80 backdrop-blur-md"
              onClick={() => navigate('/interview')}
            >
              New Interview
            </Button>
          </div>
        </div>
      </header>
      
      <main className="p-4 max-w-7xl mx-auto">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/20 backdrop-blur-md shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-blue-100/70 dark:bg-blue-900/70 p-3 rounded-full mr-4 backdrop-blur-sm">
                  <Calendar className="h-6 w-6 text-interview-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Sessions</p>
                  <h3 className="text-2xl font-bold">9</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/20 backdrop-blur-md shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-green-100/70 dark:bg-green-900/70 p-3 rounded-full mr-4 backdrop-blur-sm">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Practice Time</p>
                  <h3 className="text-2xl font-bold">3.5 hrs</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/20 backdrop-blur-md shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-purple-100/70 dark:bg-purple-900/70 p-3 rounded-full mr-4 backdrop-blur-sm">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Problems Solved</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/20 backdrop-blur-md shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-amber-100/70 dark:bg-amber-900/70 p-3 rounded-full mr-4 backdrop-blur-sm">
                  <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Average Score</p>
                  <h3 className="text-2xl font-bold">85%</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Charts */}
        <Tabs defaultValue="performance" className="mb-6">
          <TabsList className="mb-4 bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/20 backdrop-blur-md">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="history">Interview History</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/20 backdrop-blur-md shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Performance by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="name" tick={{fill: 'currentColor'}} />
                        <YAxis domain={[0, 100]} tick={{fill: 'currentColor'}} />
                        <Tooltip contentStyle={{backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)'}} />
                        <Bar dataKey="score" fill="rgba(37, 99, 235, 0.8)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/20 backdrop-blur-md shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Problems by Difficulty</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={difficultyData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          label={(entry) => entry.name}
                        >
                          {difficultyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`${COLORS[index % COLORS.length]}CC`} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)'}} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <Card className="bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/20 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Past Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-white/10 dark:bg-gray-800/30">
                        <th className="py-3 px-4 text-left">Date</th>
                        <th className="py-3 px-4 text-left">Problem</th>
                        <th className="py-3 px-4 text-left">Difficulty</th>
                        <th className="py-3 px-4 text-left">Duration</th>
                        <th className="py-3 px-4 text-left">Score</th>
                        <th className="py-3 px-4 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pastInterviews.map((interview) => (
                        <tr key={interview.id} className="border-b border-gray-200/20 dark:border-gray-700/20">
                          <td className="py-3 px-4">{interview.date}</td>
                          <td className="py-3 px-4">{interview.problem}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              interview.difficulty === 'easy' 
                                ? 'bg-green-100/70 text-green-800 dark:bg-green-900/70 dark:text-green-300'
                                : interview.difficulty === 'medium'
                                ? 'bg-yellow-100/70 text-yellow-800 dark:bg-yellow-900/70 dark:text-yellow-300'
                                : 'bg-red-100/70 text-red-800 dark:bg-red-900/70 dark:text-red-300'
                            } backdrop-blur-sm`}>
                              {interview.difficulty.charAt(0).toUpperCase() + interview.difficulty.slice(1)}
                            </span>
                          </td>
                          <td className="py-3 px-4">{interview.duration} min</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 mr-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    interview.score >= 90 ? 'bg-green-500/80' :
                                    interview.score >= 75 ? 'bg-blue-500/80' :
                                    'bg-yellow-500/80'
                                  }`}
                                  style={{ width: `${interview.score}%` }}
                                />
                              </div>
                              <span>{interview.score}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm" className="hover:bg-white/10">
                              <Play size={16} className="mr-1" /> Replay
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="progress">
            <Card className="bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/20 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Your Progress Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="day" tick={{fill: 'currentColor'}} />
                      <YAxis domain={[50, 100]} tick={{fill: 'currentColor'}} />
                      <Tooltip contentStyle={{backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)'}} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="rgba(37, 99, 235, 0.8)" 
                        activeDot={{ r: 8 }} 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Recommendations */}
        <Card className="mb-6 bg-white/20 dark:bg-gray-800/20 border-white/20 dark:border-gray-700/20 backdrop-blur-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Recommended Practice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 dark:bg-gray-800/10 rounded-lg p-4 border border-white/20 dark:border-gray-700/20 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Edge Case Handling</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Based on your performance, focus on improving your edge case handling skills.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-white/10 hover:bg-white/20 border-white/20">Practice Now</Button>
              </div>
              
              <div className="bg-white/10 dark:bg-gray-800/10 rounded-lg p-4 border border-white/20 dark:border-gray-700/20 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Time Complexity</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Work on optimizing your solutions for better time complexity.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-white/10 hover:bg-white/20 border-white/20">Practice Now</Button>
              </div>
              
              <div className="bg-white/10 dark:bg-gray-800/10 rounded-lg p-4 border border-white/20 dark:border-gray-700/20 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Hard Problems</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Challenge yourself with more difficult problems to advance your skills.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-white/10 hover:bg-white/20 border-white/20">Practice Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DashboardPage;
