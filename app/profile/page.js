// app/profile/page.js
'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Bar } from 'react-chartjs-2'; // Library 2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Profile() {
  const [quests, setQuests] = useState([]);
  
  // Fetch 3: Get User History
  useEffect(() => {
    fetch('/api/user-quests')
      .then((res) => res.json())
      .then((data) => setQuests(data || []));
  }, []);

  const chartData = {
    labels: quests.slice(0, 5).map(q => q.quest.substring(0, 10) + '...'),
    datasets: [{
      label: 'XP Gained',
      data: quests.slice(0, 5).map(q => q.xp_earned),
      backgroundColor: 'rgba(34, 197, 94, 0.6)',
      borderColor: 'rgba(34, 197, 94, 1)',
      borderWidth: 1,
    }],
  };

  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <Navbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8">Agent Profile</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Recent Logs</h3>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {quests.map((q) => (
                <li key={q.id} className="flex justify-between items-center bg-slate-800 p-3 rounded">
                  <span className="text-sm">{q.quest}</span>
                  <span className="text-green-400 font-mono text-sm">+{q.xp_earned} XP</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-700 p-6 rounded-xl shadow-lg">
             <h3 className="text-xl font-bold mb-4">Performance Metrics</h3>
             <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>
      </div>
    </div>
  );
}