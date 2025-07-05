import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BookOpen, TrendingUp, Brain, Gamepad2, Award, Menu, X } from 'lucide-react';

// Import components
import HomePage from './components/HomePage';
import WhatIsLME from './components/WhatIsLME';
import SixMetals from './components/SixMetals';
import TradingBasics from './components/TradingBasics';
import TechnicalAnalysis from './components/TechnicalAnalysis';
import QuizSection from './components/QuizSection';
import TradingGame from './components/TradingGame';
import Achievements from './components/Achievements';

import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedSections: [],
    totalScore: 0,
    achievements: []
  });

  const navigationItems = [
    { path: '/', icon: Home, label: 'Home', color: '#667eea' },
    { path: '/what-is-lme', icon: BookOpen, label: 'What is LME?', color: '#764ba2' },
    { path: '/six-metals', icon: TrendingUp, label: 'Six Metals', color: '#f093fb' },
    { path: '/trading-basics', icon: Brain, label: 'Trading Basics', color: '#4facfe' },
    { path: '/technical-analysis', icon: TrendingUp, label: 'Technical Analysis', color: '#43e97b' },
    { path: '/quiz', icon: Brain, label: 'Quiz Time', color: '#fa709a' },
    { path: '/trading-game', icon: Gamepad2, label: 'Trading Game', color: '#ffecd2' },
    { path: '/achievements', icon: Award, label: 'Achievements', color: '#a8edea' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const updateProgress = (section, score = 0) => {
    setUserProgress(prev => ({
      ...prev,
      completedSections: [...prev.completedSections, section],
      totalScore: prev.totalScore + score
    }));
  };

  return (
    <Router>
      <div className="app-container">
        {/* Mobile Header */}
        <header className="mobile-header">
          <div className="header-content">
            <motion.div 
              className="logo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TrendingUp className="logo-icon" />
              <span>LME Academy</span>
            </motion.div>
            
            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="mobile-nav"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="nav-content">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.path}
                    href={item.path}
                    className="nav-item"
                    style={{ borderLeftColor: item.color }}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                    <span>{item.label}</span>
                    {userProgress.completedSections.includes(item.path) && (
                      <motion.div 
                        className="completed-badge"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✓
                      </motion.div>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/what-is-lme" element={<WhatIsLME updateProgress={updateProgress} />} />
            <Route path="/six-metals" element={<SixMetals updateProgress={updateProgress} />} />
            <Route path="/trading-basics" element={<TradingBasics updateProgress={updateProgress} />} />
            <Route path="/technical-analysis" element={<TechnicalAnalysis updateProgress={updateProgress} />} />
            <Route path="/quiz" element={<QuizSection updateProgress={updateProgress} />} />
            <Route path="/trading-game" element={<TradingGame updateProgress={updateProgress} />} />
            <Route path="/achievements" element={<Achievements userProgress={userProgress} />} />
          </Routes>
        </main>

        {/* Progress Indicator */}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ 
              width: `${(userProgress.completedSections.length / navigationItems.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;