import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useInterview } from '@/frontend/contexts/InterviewContext';
import { Mic, MicOff, Video, VideoOff } from 'lucide-react';

const VideoPanel = () => {
  const { cameraEnabled, micEnabled, toggleCamera, toggleMic, status } = useInterview();

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* AI Interviewer Video */}
      <Card className="bg-gray-800 rounded-lg overflow-hidden relative flex items-center justify-center flex-1">
        {status === 'connecting' ? (
          <div className="text-white animate-pulse">Connecting...</div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-interview-blue-dark to-gray-900 opacity-90"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-interview-blue rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white font-medium">AI Interviewer</p>
              <p className="text-gray-300 text-sm">Speaking...</p>
            </div>
          </>
        )}
      </Card>

      {/* User Video */}
      <Card className="bg-gray-800 rounded-lg overflow-hidden relative flex-1">
        {!cameraEnabled ? (
          <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gray-600 rounded-full flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-gray-300">Camera Off</p>
            </div>
          </div>
        ) : (
          <div className="h-full w-full bg-gray-700 flex items-center justify-center">
            {/* This would be replaced with actual video feed */}
            <div className="text-gray-400">Your video would appear here</div>
          </div>
        )}

        {/* Controls overlay */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          <Button 
            variant="secondary" 
            size="sm" 
            className="bg-gray-800/80 text-white hover:bg-gray-700"
            onClick={toggleMic}
          >
            {micEnabled ? <Mic size={18} /> : <MicOff size={18} />}
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            className="bg-gray-800/80 text-white hover:bg-gray-700"
            onClick={toggleCamera}
          >
            {cameraEnabled ? <Video size={18} /> : <VideoOff size={18} />}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default VideoPanel;
