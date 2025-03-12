
// API service to interact with the backend

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Helper function for making API requests
async function fetchApi<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  
  const response = await fetch(url, {
    ...options,
    headers,
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'API request failed');
  }
  
  return response.json();
}

// Interview API functions
export const interviewApi = {
  // Get problem details
  getProblem: (problemId: string) => 
    fetchApi<any>(`/interview/problems/${problemId}`),
  
  // Submit a solution
  submitSolution: (data: { code: string; language: string; problemId: string }) => 
    fetchApi<any>('/interview/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  // Run tests against a solution
  runTests: (data: { code: string; language: string; problemId: string }) => 
    fetchApi<any>('/interview/run-tests', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// User API functions
export const userApi = {
  // Get user profile
  getProfile: () => 
    fetchApi<any>('/user/profile'),
  
  // Update user profile
  updateProfile: (data: any) => 
    fetchApi<any>('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};

export default {
  interview: interviewApi,
  user: userApi,
};
