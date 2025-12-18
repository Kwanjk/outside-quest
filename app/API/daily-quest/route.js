// app/api/daily-quest/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  // Hardcoded coordinates for Baltimore (as per your PDF test)
  const lat = '39.2904';
  const lon = '-76.6122';
  const weatherKey = process.env.OPENWEATHER_API_KEY;

  try {
    // 1. Fetch Weather
    const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`);
    const weatherMain = weatherRes.data.weather[0].main;
    const temp = weatherRes.data.main.temp;

    // 2. Fetch Quote
    const quoteRes = await axios.get('https://zenquotes.io/api/random');
    const quoteData = quoteRes.data[0];

    // 3. Logic: Create Quest based on weather
    let questText = "Go for a 15-minute walk.";
    let xp = 50;

    if (weatherMain === 'Rain' || weatherMain === 'Thunderstorm') {
      questText = "Do 10 minutes of indoor stretching.";
      xp = 30;
    } else if (temp > 30) {
      questText = "Drink a glass of water and meditate.";
      xp = 20;
    }

    return NextResponse.json({
      weather: weatherMain,
      temp: temp,
      quote: quoteData.q,
      author: quoteData.a,
      quest: questText,
      xp: xp
    });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}