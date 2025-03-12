
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Home, ArrowLeft } from 'lucide-react';
import VideoPanel from '@/frontend/components/VideoPanel';
import CodeEditor from '@/frontend/components/CodeEditor';
import FeedbackPanel from '@/frontend/components/FeedbackPanel';

const InterviewPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-slate-950 to-gray-900 text-white">
      <header className="flex items-center justify-between p-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Technical Interview</h1>
        </div>
      </header>
      
      <div className="flex-1 flex overflow-hidden">
        <div className="w-1/3 p-4 flex flex-col space-y-4">
          <VideoPanel />
          <Card className="flex-1 bg-slate-800/50 backdrop-blur-md border-slate-700 overflow-y-auto">
            <FeedbackPanel />
          </Card>
        </div>
        
        <div className="flex-1 p-4">
          <ResizablePanelGroup direction="vertical" className="h-full">
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="p-4 bg-slate-800/50 backdrop-blur-md rounded-md border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Problem</h2>
                <div className="prose prose-invert">
                  <h3>Two Sum</h3>
                  <p>
                    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
                    You may assume that each input would have exactly one solution, and you may not use the same element twice.
                  </p>
                  
                  <h4>Examples:</h4>
                  <pre className="bg-slate-900 p-3 rounded-md">
                    <code>
                      Input: nums = [2,7,11,15], target = 9{"\n"}
                      Output: [0,1]{"\n"}
                      Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                    </code>
                  </pre>
                  
                  <pre className="bg-slate-900 p-3 rounded-md">
                    <code>
                      Input: nums = [3,2,4], target = 6{"\n"}
                      Output: [1,2]
                    </code>
                  </pre>
                  
                  <h4>Constraints:</h4>
                  <ul>
                    <li>2 &lt;= nums.length &lt;= 10^4</li>
                    <li>-10^9 &lt;= nums[i] &lt;= 10^9</li>
                    <li>-10^9 &lt;= target &lt;= 10^9</li>
                    <li>Only one valid answer exists.</li>
                  </ul>
                </div>
              </div>
            </ResizablePanel>
            
            <ResizableHandle className="h-2 bg-gray-800 rounded-full my-2 hover:bg-gray-700" />
            
            <ResizablePanel defaultSize={50} minSize={20}>
              <div className="h-full">
                <CodeEditor />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;
