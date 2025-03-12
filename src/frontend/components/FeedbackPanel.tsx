import React, { useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useInterview } from '@/frontend/contexts/InterviewContext';

const FeedbackPanel = () => {
  const { feedback, testResults, problem } = useInterview();
  const feedbackEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to the latest feedback
  useEffect(() => {
    if (feedbackEndRef.current) {
      feedbackEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [feedback]);
  
  return (
    <Tabs defaultValue="problem" className="h-full">
      <TabsList className="grid grid-cols-3 mb-2">
        <TabsTrigger value="problem">Problem</TabsTrigger>
        <TabsTrigger value="interaction">AI Interaction</TabsTrigger>
        <TabsTrigger value="tests">Test Results</TabsTrigger>
      </TabsList>
      
      <TabsContent value="problem" className="h-[calc(100%-40px)]">
        <ScrollArea className="h-full rounded-md border p-4">
          {problem ? (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold">{problem.title}</h2>
                <div className="flex items-center my-1">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    problem.difficulty === 'easy' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : problem.difficulty === 'medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-gray-700 dark:text-gray-300">{problem.description}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Examples:</h3>
                {problem.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <div><span className="font-mono">Input:</span> {example.input}</div>
                    <div><span className="font-mono">Output:</span> {example.output}</div>
                    {example.explanation && (
                      <div><span className="font-mono">Explanation:</span> {example.explanation}</div>
                    )}
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="font-semibold">Constraints:</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {problem.constraints.map((constraint, index) => (
                    <li key={index} className="font-mono text-xs">{constraint}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">No problem loaded</p>
            </div>
          )}
        </ScrollArea>
      </TabsContent>
      
      <TabsContent value="interaction" className="h-[calc(100%-40px)]">
        <ScrollArea className="h-full rounded-md border p-4">
          <div className="space-y-4">
            {feedback.length > 0 ? (
              feedback.map((message, index) => (
                <div key={index} className={`p-3 rounded-lg max-w-[85%] ${
                  index % 2 === 0 
                    ? 'bg-interview-blue text-white ml-auto' 
                    : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-200'
                }`}>
                  {message}
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">No interaction yet</p>
              </div>
            )}
            <div ref={feedbackEndRef} />
          </div>
        </ScrollArea>
      </TabsContent>
      
      <TabsContent value="tests" className="h-[calc(100%-40px)]">
        <ScrollArea className="h-full rounded-md border p-4">
          {testResults.length > 0 ? (
            <div className="space-y-2">
              {testResults.map((result, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-md ${
                    result.status === 'success' 
                      ? 'bg-green-50 text-green-800 border-l-4 border-green-500 dark:bg-green-900/30 dark:text-green-300' 
                      : 'bg-red-50 text-red-800 border-l-4 border-red-500 dark:bg-red-900/30 dark:text-red-300'
                  }`}
                >
                  {result.message}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <p className="text-gray-500">No test results yet</p>
              <p className="text-gray-400 text-sm">Run tests to see results here</p>
            </div>
          )}
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
};

export default FeedbackPanel;
