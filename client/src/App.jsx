import React, { useState } from 'react';
import { Send, Database, ArrowRight, MessageSquare, Copy, CopyCheck } from 'lucide-react';

function App() {
  const [endpoint, setEndpoint] = useState({
    prompt: '5 usa states object 3 value each',
  });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (key) => {
    navigator.clipboard.writeText(`https://json-api-ai-kappa.vercel.app/api/api/${key}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const createRes = await fetch('https://json-api-ai-kappa.vercel.app/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: endpoint.prompt,
        }),
      });

      if (!createRes.ok) throw new Error('Failed to create endpoint');

      const data = await createRes.json();
      const key = data.data.key;
      const apiUrl = `https://json-api-ai-kappa.vercel.app/api/${key}`;

      setResponse(apiUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000_100%)]"></div>
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              JSON Endpoint Generator
            </h1>
            <p className="text-gray-400 text-sm md:text-base">Create dynamic JSON endpoints with AI-powered responses</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/50 p-4 md:p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Endpoint Prompt
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={endpoint.prompt}
                  onChange={(e) => setEndpoint({ ...endpoint, prompt: e.target.value })}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2 pl-4 pr-10 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter a prompt (e.g., '5 usa states object 3 value each')"
                />
                <Database className="absolute right-3 top-2.5 text-gray-500 h-5 w-5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Generate Endpoint</span>
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          {response && (
            <div className="bg-gray-800/50 p-4 md:p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <div className="flex items-center space-x-2 mb-4">
                <ArrowRight className="h-5 w-5 text-green-400 flex-shrink-0" />
                <h3 className="text-lg md:text-xl font-medium text-green-400">Generated Endpoint</h3>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-900 p-4 rounded-lg space-y-2 md:space-y-0">
                <div className="break-all text-sm md:text-base">{response}</div>
                <button
                  onClick={() => handleCopy(response.split('/').pop())}
                  className="flex-shrink-0 p-2 hover:bg-gray-800 rounded transition-colors"
                >
                  {copied ? (
                    <CopyCheck className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;