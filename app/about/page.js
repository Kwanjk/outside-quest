// app/about/page.js
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <Navbar />
      <div className="container mx-auto p-12 max-w-3xl">
        <h1 className="text-5xl font-bold mb-8 text-green-400">Mission Brief</h1>
        
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">The Problem:</strong> In the digital age, gamers and students face rising levels of screen fatigue and social isolation.
          </p>
          <p>
            <strong className="text-white">The Solution:</strong> Outside Quest Gamifies your real life. We use open APIs to generate real-world missions that help you touch grass without losing the feeling of leveling up.
          </p>
          
          <div className="bg-slate-700 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-white mb-2">Tech Stack</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Next.js & React (Frontend)</li>
              <li>Tailwind CSS (Styling)</li>
              <li>Supabase (Database)</li>
              <li>OpenWeatherMap & ZenQuotes (External APIs)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}