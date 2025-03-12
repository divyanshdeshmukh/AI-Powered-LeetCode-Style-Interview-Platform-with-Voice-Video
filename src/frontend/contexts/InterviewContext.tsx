
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Mock test result type
type TestResult = {
  status: 'success' | 'failure';
  message: string;
};

// Mock problem type
type Problem = {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  constraints: string[];
};

interface InterviewContextType {
  status: 'idle' | 'connecting' | 'connected' | 'disconnected';
  problem: Problem | null;
  feedback: string[];
  testResults: TestResult[];
  code: string;
  currentLanguage: string;
  cameraEnabled: boolean;
  micEnabled: boolean;
  
  toggleCamera: () => void;
  toggleMic: () => void;
  setLanguage: (language: string) => void;
  updateCode: (code: string) => void;
  runTests: () => void;
  submitSolution: () => void;
}

// Sample problem data
const sampleProblem: Problem = {
  id: 'two-sum',
  title: 'Two Sum',
  description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
  difficulty: 'easy',
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]'
    }
  ],
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9',
    'Only one valid answer exists.'
  ]
};

const InterviewContext = createContext<InterviewContextType | undefined>(undefined);

export const InterviewProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected' | 'disconnected'>('idle');
  const [problem, setProblem] = useState<Problem | null>(sampleProblem);
  const [feedback, setFeedback] = useState<string[]>([
    "Tell me about your approach to solving this problem.",
    "I'm thinking of using a hash map to store values I've seen so far, then check if the complement exists as I iterate through the array."
  ]);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [code, setCode] = useState(`function twoSum(nums, target) {
  // Your solution here
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}`);
  const [currentLanguage, setCurrentLanguage] = useState('javascript');
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(true);
  
  // Effect to simulate connecting
  React.useEffect(() => {
    if (status === 'idle') {
      setStatus('connecting');
      
      // Simulate connection delay
      const timer = setTimeout(() => {
        setStatus('connected');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [status]);
  
  const toggleCamera = () => setCameraEnabled(prev => !prev);
  
  const toggleMic = () => setMicEnabled(prev => !prev);
  
  const setLanguage = (language: string) => setCurrentLanguage(language);
  
  const updateCode = (newCode: string) => setCode(newCode);
  
  // Mock function to run tests
  const runTests = () => {
    // Simulate test running
    setTestResults([]);
    
    setTimeout(() => {
      setTestResults([
        {
          status: 'success',
          message: 'Test case 1 passed: nums = [2,7,11,15], target = 9 → [0,1]'
        },
        {
          status: 'success',
          message: 'Test case 2 passed: nums = [3,2,4], target = 6 → [1,2]'
        },
        {
          status: 'success',
          message: 'Test case 3 passed: nums = [3,3], target = 6 → [0,1]'
        }
      ]);
    }, 1500);
  };
  
  // Mock function to submit solution
  const submitSolution = () => {
    // Add AI feedback
    setFeedback(prev => [
      ...prev,
      "I'm submitting my solution now.",
      "Great work! Your solution is correct and efficient with O(n) time complexity. Have you considered any edge cases?"
    ]);
    
    // Run tests
    runTests();
  };
  
  return (
    <InterviewContext.Provider value={{
      status,
      problem,
      feedback,
      testResults,
      code,
      currentLanguage,
      cameraEnabled,
      micEnabled,
      toggleCamera,
      toggleMic,
      setLanguage,
      updateCode,
      runTests,
      submitSolution
    }}>
      {children}
    </InterviewContext.Provider>
  );
};

export const useInterview = () => {
  const context = useContext(InterviewContext);
  if (context === undefined) {
    throw new Error('useInterview must be used within an InterviewProvider');
  }
  return context;
};
