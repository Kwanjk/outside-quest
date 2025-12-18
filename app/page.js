// app/page.js
'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion'; // Library 1

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');

  // Fetch 1: Get Daily Quest
  useEffect(() => {
    fetch('/api/daily-quest')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  // Fetch 2: Mark Quest Complete
  const handleComplete = async () => {
    setStatus('Saving...');
    const res = await fetch('/api/complete-quest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quest: data.quest, xp_earned: data.xp }),
    });
    
    if (res.ok) {
      setStatus('Quest Completed! XP Earned.');
    } else {
      setStatus('Error saving quest.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 text-white font-sans">
      <Navbar />
      <main className="container mx-auto p-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="w-full max-w-2xl"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Daily Dashboard
          </h2>

          {loading ? (
            <p className="text-center text-gray-400 animate-pulse">Contacting satellite...</p>
          ) : (
            <div className="space-y-8">
              {/* Quote Card */}
              <div className="bg-slate-700 p-6 rounded-lg shadow-lg border-l-4 border-yellow-400 italic text-gray-200">
                "{data.quote}"
                <div className="text-right text-sm text-gray-400 mt-2">— {data.author}</div>
              </div>

              {/* Quest Card */}
              <div className="bg-gradient-to-br from-gray-900 to-slate-900 p-8 rounded-2xl border border-gray-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {data.weather} | {data.temp}°C
                </div>
                
                <h3 className="text-xl text-gray-400 uppercase tracking-widest mb-2">Current Objective</h3>
                <h1 className="text-3xl font-bold text-white mb-4">{data.quest}</h1>
                <div className="text-green-400 font-mono text-lg mb-6">+ {data.xp} XP REWARD</div>

                <button 
                  onClick={handleComplete}
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-lg transition transform hover:scale-105 shadow-lg"
                >
                  {status ? status : "COMPLETE QUEST"}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}