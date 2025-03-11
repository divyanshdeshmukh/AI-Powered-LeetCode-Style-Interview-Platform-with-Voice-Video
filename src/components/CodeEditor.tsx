
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useInterview } from '@/contexts/InterviewContext';
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
    <Card className="flex flex-col h-full border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center">
          <Select value={currentLanguage} onValueChange={setLanguage}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center"
            onClick={runTests}
          >
            <Play size={16} className="mr-1" /> Run Tests
          </Button>
          <Button 
            size="sm"
            className="flex items-center bg-interview-blue hover:bg-interview-blue-dark"
            onClick={submitSolution}
          >
            <Send size={16} className="mr-1" /> Submit
          </Button>
        </div>
      </div>
      
      <div className="flex-grow p-0 overflow-auto bg-gray-50 dark:bg-gray-900">
        <textarea
          ref={editorRef}
          value={code}
          onChange={(e) => updateCode(e.target.value)}
          className="w-full h-full min-h-[300px] p-4 font-mono text-sm outline-none resize-none bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          spellCheck="false"
          placeholder="Write your code here..."
        />
      </div>
    </Card>
  );
};

export default CodeEditor;
