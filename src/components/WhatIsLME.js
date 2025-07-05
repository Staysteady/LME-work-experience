import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, Users, DollarSign, TrendingUp, Clock, MapPin, Zap } from 'lucide-react';

const WhatIsLME = ({ updateProgress }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [readSections, setReadSections] = useState([]);

  useEffect(() => {
    // Mark progress when component mounts
    updateProgress('/what-is-lme', 10);
  }, [updateProgress]);

  const sections = [
    {
      id: 'overview',
      title: 'What is the LME?',
      icon: Building,
      color: '#667eea',
      content: {
        title: 'The London Metal Exchange',
        description: 'The world\'s premier marketplace for industrial metals trading',
        details: [
          'Handles over $15 trillion in annual notional value',
          'Specializes in standardized contracts for base metals',
          'Includes copper, aluminum, nickel, zinc, lead, and tin',
          'Different from stock markets (company shares) or agricultural commodities'
        ]
      }
    },
    {
      id: 'why-trade',
      title: 'Why Trade Metals?',
      icon: TrendingUp,
      color: '#764ba2',
      content: {
        title: 'Reasons for Metal Trading',
        description: 'Understanding why metals are traded globally',
        details: [
          'Producers (mining companies) hedge future production to lock in prices',
          'Consumers (manufacturers) hedge future consumption to manage costs',
          'Financial institutions provide liquidity and price discovery',
          'Physical traders arbitrage between locations and time periods'
        ]
      }
    },
    {
      id: 'global-centers',
      title: 'Global Trading Centers',
      icon: Globe,
      color: '#f093fb',
      content: {
        title: 'Major Trading Centers Worldwide',
        description: 'Metal trading happens around the clock globally',
        details: [
          'London (LME) - Global pricing benchmark, the world standard',
          'Singapore - Asian hub, trading starts as London closes',
          'Chicago (COMEX) - Parallel contracts, important for US market',
          'Shanghai (SHFE) - Chinese domestic demand, growing global influence'
        ]
      }
    },
    {
      id: 'participants',
      title: 'Market Participants',
      icon: Users,
      color: '#4facfe',
      content: {
        title: 'Who Trades Metals?',
        description: 'Different players with various objectives',
        details: [
          'Mining giants (BHP, Rio Tinto, Glencore) - produce and hedge',
          'Smelters and refiners (Aurubis, Norsk Hydro) - process materials',
          'Industrial consumers (Tesla, Prysmian) - need metals for products',
          'Trading houses (Trafigura, Mercuria) - provide liquidity and logistics',
          'Investment funds - add capital and trading strategies',
          'Electronic brokers and LME members - facilitate client access'
        ]
      }
    }
  ];

  const keyFacts = [
    { icon: DollarSign, value: '$15T', label: 'Annual Trading Volume' },
    { icon: Clock, value: '24/7', label: 'Global Trading Hours' },
    { icon: MapPin, value: '150+', label: 'Years in London' },
    { icon: Zap, value: '6', label: 'Base Metals Traded' }
  ];

  const handleSectionRead = (sectionIndex) => {
    if (!readSections.includes(sectionIndex)) {
      setReadSections([...readSections, sectionIndex]);
    }
  };

  const completionPercentage = Math.round((readSections.length / sections.length) * 100);

  return (
    <div className="page-container">
      <div className="page-header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Understanding the LME
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover the world's most important metal trading marketplace
        </motion.p>
      </div>

      {/* Progress Indicator */}
      <motion.div 
        className="section-progress"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="progress-info">
          <span>Reading Progress: {completionPercentage}%</span>
          <span>{readSections.length} of {sections.length} sections completed</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </motion.div>

      {/* Key Facts */}
      <motion.div 
        className="key-facts-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="section-title">LME at a Glance</h2>
        <div className="facts-grid">
          {keyFacts.map((fact, index) => (
            <motion.div
              key={index}
              className="fact-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="fact-icon">
                <fact.icon size={24} />
              </div>
              <div className="fact-value">{fact.value}</div>
              <div className="fact-label">{fact.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Content Sections */}
      <div className="content-sections">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className={`content-section ${activeSection === index ? 'active' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
          >
            <div className="section-header">
              <div 
                className="section-icon"
                style={{ backgroundColor: section.color }}
              >
                <section.icon size={24} />
              </div>
              <h3 className="section-title">{section.title}</h3>
              {readSections.includes(index) && (
                <motion.div 
                  className="completed-check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ✓
                </motion.div>
              )}
            </div>
            
            <div className="section-content">
              <h4>{section.content.title}</h4>
              <p className="section-description">{section.content.description}</p>
              
              <ul className="details-list">
                {section.content.details.map((detail, detailIndex) => (
                  <motion.li
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
              
              <button 
                className="read-button"
                onClick={() => {
                  setActiveSection(index);
                  handleSectionRead(index);
                }}
                style={{ backgroundColor: section.color }}
              >
                {readSections.includes(index) ? 'Read Again' : 'Mark as Read'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Quiz Teaser */}
      <motion.div 
        className="quiz-teaser"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <h3>Test Your Knowledge!</h3>
        <p>Think you understand the LME? Take our quiz to test what you've learned!</p>
        <button className="btn btn-primary">
          Take LME Quiz
        </button>
      </motion.div>

      <style jsx>{`
        .section-progress {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 30px;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          font-size: 0.9rem;
          color: #666;
        }

        .progress-bar-container {
          height: 8px;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.3s ease;
        }

        .key-facts-section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          text-align: center;
          margin-bottom: 20px;
        }

        .facts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
          margin-bottom: 30px;
        }

        .fact-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .fact-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 12px;
        }

        .fact-value {
          font-size: 1.8rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 4px;
        }

        .fact-label {
          font-size: 0.9rem;
          color: #666;
        }

        .content-sections {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .content-section {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .content-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .section-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .section-header h3 {
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          flex: 1;
        }

        .completed-check {
          width: 30px;
          height: 30px;
          background: #4CAF50;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }

        .section-content h4 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 8px;
        }

        .section-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .details-list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .details-list li {
          padding: 8px 0;
          padding-left: 20px;
          position: relative;
          color: #555;
          line-height: 1.6;
        }

        .details-list li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .read-button {
          background: #667eea;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 16px;
        }

        .read-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .quiz-teaser {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          color: white;
          margin-top: 40px;
        }

        .quiz-teaser h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .quiz-teaser p {
          opacity: 0.9;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .facts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .section-header {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          
          .section-header h3 {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .facts-grid {
            grid-template-columns: 1fr;
          }
          
          .progress-info {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatIsLME;