
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
import { Calendar, Clock, Code, ThumbsUp, Award, Play } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3 px-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">Your Dashboard</h1>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={() => navigate('/settings')}
            >
              Settings
            </Button>
            <Button 
              className="bg-interview-blue hover:bg-interview-blue-dark"
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
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-interview-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Sessions</p>
                  <h3 className="text-2xl font-bold">9</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Practice Time</p>
                  <h3 className="text-2xl font-bold">3.5 hrs</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Problems Solved</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full mr-4">
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
          <TabsList className="mb-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="history">Interview History</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Bar dataKey="score" fill="#2563EB" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
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
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Past Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
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
                        <tr key={interview.id} className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4">{interview.date}</td>
                          <td className="py-3 px-4">{interview.problem}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              interview.difficulty === 'easy' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                : interview.difficulty === 'medium'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                            }`}>
                              {interview.difficulty.charAt(0).toUpperCase() + interview.difficulty.slice(1)}
                            </span>
                          </td>
                          <td className="py-3 px-4">{interview.duration} min</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    interview.score >= 90 ? 'bg-green-500' :
                                    interview.score >= 75 ? 'bg-blue-500' :
                                    'bg-yellow-500'
                                  }`}
                                  style={{ width: `${interview.score}%` }}
                                />
                              </div>
                              <span>{interview.score}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
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
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Progress Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis domain={[50, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#2563EB" 
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
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Recommended Practice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold mb-2">Edge Case Handling</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Based on your performance, focus on improving your edge case handling skills.
                </p>
                <Button variant="outline" size="sm" className="w-full">Practice Now</Button>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold mb-2">Time Complexity</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Work on optimizing your solutions for better time complexity.
                </p>
                <Button variant="outline" size="sm" className="w-full">Practice Now</Button>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold mb-2">Hard Problems</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Challenge yourself with more difficult problems to advance your skills.
                </p>
                <Button variant="outline" size="sm" className="w-full">Practice Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DashboardPage;
