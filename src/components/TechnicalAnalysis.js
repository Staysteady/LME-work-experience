import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, TrendingDown, AlertTriangle, Play, Pause, RotateCcw } from 'lucide-react';

const TechnicalAnalysis = ({ updateProgress }) => {
  const [activeTab, setActiveTab] = useState('rsi');
  const [isAnimating, setIsAnimating] = useState(false);
  const [divergenceType, setDivergenceType] = useState('bearish');
  const [completedTopics, setCompletedTopics] = useState([]);

  useEffect(() => {
    updateProgress('/technical-analysis', 20);
  }, [updateProgress]);

  const topics = [
    {
      id: 'rsi',
      title: 'RSI Divergence',
      icon: BarChart3,
      color: '#667eea',
      description: 'Learn to spot trend reversals using RSI divergence patterns'
    },
    {
      id: 'candlesticks',
      title: 'Candlestick Patterns',
      icon: TrendingUp,
      color: '#764ba2',
      description: 'Master Japanese candlestick patterns for better timing'
    },
    {
      id: 'applications',
      title: 'Real Applications',
      icon: AlertTriangle,
      color: '#f093fb',
      description: 'Apply these techniques to actual metal trading examples'
    }
  ];

  const candlestickPatterns = [
    {
      name: 'Doji',
      description: 'Open and close are virtually identical, signaling indecision',
      bullish: false,
      bearish: false,
      neutral: true,
      example: 'After strong moves in copper, dojis often precede reversals'
    },
    {
      name: 'Hammer',
      description: 'Small body with long lower wick, suggests buying at support',
      bullish: true,
      bearish: false,
      neutral: false,
      example: 'Hammers at aluminum support levels often mark trend reversals'
    },
    {
      name: 'Shooting Star',
      description: 'Small body with long upper wick, suggests selling at resistance',
      bullish: false,
      bearish: true,
      neutral: false,
      example: 'Shooting stars in zinc often signal short-term tops'
    },
    {
      name: 'Engulfing Pattern',
      description: 'Large candle completely encompasses the previous candle',
      bullish: true,
      bearish: true,
      neutral: false,
      example: 'Bullish engulfing patterns in nickel often mark strong reversals'
    },
    {
      name: 'Morning Star',
      description: 'Three-candle reversal pattern signaling bullish reversal',
      bullish: true,
      bearish: false,
      neutral: false,
      example: 'Morning stars in copper frequently mark major bottoms'
    },
    {
      name: 'Evening Star',
      description: 'Three-candle reversal pattern signaling bearish reversal',
      bullish: false,
      bearish: true,
      neutral: false,
      example: 'Evening stars in lead often precede significant declines'
    }
  ];

  const metalExamples = [
    {
      metal: 'Copper',
      scenario: 'Bearish divergence at $10,800/tonne with RSI divergence',
      result: '15% correction to $9,200/tonne over 3 weeks',
      lesson: 'Even small RSI divergences can signal major reversals'
    },
    {
      metal: 'Aluminum',
      scenario: 'Bullish divergence at $1,800/tonne with RSI showing strength',
      result: '20% rally to $2,160/tonne over 6 weeks',
      lesson: 'Divergence in oversold conditions often produces stronger reversals'
    },
    {
      metal: 'Nickel',
      scenario: 'Multiple false divergences during volatile period',
      result: 'Only volume-confirmed divergences produced reliable signals',
      lesson: 'Always combine divergence with other technical indicators'
    }
  ];

  const handleTopicComplete = (topicId) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
    }
  };

  const animateDivergence = (type) => {
    setDivergenceType(type);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  const completionPercentage = Math.round((completedTopics.length / topics.length) * 100);

  return (
    <div className="page-container">
      <div className="page-header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Analysis
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Master the art of reading charts and predicting price movements
        </motion.p>
      </div>

      {/* Progress Indicator */}
      <motion.div 
        className="learning-progress"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="progress-info">
          <span>Learning Progress: {completionPercentage}%</span>
          <span>{completedTopics.length} of {topics.length} topics mastered</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </motion.div>

      {/* Topic Navigation */}
      <div className="topic-tabs">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className={`topic-tab ${activeTab === topic.id ? 'active' : ''}`}
            onClick={() => setActiveTab(topic.id)}
            style={{ borderColor: activeTab === topic.id ? topic.color : 'transparent' }}
          >
            <topic.icon size={20} style={{ color: topic.color }} />
            <span>{topic.title}</span>
            {completedTopics.includes(topic.id) && <span className="check-mark">✓</span>}
          </button>
        ))}
      </div>

      {/* RSI Divergence Section */}
      {activeTab === 'rsi' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header">
            <h2>RSI Price Divergence</h2>
            <p>Master one of the most powerful reversal signals in technical analysis</p>
          </div>

          <div className="divergence-controls">
            <button 
              className="demo-button bearish"
              onClick={() => animateDivergence('bearish')}
            >
              🔴 Show Bearish Divergence
            </button>
            <button 
              className="demo-button bullish"
              onClick={() => animateDivergence('bullish')}
            >
              🟢 Show Bullish Divergence
            </button>
            <button 
              className="demo-button reset"
              onClick={() => setIsAnimating(false)}
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>

          <div className="chart-demo">
            <div className="chart-container">
              <div className="chart-title">
                                 {divergenceType === 'bearish' ? 'Bearish Divergence: Price ⬆️ RSI ⬇️' : 'Bullish Divergence: Price ⬇️ RSI ⬆️'}
              </div>
              
              <div className="price-chart">
                <div className="chart-subtitle">Price Chart</div>
                <div className="chart-content">
                  <div className={`price-line ${isAnimating ? 'animate' : ''}`}>
                    {divergenceType === 'bearish' ? (
                      <div className="line-points">
                        <div className="point high-point" style={{ left: '20%', top: '60%' }} />
                        <div className="point high-point" style={{ left: '70%', top: '30%' }} />
                        <div className={`trend-line ${isAnimating ? 'show' : ''}`} />
                      </div>
                    ) : (
                      <div className="line-points">
                        <div className="point low-point" style={{ left: '20%', top: '40%' }} />
                        <div className="point low-point" style={{ left: '70%', top: '70%' }} />
                        <div className={`trend-line ${isAnimating ? 'show' : ''}`} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="rsi-chart">
                <div className="chart-subtitle">RSI Chart</div>
                <div className="reference-lines">
                  <div className="rsi-line level-70" />
                  <div className="rsi-line level-50" />
                  <div className="rsi-line level-30" />
                  <span className="level-label top">70</span>
                  <span className="level-label middle">50</span>
                  <span className="level-label bottom">30</span>
                </div>
                <div className="chart-content">
                  <div className={`rsi-line ${isAnimating ? 'animate' : ''}`}>
                    {divergenceType === 'bearish' ? (
                      <div className="line-points">
                        <div className="point rsi-point" style={{ left: '20%', top: '30%' }} />
                        <div className="point rsi-point" style={{ left: '70%', top: '50%' }} />
                        <div className={`trend-line rsi-trend ${isAnimating ? 'show' : ''}`} />
                      </div>
                    ) : (
                      <div className="line-points">
                        <div className="point rsi-point" style={{ left: '20%', top: '70%' }} />
                        <div className="point rsi-point" style={{ left: '70%', top: '45%' }} />
                        <div className={`trend-line rsi-trend ${isAnimating ? 'show' : ''}`} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="signal-explanation">
              {divergenceType === 'bearish' ? (
                <div className="signal-box bearish">
                  <h3>⚠️ Bearish Divergence Detected</h3>
                  <p>Price makes higher highs while RSI makes lower highs - weakening momentum suggests reversal</p>
                  <ul>
                    <li>Entry: Wait for price to break below previous swing low</li>
                    <li>Stop Loss: Above the most recent high</li>
                    <li>Success Rate: 70-80% in strong uptrends</li>
                  </ul>
                </div>
              ) : (
                <div className="signal-box bullish">
                  <h3>🚀 Bullish Divergence Detected</h3>
                  <p>Price makes lower lows while RSI makes higher lows - weakening selling pressure suggests reversal</p>
                  <ul>
                    <li>Entry: Wait for price to break above previous swing high</li>
                    <li>Stop Loss: Below the most recent low</li>
                    <li>Success Rate: 65-75% in strong downtrends</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <button 
            className="complete-button"
            onClick={() => handleTopicComplete('rsi')}
            disabled={completedTopics.includes('rsi')}
          >
            {completedTopics.includes('rsi') ? 'Completed ✓' : 'Complete RSI Section'}
          </button>
        </motion.div>
      )}

      {/* Candlestick Patterns Section */}
      {activeTab === 'candlesticks' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header">
            <h2>Japanese Candlestick Patterns</h2>
            <p>Learn to read the market's emotional story through candlestick formations</p>
          </div>

          <div className="candlestick-explanation">
            <div className="candle-anatomy">
              <h3>Anatomy of a Candlestick</h3>
              <div className="candle-demo">
                <div className="candle bullish">
                  <div className="upper-wick" />
                  <div className="body" />
                  <div className="lower-wick" />
                </div>
                <div className="candle-labels">
                  <span className="label high">High</span>
                  <span className="label open">Open</span>
                  <span className="label close">Close</span>
                  <span className="label low">Low</span>
                </div>
              </div>
              <p>Green/white candles: Close above open (bullish)<br />Red/black candles: Close below open (bearish)</p>
            </div>
          </div>

          <div className="patterns-grid">
            {candlestickPatterns.map((pattern, index) => (
              <motion.div
                key={pattern.name}
                className="pattern-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="pattern-header">
                  <h4>{pattern.name}</h4>
                  <div className="pattern-signals">
                    {pattern.bullish && <span className="signal bullish">Bullish</span>}
                    {pattern.bearish && <span className="signal bearish">Bearish</span>}
                    {pattern.neutral && <span className="signal neutral">Neutral</span>}
                  </div>
                </div>
                <p className="pattern-description">{pattern.description}</p>
                <div className="pattern-example">
                  <strong>Metal Example:</strong> {pattern.example}
                </div>
              </motion.div>
            ))}
          </div>

          <button 
            className="complete-button"
            onClick={() => handleTopicComplete('candlesticks')}
            disabled={completedTopics.includes('candlesticks')}
          >
            {completedTopics.includes('candlesticks') ? 'Completed ✓' : 'Complete Candlesticks Section'}
          </button>
        </motion.div>
      )}

      {/* Real Applications Section */}
      {activeTab === 'applications' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header">
            <h2>Real Trading Applications</h2>
            <p>See how these techniques work in actual metal markets</p>
          </div>

          <div className="examples-section">
            <h3>Base Metal Trading Examples</h3>
            <div className="examples-grid">
              {metalExamples.map((example, index) => (
                <motion.div
                  key={example.metal}
                  className="example-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="example-header">
                    <h4>{example.metal}</h4>
                    <div className="metal-icon">{example.metal === 'Copper' ? '⚡' : example.metal === 'Aluminum' ? '✈️' : '🔋'}</div>
                  </div>
                  <div className="example-content">
                    <div className="scenario">
                      <strong>Scenario:</strong> {example.scenario}
                    </div>
                    <div className="result">
                      <strong>Result:</strong> {example.result}
                    </div>
                    <div className="lesson">
                      <strong>Key Lesson:</strong> {example.lesson}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="checklist-section">
            <h3>Technical Analysis Checklist</h3>
            <div className="checklist">
              <div className="checklist-item">
                <span className="checkmark">✅</span>
                <span>Identify clear trend (uptrend for bearish divergence, downtrend for bullish)</span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✅</span>
                <span>Confirm at least two swing highs/lows showing divergence</span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✅</span>
                <span>Check volume patterns for confirmation</span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✅</span>
                <span>Look for supporting candlestick patterns</span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✅</span>
                <span>Ensure RSI is in extreme territory (>70 or <30)</span>
              </div>
              <div className="checklist-item">
                <span className="checkmark">✅</span>
                <span>Plan entry, stop-loss, and target levels</span>
              </div>
            </div>
          </div>

          <button 
            className="complete-button"
            onClick={() => handleTopicComplete('applications')}
            disabled={completedTopics.includes('applications')}
          >
            {completedTopics.includes('applications') ? 'Completed ✓' : 'Complete Applications Section'}
          </button>
        </motion.div>
      )}

      {/* Completion Reward */}
      {completionPercentage === 100 && (
        <motion.div 
          className="completion-reward"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>🎉 Technical Analysis Expert Unlocked!</h3>
          <p>You've mastered the fundamentals of technical analysis! Ready to test your skills?</p>
          <button className="btn btn-primary">
            Take the Technical Analysis Quiz
          </button>
        </motion.div>
      )}

      <style jsx>{`
        .learning-progress {
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

        .topic-tabs {
          display: flex;
          gap: 16px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .topic-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .topic-tab.active {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .topic-tab:hover {
          transform: translateY(-2px);
        }

        .check-mark {
          color: #4CAF50;
          font-weight: bold;
        }

        .section-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-header h2 {
          font-size: 1.8rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 8px;
        }

        .section-header p {
          color: #666;
          font-size: 1.1rem;
        }

        .divergence-controls {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .demo-button {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .demo-button.bearish {
          background: #f44336;
          color: white;
        }

        .demo-button.bullish {
          background: #4CAF50;
          color: white;
        }

        .demo-button.reset {
          background: #757575;
          color: white;
        }

        .demo-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .chart-demo {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 30px;
        }

        .chart-container {
          margin-bottom: 20px;
        }

        .chart-title {
          text-align: center;
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
        }

        .price-chart, .rsi-chart {
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          height: 150px;
          margin-bottom: 16px;
          position: relative;
          overflow: hidden;
        }

        .rsi-chart {
          background: #fff3cd;
          border-color: #ffc107;
        }

        .chart-subtitle {
          text-align: center;
          font-weight: bold;
          color: #333;
          padding: 8px;
          border-bottom: 1px solid #dee2e6;
        }

        .chart-content {
          height: calc(100% - 40px);
          position: relative;
        }

        .reference-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .rsi-line.level-70 {
          position: absolute;
          top: 30%;
          left: 0;
          right: 0;
          height: 1px;
          background: #f44336;
          border-top: 1px dashed #f44336;
        }

        .rsi-line.level-50 {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #757575;
          border-top: 1px dashed #757575;
        }

        .rsi-line.level-30 {
          position: absolute;
          top: 70%;
          left: 0;
          right: 0;
          height: 1px;
          background: #4CAF50;
          border-top: 1px dashed #4CAF50;
        }

        .level-label {
          position: absolute;
          right: 8px;
          font-size: 0.8rem;
          font-weight: bold;
          background: rgba(255, 255, 255, 0.9);
          padding: 2px 4px;
          border-radius: 3px;
        }

        .level-label.top {
          top: 25%;
          color: #f44336;
        }

        .level-label.middle {
          top: 45%;
          color: #757575;
        }

        .level-label.bottom {
          top: 65%;
          color: #4CAF50;
        }

        .line-points {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .point {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid white;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .high-point {
          background: #f44336;
        }

        .low-point {
          background: #4CAF50;
        }

        .rsi-point {
          background: #ff9800;
        }

        .trend-line {
          position: absolute;
          height: 2px;
          background: #f44336;
          border-radius: 1px;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .trend-line.show {
          opacity: 0.8;
        }

        .trend-line.rsi-trend {
          background: #2196F3;
        }

        .signal-explanation {
          margin-top: 20px;
        }

        .signal-box {
          padding: 20px;
          border-radius: 12px;
          margin: 15px 0;
        }

        .signal-box.bullish {
          background: linear-gradient(135deg, #d5f4e6, #a8e6cf);
          color: #155724;
          border: 2px solid #4CAF50;
        }

        .signal-box.bearish {
          background: linear-gradient(135deg, #fdeaea, #f8d7da);
          color: #721c24;
          border: 2px solid #f44336;
        }

        .signal-box h3 {
          margin-bottom: 12px;
          font-size: 1.2rem;
        }

        .signal-box ul {
          margin: 12px 0;
          padding-left: 20px;
        }

        .signal-box li {
          margin: 8px 0;
          line-height: 1.4;
        }

        .candlestick-explanation {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 30px;
        }

        .candle-anatomy {
          text-align: center;
        }

        .candle-anatomy h3 {
          margin-bottom: 16px;
          color: #333;
        }

        .candle-demo {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin: 20px 0;
        }

        .candle {
          position: relative;
          width: 20px;
          height: 80px;
        }

        .candle.bullish .body {
          background: #4CAF50;
          width: 20px;
          height: 40px;
          position: absolute;
          top: 20px;
          border-radius: 2px;
        }

        .upper-wick, .lower-wick {
          width: 2px;
          height: 20px;
          background: #333;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .upper-wick {
          top: 0;
        }

        .lower-wick {
          bottom: 0;
        }

        .candle-labels {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .label {
          font-size: 0.8rem;
          color: #666;
        }

        .patterns-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .pattern-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .pattern-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .pattern-header h4 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
        }

        .pattern-signals {
          display: flex;
          gap: 8px;
        }

        .signal {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .signal.bullish {
          background: #4CAF50;
          color: white;
        }

        .signal.bearish {
          background: #f44336;
          color: white;
        }

        .signal.neutral {
          background: #757575;
          color: white;
        }

        .pattern-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .pattern-example {
          background: rgba(102, 126, 234, 0.1);
          padding: 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .examples-section {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 30px;
        }

        .examples-section h3 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .example-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .example-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .example-header h4 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
        }

        .metal-icon {
          font-size: 1.5rem;
        }

        .example-content > div {
          margin-bottom: 12px;
          line-height: 1.5;
        }

        .scenario {
          color: #666;
        }

        .result {
          color: #2196F3;
        }

        .lesson {
          color: #4CAF50;
        }

        .checklist-section {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 30px;
        }

        .checklist-section h3 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .checklist {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .checklist-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: rgba(76, 175, 80, 0.1);
          border-radius: 8px;
        }

        .checkmark {
          font-size: 1.2rem;
        }

        .complete-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: bold;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .complete-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .complete-button:disabled {
          background: #4CAF50;
          cursor: not-allowed;
        }

        .completion-reward {
          background: linear-gradient(135deg, #43e97b, #38f9d7);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          color: white;
          margin-top: 40px;
        }

        .completion-reward h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .completion-reward p {
          opacity: 0.9;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .topic-tabs {
            flex-direction: column;
          }
          
          .divergence-controls {
            flex-direction: column;
            align-items: center;
          }
          
          .patterns-grid, .examples-grid {
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

export default TechnicalAnalysis;