
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Link } from "react-router-dom";
import { useSettings } from '@/frontend/contexts/SettingsContext';

const performanceData = [
  { date: 'Mon', score: 65 },
  { date: 'Tue', score: 70 },
  { date: 'Wed', score: 68 },
  { date: 'Thu', score: 75 },
  { date: 'Fri', score: 80 },
  { date: 'Sat', score: 85 },
  { date: 'Sun', score: 88 },
];

const problemTypeData = [
  { name: 'Arrays', value: 35 },
  { name: 'Strings', value: 25 },
  { name: 'Linked Lists', value: 15 },
  { name: 'Trees', value: 10 },
  { name: 'Graphs', value: 5 },
  { name: 'DP', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CFF', '#FF6B6B'];

const DashboardPage = () => {
  const { darkMode } = useSettings();
  
  // Recent interviews mock data
  const recentInterviews = [
    { id: 1, title: 'Two Sum', date: '2023-05-10', difficulty: 'Easy', score: 85 },
    { id: 2, title: 'Valid Parentheses', date: '2023-05-08', difficulty: 'Easy', score: 90 },
    { id: 3, title: 'Merge Intervals', date: '2023-05-05', difficulty: 'Medium', score: 75 },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-400">Track your interview performance and progress</p>
          </div>
          <div className="flex space-x-3">
            <Link to="/settings">
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                Settings
              </Button>
            </Link>
            <Link to="/interview">
              <Button className="bg-blue-600 hover:bg-blue-700">
                New Interview
              </Button>
            </Link>
          </div>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle>Total Interviews</CardTitle>
              <CardDescription className="text-gray-400">All-time interviews taken</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold">24</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle>Average Score</CardTitle>
              <CardDescription className="text-gray-400">Across all interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold">76<span className="text-2xl text-gray-400">/100</span></div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle>Streak</CardTitle>
              <CardDescription className="text-gray-400">Consecutive days practiced</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold">7 <span className="text-2xl text-gray-400">days</span></div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle>Performance Over Time</CardTitle>
              <CardDescription className="text-gray-400">Last 7 days interview scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={performanceData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#444" : "#ccc"} />
                    <XAxis dataKey="date" stroke={darkMode ? "#aaa" : "#666"} />
                    <YAxis stroke={darkMode ? "#aaa" : "#666"} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: darkMode ? "#1f2937" : "#fff", borderColor: darkMode ? "#374151" : "#e5e7eb" }}
                      labelStyle={{ color: darkMode ? "#f9fafb" : "#111827" }}
                    />
                    <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={2} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle>Problem Types</CardTitle>
              <CardDescription className="text-gray-400">Distribution by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={problemTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {problemTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: darkMode ? "#1f2937" : "#fff", borderColor: darkMode ? "#374151" : "#e5e7eb" }}
                      labelStyle={{ color: darkMode ? "#f9fafb" : "#111827" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="mb-6 bg-gray-800/50">
            <TabsTrigger value="recent">Recent Interviews</TabsTrigger>
            <TabsTrigger value="recommended">Recommended Practice</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recent">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentInterviews.map(interview => (
                <Card key={interview.id} className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle>{interview.title}</CardTitle>
                    <CardDescription className="text-gray-400">{interview.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        interview.difficulty === 'Easy' 
                          ? 'bg-green-900/30 text-green-400' 
                          : interview.difficulty === 'Medium'
                          ? 'bg-yellow-900/30 text-yellow-400'
                          : 'bg-red-900/30 text-red-400'
                      }`}>
                        {interview.difficulty}
                      </span>
                      <span className="text-2xl font-bold">{interview.score}<span className="text-sm text-gray-400">/100</span></span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full hover:bg-gray-700">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recommended">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Recommended problems would go here */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Valid Anagram</CardTitle>
                  <CardDescription className="text-gray-400">String manipulation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-900/30 text-green-400">Easy</span>
                    <span className="text-gray-400">Recommended</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full hover:bg-gray-700">Start Practice</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Group Anagrams</CardTitle>
                  <CardDescription className="text-gray-400">Hash Tables</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 rounded-full text-xs bg-yellow-900/30 text-yellow-400">Medium</span>
                    <span className="text-gray-400">Recommended</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full hover:bg-gray-700">Start Practice</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Minimum Window Substring</CardTitle>
                  <CardDescription className="text-gray-400">Sliding Window</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 rounded-full text-xs bg-red-900/30 text-red-400">Hard</span>
                    <span className="text-gray-400">Challenge</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full hover:bg-gray-700">Start Practice</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
