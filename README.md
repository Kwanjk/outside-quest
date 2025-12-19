# Outside Quest: Level Up in Real Life

## Project Description
Outside Quest is a gamified wellness application designed to help gamers and students combat screen fatigue. [cite_start]By integrating real-time weather data and motivational quotes, the app generates daily "real-world quests" that encourage users to step away from their screens and earn XP for physical activity and mindfulness[cite: 5, 11].

## Target Browsers
* Chrome (Desktop/Mobile)
* Firefox
* Safari (iOS/MacOS)

## Link to Developer Manual
[Jump to Developer Manual](#developer-manual)

---

# Developer Manual

## 1. Installation
1.  Clone the repository.
2.  Run `npm install` to install dependencies (Next.js, Axios, Chart.js, Supabase).
3.  Create a `.env.local` file in the root directory.
4.  Add your API keys to the `.env.local` file (See "API Keys" section below).

## 2. Running the Application
* Run `npm run dev` to start the local development server.
* Open `http://localhost:3000` in your browser.

## 3. Testing
* We use standard `console.log` debugging and manual API testing via the browser network tab.
* To test the API routes individually, navigate to `http://localhost:3000/api/daily-quest` in your browser.

## 4. API Endpoints

### GET `/api/daily-quest`
* **Purpose:** Fetches weather from OpenWeatherMap and quotes from ZenQuotes. [cite_start]Returns a combined JSON object with a generated quest[cite: 28, 29].
* **Inputs:** None (uses server-side environment variables).
* **Outputs:** JSON `{ weather, temp, quote, quest, xp }`.

### GET `/api/user-quests`
* [cite_start]**Purpose:** Retrieves the history of completed quests from the Supabase database[cite: 30].
* **Outputs:** JSON Array of quest objects.

### POST `/api/complete-quest`
* **Purpose:** Saves a completed quest to the Supabase database.
* **Inputs:** JSON `{ quest: string, xp_earned: number }`.

## 5. Known Bugs & Future Roadmap
* **Bug:** Weather location is currently hardcoded to Baltimore/Maryland for demonstration purposes.
* **Roadmap:** Implement Geolocation API to auto-detect user position for weather data.