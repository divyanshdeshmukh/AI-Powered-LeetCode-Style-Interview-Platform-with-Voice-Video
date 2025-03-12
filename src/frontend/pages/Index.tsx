
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Technical Interview Practice
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Practice your coding skills with AI-powered technical interviews
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="bg-gray-800/80 rounded-xl p-6 shadow-xl border border-gray-700 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-time AI interviewer feedback</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Multiple programming languages</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Realistic coding challenges</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Performance analytics and improvement suggestions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800/80 rounded-xl p-6 shadow-xl border border-gray-700 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Get Started</h2>
            <p className="mb-6 text-gray-300">
              Ready to ace your next technical interview? Start practicing now with our AI-powered platform.
            </p>
            <div className="space-y-4">
              <Link to="/interview" className="w-full">
                <Button className="w-full py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Start Interview Practice
                </Button>
              </Link>
              <Link to="/dashboard" className="w-full">
                <Button variant="outline" className="w-full py-6 text-lg border-gray-600 hover:bg-gray-700/50">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-gray-800/80 rounded-xl p-6 shadow-xl border border-gray-700 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="font-bold mb-2">Choose a Challenge</h3>
              <p className="text-gray-400">Select from various difficulty levels and problem types</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="font-bold mb-2">Code Your Solution</h3>
              <p className="text-gray-400">Write and test your code in our interactive editor</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-400">3</span>
              </div>
              <h3 className="font-bold mb-2">Get Feedback</h3>
              <p className="text-gray-400">Receive detailed analysis and improvement suggestions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
