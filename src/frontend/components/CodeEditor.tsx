import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useInterview } from '@/frontend/contexts/InterviewContext';
import { Play, Send } from 'lucide-react';

const CodeEditor = () => {
  const { currentLanguage, setLanguage, code, updateCode, runTests, submitSolution } = useInterview();
  const editorRef = useRef<HTMLTextAreaElement>(null);
  
  // In a real implementation, this would use Monaco Editor
  // For this prototype, we'll use a styled textarea
  
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.style.height = 'auto';
      editorRef.current.style.height = `${editorRef.current.scrollHeight}px`;
    }
  }, [code]);
  
  return (
    <Card className="flex flex-col h-full border border-gray-200 dark:border-gray-700 bg-white/10 backdrop-blur-lg shadow-lg">
      <div className="flex items-center justify-between p-3 border-b border-gray-200/30 dark:border-gray-700/30 bg-white/5 dark:bg-gray-800/30 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <Select value={currentLanguage} onValueChange={setLanguage}>
            <SelectTrigger className="w-32 bg-white/20 border-white/20 backdrop-blur-md">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-md"
            onClick={runTests}
          >
            <Play size={16} className="mr-1" /> Run Tests
          </Button>
          <Button 
            size="sm"
            className="flex items-center bg-interview-blue/80 hover:bg-interview-blue-dark/80 backdrop-blur-md"
            onClick={submitSolution}
          >
            <Send size={16} className="mr-1" /> Submit
          </Button>
        </div>
      </div>
      
      <div className="flex-grow p-0 overflow-auto bg-white/5 dark:bg-gray-900/20 backdrop-blur-md">
        <textarea
          ref={editorRef}
          value={code}
          onChange={(e) => updateCode(e.target.value)}
          className="w-full h-full min-h-[300px] p-4 font-mono text-sm outline-none resize-none bg-transparent text-gray-800 dark:text-gray-200"
          spellCheck="false"
          placeholder="Write your code here..."
        />
      </div>
    </Card>
  );
};

export default CodeEditor;
