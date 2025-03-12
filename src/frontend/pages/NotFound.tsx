
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-9xl font-bold text-blue-500">404</div>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-6">
          <Link to="/">
            <Button className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
