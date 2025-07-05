import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, DollarSign, TrendingUp, TrendingDown, RotateCcw, Award } from 'lucide-react';

const TradingGame = ({ updateProgress }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentMetal, setCurrentMetal] = useState(null);
  const [portfolio, setPortfolio] = useState({ cash: 10000, positions: [] });
  const [gameScore, setGameScore] = useState(0);
  const [currentPrices, setCurrentPrices] = useState({});
  const [priceHistory, setPriceHistory] = useState({});
  const [gameRound, setGameRound] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    updateProgress('/trading-game', 30);
  }, [updateProgress]);

  const metals = [
    { 
      symbol: 'CA', 
      name: 'Copper', 
      basePrice: 9500, 
      volatility: 0.03,
      emoji: '⚡',
      description: 'The economic barometer'
    },
    { 
      symbol: 'AH', 
      name: 'Aluminum', 
      basePrice: 2100, 
      volatility: 0.025,
      emoji: '✈️',
      description: 'Light and versatile'
    },
    { 
      symbol: 'NI', 
      name: 'Nickel', 
      basePrice: 16500, 
      volatility: 0.04,
      emoji: '🔋',
      description: 'The battery revolution'
    }
  ];

  const initializeGame = () => {
    const initialPrices = {};
    const initialHistory = {};
    
    metals.forEach(metal => {
      initialPrices[metal.symbol] = metal.basePrice;
      initialHistory[metal.symbol] = [metal.basePrice];
    });
    
    setCurrentPrices(initialPrices);
    setPriceHistory(initialHistory);
    setCurrentMetal(metals[0]);
    setGameStarted(true);
    setGameRound(1);
    setPortfolio({ cash: 10000, positions: [] });
    setGameScore(0);
    setGameComplete(false);
  };

  const generatePriceMovement = () => {
    const newPrices = { ...currentPrices };
    const newHistory = { ...priceHistory };

    metals.forEach(metal => {
      const change = (Math.random() - 0.5) * 2 * metal.volatility;
      const newPrice = Math.round(currentPrices[metal.symbol] * (1 + change));
      newPrices[metal.symbol] = Math.max(newPrice, metal.basePrice * 0.5);
      newHistory[metal.symbol] = [...priceHistory[metal.symbol], newPrices[metal.symbol]].slice(-10);
    });

    setCurrentPrices(newPrices);
    setPriceHistory(newHistory);
  };

  const buyMetal = (amount) => {
    const cost = currentPrices[currentMetal.symbol] * amount;
    if (portfolio.cash >= cost) {
      const newPortfolio = {
        cash: portfolio.cash - cost,
        positions: [
          ...portfolio.positions,
          {
            metal: currentMetal.symbol,
            amount,
            price: currentPrices[currentMetal.symbol],
            type: 'long'
          }
        ]
      };
      setPortfolio(newPortfolio);
      setGameScore(gameScore + 10);
    }
  };

  const sellMetal = (amount) => {
    const revenue = currentPrices[currentMetal.symbol] * amount;
    const newPortfolio = {
      cash: portfolio.cash + revenue,
      positions: [
        ...portfolio.positions,
        {
          metal: currentMetal.symbol,
          amount,
          price: currentPrices[currentMetal.symbol],
          type: 'short'
        }
      ]
    };
    setPortfolio(newPortfolio);
    setGameScore(gameScore + 10);
  };

  const nextRound = () => {
    generatePriceMovement();
    if (gameRound >= 10) {
      endGame();
    } else {
      setGameRound(gameRound + 1);
    }
  };

  const endGame = () => {
    let finalValue = portfolio.cash;
    
    // Calculate P&L for all positions
    portfolio.positions.forEach(position => {
      const currentPrice = currentPrices[position.metal];
      if (position.type === 'long') {
        finalValue += (currentPrice - position.price) * position.amount;
      } else {
        finalValue += (position.price - currentPrice) * position.amount;
      }
    });

    const totalReturn = ((finalValue - 10000) / 10000) * 100;
    setGameScore(Math.round(totalReturn));
    setGameComplete(true);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameComplete(false);
    setCurrentMetal(null);
    setPortfolio({ cash: 10000, positions: [] });
    setGameScore(0);
    setGameRound(0);
  };

  const calculatePortfolioValue = () => {
    let value = portfolio.cash;
    portfolio.positions.forEach(position => {
      const currentPrice = currentPrices[position.metal];
      if (position.type === 'long') {
        value += (currentPrice - position.price) * position.amount;
      } else {
        value += (position.price - currentPrice) * position.amount;
      }
    });
    return Math.round(value);
  };

  const getPriceDirection = (symbol) => {
    const history = priceHistory[symbol];
    if (history && history.length >= 2) {
      return history[history.length - 1] > history[history.length - 2] ? 'up' : 'down';
    }
    return 'neutral';
  };

  if (!gameStarted) {
    return (
      <div className="page-container">
        <div className="page-header">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trading Simulator
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Practice metal trading in a risk-free environment
          </motion.p>
        </div>

        <motion.div 
          className="game-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="intro-icon">
            <Play size={60} />
          </div>
          <h2>Ready to Start Trading?</h2>
          <div className="game-rules">
            <h3>How to Play:</h3>
            <ul>
              <li>You start with $10,000 virtual cash</li>
              <li>Buy or sell metals based on price movements</li>
              <li>Make trading decisions over 10 rounds</li>
              <li>Try to maximize your portfolio value</li>
              <li>Learn from market volatility and timing</li>
            </ul>
          </div>
          <button 
            className="start-game-button"
            onClick={initializeGame}
          >
            <Play size={20} />
            Start Trading Game
          </button>
        </motion.div>

        <style jsx>{`
          .game-intro {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 16px;
            padding: 40px;
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
          }

          .intro-icon {
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

          .game-intro h2 {
            font-size: 1.8rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 30px;
          }

          .game-rules {
            text-align: left;
            margin: 30px 0;
          }

          .game-rules h3 {
            color: #333;
            margin-bottom: 16px;
          }

          .game-rules ul {
            color: #666;
            line-height: 1.8;
          }

          .start-game-button {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 16px 32px;
            border-radius: 12px;
            font-weight: bold;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0 auto;
          }

          .start-game-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </div>
    );
  }

  if (gameComplete) {
    return (
      <div className="page-container">
        <motion.div 
          className="game-results"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="results-header">
            <Award size={60} />
            <h2>Trading Complete!</h2>
            <div className="final-score">
              <span className="score-label">Your Return:</span>
              <span className={`score-value ${gameScore >= 0 ? 'positive' : 'negative'}`}>
                {gameScore >= 0 ? '+' : ''}{gameScore}%
              </span>
            </div>
          </div>

          <div className="portfolio-summary">
            <h3>Final Portfolio</h3>
            <div className="summary-stats">
              <div className="stat">
                <span className="stat-label">Starting Capital</span>
                <span className="stat-value">$10,000</span>
              </div>
              <div className="stat">
                <span className="stat-label">Final Value</span>
                <span className="stat-value">${calculatePortfolioValue().toLocaleString()}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Total Trades</span>
                <span className="stat-value">{portfolio.positions.length}</span>
              </div>
            </div>
          </div>

          <div className="results-actions">
            <button className="play-again-button" onClick={resetGame}>
              <RotateCcw size={20} />
              Play Again
            </button>
          </div>
        </motion.div>

        <style jsx>{`
          .game-results {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 16px;
            padding: 40px;
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
          }

          .results-header {
            margin-bottom: 30px;
          }

          .results-header h2 {
            font-size: 2rem;
            color: #333;
            margin: 20px 0;
          }

          .final-score {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;
            margin: 20px 0;
          }

          .score-label {
            font-size: 1.2rem;
            color: #666;
          }

          .score-value {
            font-size: 2.5rem;
            font-weight: bold;
          }

          .score-value.positive {
            color: #4CAF50;
          }

          .score-value.negative {
            color: #f44336;
          }

          .portfolio-summary h3 {
            color: #333;
            margin-bottom: 20px;
          }

          .summary-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 30px;
          }

          .stat {
            text-align: center;
          }

          .stat-label {
            display: block;
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 4px;
          }

          .stat-value {
            font-size: 1.2rem;
            font-weight: bold;
            color: #333;
          }

          .play-again-button {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0 auto;
          }

          .play-again-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          @media (max-width: 768px) {
            .summary-stats {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="game-header">
        <div className="game-info">
          <span>Round {gameRound}/10</span>
          <span>Portfolio: ${calculatePortfolioValue().toLocaleString()}</span>
          <span>Cash: ${portfolio.cash.toLocaleString()}</span>
        </div>
      </div>

      <div className="trading-interface">
        <div className="metals-selector">
          {metals.map(metal => (
            <button
              key={metal.symbol}
              className={`metal-button ${currentMetal?.symbol === metal.symbol ? 'active' : ''}`}
              onClick={() => setCurrentMetal(metal)}
            >
              <span className="metal-emoji">{metal.emoji}</span>
              <div className="metal-info">
                <span className="metal-name">{metal.name}</span>
                <span className="metal-symbol">{metal.symbol}</span>
              </div>
              <div className="price-info">
                <span className={`price ${getPriceDirection(metal.symbol)}`}>
                  ${currentPrices[metal.symbol]?.toLocaleString()}
                </span>
                {getPriceDirection(metal.symbol) === 'up' ? (
                  <TrendingUp size={16} color="#4CAF50" />
                ) : getPriceDirection(metal.symbol) === 'down' ? (
                  <TrendingDown size={16} color="#f44336" />
                ) : null}
              </div>
            </button>
          ))}
        </div>

        {currentMetal && (
          <motion.div 
            className="trading-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3>Trading {currentMetal.name}</h3>
            <p className="metal-description">{currentMetal.description}</p>
            
            <div className="current-price">
              <span className="price-label">Current Price:</span>
              <span className="price-value">
                ${currentPrices[currentMetal.symbol]?.toLocaleString()}/tonne
              </span>
            </div>

            <div className="trading-actions">
              <button 
                className="trade-button buy"
                onClick={() => buyMetal(1)}
                disabled={portfolio.cash < currentPrices[currentMetal.symbol]}
              >
                <TrendingUp size={20} />
                Buy 1 Tonne
              </button>
              <button 
                className="trade-button sell"
                onClick={() => sellMetal(1)}
              >
                <TrendingDown size={20} />
                Sell 1 Tonne
              </button>
            </div>
          </motion.div>
        )}

        <div className="game-controls">
          <button className="next-round-button" onClick={nextRound}>
            Next Round
          </button>
        </div>
      </div>

      <style jsx>{`
        .game-header {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 20px;
        }

        .game-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: bold;
          color: #333;
          flex-wrap: wrap;
          gap: 16px;
        }

        .trading-interface {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .metals-selector {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .metal-button {
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .metal-button:hover {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.1);
        }

        .metal-button.active {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.2);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .metal-emoji {
          font-size: 1.5rem;
        }

        .metal-info {
          flex: 1;
          text-align: left;
        }

        .metal-name {
          display: block;
          font-weight: bold;
          color: #333;
        }

        .metal-symbol {
          display: block;
          font-size: 0.9rem;
          color: #666;
        }

        .price-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .price {
          font-weight: bold;
        }

        .price.up {
          color: #4CAF50;
        }

        .price.down {
          color: #f44336;
        }

        .trading-panel {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
        }

        .trading-panel h3 {
          font-size: 1.4rem;
          color: #333;
          margin-bottom: 8px;
        }

        .metal-description {
          color: #666;
          margin-bottom: 20px;
        }

        .current-price {
          margin: 20px 0;
        }

        .price-label {
          display: block;
          color: #666;
          margin-bottom: 4px;
        }

        .price-value {
          font-size: 1.8rem;
          font-weight: bold;
          color: #333;
        }

        .trading-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin: 20px 0;
        }

        .trade-button {
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

        .trade-button.buy {
          background: #4CAF50;
          color: white;
        }

        .trade-button.sell {
          background: #f44336;
          color: white;
        }

        .trade-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .trade-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .game-controls {
          text-align: center;
        }

        .next-round-button {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: bold;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .next-round-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .metals-selector {
            grid-template-columns: 1fr;
          }

          .trading-actions {
            flex-direction: column;
          }

          .game-info {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default TradingGame;