
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SettingsContextType {
  darkMode: boolean;
  aiDifficulty: 'beginner' | 'intermediate' | 'advanced';
  speechToText: boolean;
  textToSpeech: boolean;
  
  toggleDarkMode: () => void;
  setAiDifficulty: (level: 'beginner' | 'intermediate' | 'advanced') => void;
  toggleSpeechToText: () => void;
  toggleTextToSpeech: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [aiDifficulty, setAiDifficultyState] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [speechToText, setSpeechToText] = useState(true);
  const [textToSpeech, setTextToSpeech] = useState(true);
  
  // Initialize dark mode based on system preference
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  // Update class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  
  const setAiDifficulty = (level: 'beginner' | 'intermediate' | 'advanced') => {
    setAiDifficultyState(level);
  };
  
  const toggleSpeechToText = () => setSpeechToText(prev => !prev);
  
  const toggleTextToSpeech = () => setTextToSpeech(prev => !prev);
  
  const value = {
    darkMode,
    aiDifficulty,
    speechToText,
    textToSpeech,
    toggleDarkMode,
    setAiDifficulty,
    toggleSpeechToText,
    toggleTextToSpeech
  };
  
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
