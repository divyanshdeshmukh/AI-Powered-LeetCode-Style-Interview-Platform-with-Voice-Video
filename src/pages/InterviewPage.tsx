
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import VideoPanel from '@/components/VideoPanel';
import CodeEditor from '@/components/CodeEditor';
import FeedbackPanel from '@/components/FeedbackPanel';
import { useInterview } from '@/contexts/InterviewContext';
import { X, ArrowLeft, Home } from 'lucide-react';
import { 
  ResizablePanelGroup, 
  ResizablePanel, 
  ResizableHandle 
} from '@/components/ui/resizable';

const InterviewPage = () => {
  const { status, startInterview, endInterview } = useInterview();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (status === 'idle') {
      startInterview();
    }
  }, [status, startInterview]);
  
  const handleEndInterview = () => {
    if (window.confirm('Are you sure you want to end this interview?')) {
      endInterview();
      navigate('/dashboard');
    }
  };
  
  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Connection Error</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We couldn't establish a connection for your interview.
            Please check your internet connection and try again.
          </p>
          <Button onClick={() => navigate('/')}>Return to Home</Button>
        </div>
      </div>
    );
  }
  
  if (status === 'connecting') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-interview-blue border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold mb-4">Connecting to Interview</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Setting up your interview environment...
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="bg-white/10 dark:bg-gray-800/20 border-b border-gray-200/20 dark:border-gray-700/20 py-3 px-4 backdrop-blur-lg glass-morphism">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full hover:bg-white/10"
              onClick={() => navigate(-1)}
              title="Go Back"
            >
              <ArrowLeft size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full hover:bg-white/10"
              onClick={() => navigate('/')}
              title="Home"
            >
              <Home size={20} />
            </Button>
            <h1 className="text-xl font-bold">Technical Interview</h1>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-gray-500 border-gray-300 bg-white/10 hover:bg-white/20 backdrop-blur-md"
            onClick={handleEndInterview}
          >
            <X size={16} className="mr-1" /> End Interview
          </Button>
        </div>
      </header>
      
      <main className="flex-grow p-4 flex flex-col max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-[calc(100vh-9rem)]">
          {/* Video panel - left side on large screens, top on mobile */}
          <div className="md:col-span-2 h-full">
            <VideoPanel />
          </div>
          
          {/* Code and feedback - right side on large screens, bottom on mobile */}
          <div className="md:col-span-3 flex flex-col h-full">
            <ResizablePanelGroup 
              direction="vertical" 
              className="h-full rounded-lg overflow-hidden"
            >
              <ResizablePanel 
                defaultSize={50} 
                minSize={20}
                className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-t-lg"
              >
                <CodeEditor />
              </ResizablePanel>
              
              <ResizableHandle withHandle className="h-2 bg-white/5 hover:bg-white/10 transition-colors" />
              
              <ResizablePanel 
                defaultSize={50} 
                minSize={20}
                className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-b-lg"
              >
                <FeedbackPanel />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InterviewPage;
