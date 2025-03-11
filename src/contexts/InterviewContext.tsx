
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type InterviewStatus = 'idle' | 'connecting' | 'in-progress' | 'completed' | 'error';

interface Problem {
  id: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  defaultCode: Record<string, string>;
}

interface InterviewContextType {
  status: InterviewStatus;
  problem: Problem | null;
  cameraEnabled: boolean;
  micEnabled: boolean;
  currentLanguage: string;
  code: string;
  feedback: string[];
  testResults: { status: 'success' | 'error'; message: string }[];
  
  startInterview: () => void;
  endInterview: () => void;
  toggleCamera: () => void;
  toggleMic: () => void;
  setLanguage: (language: string) => void;
  updateCode: (code: string) => void;
  runTests: () => void;
  submitSolution: () => void;
}

const InterviewContext = createContext<InterviewContextType | undefined>(undefined);

// Sample problem data
const sampleProblems: Problem[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
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
    ],
    defaultCode: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Your code here
};`,
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Your code here
        pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
        return new int[]{};
    }
}`
    }
  }
];

export const InterviewProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<InterviewStatus>('idle');
  const [problem, setProblem] = useState<Problem | null>(null);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState<string[]>([]);
  const [testResults, setTestResults] = useState<{ status: 'success' | 'error'; message: string }[]>([]);
  
  // Initialize with a random problem when starting
  const startInterview = () => {
    setStatus('connecting');
    // Simulate connection delay
    setTimeout(() => {
      const randomProblem = sampleProblems[Math.floor(Math.random() * sampleProblems.length)];
      setProblem(randomProblem);
      setCode(randomProblem.defaultCode[currentLanguage] || '');
      setStatus('in-progress');
      // Add initial AI message
      setFeedback([
        `Hello! I'm your AI interviewer today. Let's discuss the "${randomProblem.title}" problem. Could you walk me through your approach?`
      ]);
    }, 2000);
  };
  
  const endInterview = () => {
    setStatus('completed');
    setFeedback(prev => [...prev, "Thank you for completing this interview simulation. Let's review your solution."]);
  };
  
  const toggleCamera = () => setCameraEnabled(prev => !prev);
  
  const toggleMic = () => setMicEnabled(prev => !prev);
  
  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
    if (problem) {
      setCode(problem.defaultCode[language] || '');
    }
  };
  
  const updateCode = (newCode: string) => {
    setCode(newCode);
  };
  
  const runTests = () => {
    setTestResults([]);
    // Simulate test running
    setTimeout(() => {
      // For demo purposes, show some sample test results
      setTestResults([
        { status: 'success', message: 'Test case 1: nums = [2,7,11,15], target = 9 → [0,1] ✓' },
        { status: 'success', message: 'Test case 2: nums = [3,2,4], target = 6 → [1,2] ✓' },
        { status: 'success', message: 'Test case 3: nums = [3,3], target = 6 → [0,1] ✓' }
      ]);
      
      setFeedback(prev => [...prev, "I see you're running some tests. That's a good practice to verify your solution works correctly."]);
    }, 1500);
  };
  
  const submitSolution = () => {
    // Simulate submission and AI feedback
    setFeedback(prev => [...prev, "I've reviewed your solution. Good job! Your approach has a time complexity of O(n) which is optimal for this problem. You've also handled edge cases well."]);
    
    setTimeout(() => {
      endInterview();
    }, 3000);
  };
  
  const value = {
    status,
    problem,
    cameraEnabled,
    micEnabled,
    currentLanguage,
    code,
    feedback,
    testResults,
    startInterview,
    endInterview,
    toggleCamera,
    toggleMic,
    setLanguage,
    updateCode,
    runTests,
    submitSolution
  };
  
  return (
    <InterviewContext.Provider value={value}>
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
