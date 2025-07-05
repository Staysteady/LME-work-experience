import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, BookOpen, Play, Zap, Target } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Learn the Basics",
      description: "Understand what the LME is and how metal trading works",
      color: "#667eea"
    },
    {
      icon: TrendingUp,
      title: "Master the Metals",
      description: "Explore the six base metals traded on the LME",
      color: "#764ba2"
    },
    {
      icon: Zap,
      title: "Technical Analysis",
      description: "Learn RSI, candlesticks, and chart patterns",
      color: "#f093fb"
    },
    {
      icon: Target,
      title: "Test Your Knowledge",
      description: "Take quizzes and play trading games",
      color: "#4facfe"
    }
  ];

  const stats = [
    { number: "$15T", label: "Annual Trading Volume" },
    { number: "6", label: "Base Metals" },
    { number: "150+", label: "Years of History" },
    { number: "24/7", label: "Global Markets" }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.div
            className="hero-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TrendingUp size={60} />
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to LME Academy
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your interactive journey into the world of metal trading starts here! 
            Learn about the London Metal Exchange through fun, engaging lessons 
            designed specifically for work experience students.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="btn btn-primary">
              <Play size={20} />
              Start Learning
            </button>
            <button className="btn btn-secondary">
              <Award size={20} />
              View Achievements
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="stats-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="section-title">LME by the Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        className="features-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="section-title">What You'll Learn</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div 
                className="feature-icon"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon size={24} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="cta-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Trading?</h2>
          <p className="cta-description">
            Join thousands of students who have already discovered the exciting world of metal trading. 
            Start your journey today and become a trading expert!
          </p>
          <button className="btn btn-primary cta-button">
            <BookOpen size={20} />
            Begin Your Journey
          </button>
        </div>
      </motion.div>

      {/* Progress Preview */}
      <motion.div 
        className="progress-preview"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <h3 className="progress-title">Your Learning Path</h3>
        <div className="progress-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Understanding LME</h4>
              <p>Learn the basics of the London Metal Exchange</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Explore Metals</h4>
              <p>Discover the six base metals and their uses</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Master Trading</h4>
              <p>Learn technical analysis and trading strategies</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Practice & Play</h4>
              <p>Test your knowledge with quizzes and games</p>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .hero-section {
          text-align: center;
          padding: 40px 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border-radius: 20px;
          margin-bottom: 40px;
        }

        .hero-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .hero-icon {
          background: linear-gradient(135deg, #667eea, #764ba2);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 20px;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .stats-section {
          margin: 40px 0;
          text-align: center;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 30px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 30px 20px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 1rem;
          color: #666;
          margin-top: 8px;
        }

        .features-section {
          margin: 60px 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 20px;
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 12px;
        }

        .feature-description {
          color: #666;
          line-height: 1.6;
        }

        .cta-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 20px;
          padding: 50px 30px;
          text-align: center;
          color: white;
          margin: 60px 0;
        }

        .cta-title {
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .cta-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .cta-button {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          color: white;
          padding: 16px 32px;
          font-size: 1.1rem;
        }

        .progress-preview {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 40px;
          margin: 40px 0;
        }

        .progress-title {
          font-size: 1.8rem;
          font-weight: bold;
          color: #333;
          text-align: center;
          margin-bottom: 30px;
        }

        .progress-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border-radius: 12px;
          background: rgba(102, 126, 234, 0.05);
          border: 1px solid rgba(102, 126, 234, 0.1);
        }

        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .step-content h4 {
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 4px;
        }

        .step-content p {
          color: #666;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .progress-steps {
            grid-template-columns: 1fr;
          }
          
          .step {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;