

// src/App.jsx
import React, { Suspense, lazy, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Regular imports
import Home from "./Home";
import GameList from "./GameList";

// ✅ Lazy load game components
const BikeGame = lazy(() => import("./components/BikeGame"));
const QuizGame = lazy(() => import("./components/QuizGame"));

// Debug component to log route changes (only in development)
function RouteDebugger() {
  const location = useLocation();
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(`🧭 Route changed to: ${location.pathname}${location.hash}`);
    }
  }, [location]);
  return null;
}

function App() {
  // Only log in development mode
  if (process.env.NODE_ENV === "development") {
    console.log("🎮 App component mounting...");
  }

  return (
    <Router>
      <RouteDebugger />
      {/* Wrap routes in Suspense to show fallback while loading */}
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            Loading Game...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/games/bike" element={<BikeGame />} />
          <Route path="/games/quiz" element={<QuizGame />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
