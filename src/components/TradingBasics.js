import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Globe, DollarSign, AlertTriangle, Users } from 'lucide-react';

const TradingBasics = ({ updateProgress }) => {
  useEffect(() => {
    updateProgress('/trading-basics', 15);
  }, [updateProgress]);

  const tradingConcepts = [
    {
      id: 'contracts',
      title: 'Understanding Futures Contracts',
      icon: TrendingUp,
      color: '#667eea',
      content: [
        'A legally binding agreement to deliver or accept delivery of metal at a future date',
        'Allows participants to lock in prices months or years ahead',
        'Foundation for hedging, speculation, and arbitrage activities',
        'Different from spot transactions that settle immediately'
      ]
    },
    {
      id: 'dating',
      title: 'LME Date Structure',
      icon: Clock,
      color: '#764ba2',
      content: [
        'Daily prompt dates up to three months forward',
        'Monthly contracts from 3 months to 63 months',
        'Additional 27 monthly contracts extending to 123 months (10+ years)',
        'Unique system different from other exchanges'
      ]
    },
    {
      id: 'terminology',
      title: 'Trading Terminology',
      icon: Globe,
      color: '#f093fb',
      content: [
        'Bid: Price buyers are willing to pay',
        'Offer/Ask: Price sellers are willing to accept',
        'Contango: Forward prices exceed spot prices',
        'Backwardation: Spot prices exceed forward prices',
        'Basis: Price differential between contracts or locations'
      ]
    },
    {
      id: 'orders',
      title: 'Order Types',
      icon: DollarSign,
      color: '#4facfe',
      content: [
        'Market Orders: Execute immediately at best available price',
        'Limit Orders: Execute only at specified price or better',
        'Stop Orders: Trigger when market reaches specific level',
        'Inter-office Market: Complex negotiations between parties'
      ]
    },
    {
      id: 'physical',
      title: 'Physical vs Financial',
      icon: Users,
      color: '#43e97b',
      content: [
        'Most contracts close financially without physical delivery',
        'Physical delivery option ensures price convergence',
        'Warehouse warrants represent title to metal',
        'Enables ownership transfer without moving metal'
      ]
    },
    {
      id: 'risks',
      title: 'Risk Management',
      icon: AlertTriangle,
      color: '#fa709a',
      content: [
        'Position limits prevent excessive exposure',
        'Stop-losses automatically exit losing positions',
        'Value at Risk (VaR) models estimate potential losses',
        'Never risk more than 1-2% of capital per trade'
      ]
    }
  ];

  const contractSpecs = [
    { metal: 'Copper', symbol: 'CA', size: '25 tonnes', tick: '$0.50' },
    { metal: 'Aluminum', symbol: 'AH', size: '25 tonnes', tick: '$0.50' },
    { metal: 'Nickel', symbol: 'NI', size: '6 tonnes', tick: '$5.00' },
    { metal: 'Zinc', symbol: 'ZS', size: '25 tonnes', tick: '$0.50' },
    { metal: 'Lead', symbol: 'PB', size: '25 tonnes', tick: '$0.50' },
    { metal: 'Tin', symbol: 'SN', size: '5 tonnes', tick: '$5.00' }
  ];

  const trumpTariffInfo = {
    title: 'Real World Example: Trump Tariff Impact',
    description: 'The CME copper contract trades at a significant premium to LME copper due to US tariffs',
    details: [
      'Premium has exceeded $1,200 per tonne (over 10% of LME price)',
      'CME requires delivery within US and includes applicable tariffs',
      'LME offers international delivery without US tariffs',
      'Creates opportunities for traders who can navigate physical logistics',
      'Remains highly volatile as policies evolve'
    ]
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trading Basics
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Master the fundamentals of metal trading and market operations
        </motion.p>
      </div>

      {/* Key Concepts */}
      <div className="concepts-grid">
        {tradingConcepts.map((concept, index) => (
          <motion.div
            key={concept.id}
            className="concept-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="concept-header">
              <div 
                className="concept-icon"
                style={{ backgroundColor: concept.color }}
              >
                <concept.icon size={24} />
              </div>
              <h3 className="concept-title">{concept.title}</h3>
            </div>
            <ul className="concept-content">
              {concept.content.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Contract Specifications */}
      <motion.div 
        className="specs-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="section-title">Contract Specifications</h2>
        <div className="specs-table">
          <div className="table-header">
            <div className="header-cell">Metal</div>
            <div className="header-cell">Symbol</div>
            <div className="header-cell">Lot Size</div>
            <div className="header-cell">Tick Size</div>
          </div>
          {contractSpecs.map((spec, index) => (
            <motion.div
              key={spec.symbol}
              className="table-row"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <div className="table-cell metal-name">{spec.metal}</div>
              <div className="table-cell symbol">{spec.symbol}</div>
              <div className="table-cell">{spec.size}</div>
              <div className="table-cell">{spec.tick}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Real World Example */}
      <motion.div 
        className="example-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="example-card">
          <h3 className="example-title">{trumpTariffInfo.title}</h3>
          <p className="example-description">{trumpTariffInfo.description}</p>
          <ul className="example-details">
            {trumpTariffInfo.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <div className="example-note">
            <AlertTriangle size={20} />
            <span>This example shows how geopolitical events directly impact trading opportunities</span>
          </div>
        </div>
      </motion.div>

      {/* Trading Success Tips */}
      <motion.div 
        className="tips-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <h2 className="section-title">Keys to Successful Trading</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>🎯 Risk Management</h4>
            <p>Preserve capital during adverse markets. It's better to miss opportunities than lose money on bad trades.</p>
          </div>
          <div className="tip-card">
            <h4>📚 Continuous Learning</h4>
            <p>Markets evolve constantly. Stay current with technological changes, regulations, and market dynamics.</p>
          </div>
          <div className="tip-card">
            <h4>🔍 Analytical Capability</h4>
            <p>Combine fundamental supply/demand analysis with technical price patterns for better decision making.</p>
          </div>
          <div className="tip-card">
            <h4>🧘 Emotional Discipline</h4>
            <p>Stick to your trading plan and don't let emotions drive decisions during volatile market periods.</p>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .concepts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .concept-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .concept-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .concept-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .concept-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .concept-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
        }

        .concept-content {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .concept-content li {
          padding: 8px 0;
          padding-left: 20px;
          position: relative;
          color: #666;
          line-height: 1.6;
        }

        .concept-content li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .specs-section {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 40px;
        }

        .section-title {
          text-align: center;
          font-size: 1.8rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 30px;
        }

        .specs-table {
          max-width: 600px;
          margin: 0 auto;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 2fr 1fr;
          gap: 16px;
          padding: 16px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 8px;
          margin-bottom: 8px;
          font-weight: bold;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 2fr 1fr;
          gap: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }

        .table-row:hover {
          background: rgba(102, 126, 234, 0.1);
        }

        .header-cell, .table-cell {
          text-align: left;
        }

        .metal-name {
          font-weight: bold;
          color: #333;
        }

        .symbol {
          font-family: 'Courier New', monospace;
          background: rgba(102, 126, 234, 0.1);
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: bold;
        }

        .example-section {
          margin-bottom: 40px;
        }

        .example-card {
          background: linear-gradient(135deg, rgba(244, 67, 54, 0.1), rgba(233, 30, 99, 0.1));
          border: 2px solid rgba(244, 67, 54, 0.2);
          border-radius: 16px;
          padding: 30px;
        }

        .example-title {
          font-size: 1.4rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 12px;
        }

        .example-description {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .example-details {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }

        .example-details li {
          padding: 8px 0;
          padding-left: 20px;
          position: relative;
          color: #555;
          line-height: 1.6;
        }

        .example-details li:before {
          content: '📊';
          position: absolute;
          left: 0;
        }

        .example-note {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(244, 67, 54, 0.1);
          border-radius: 8px;
          color: #d32f2f;
          font-weight: 500;
        }

        .tips-section {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 40px;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .tip-card {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .tip-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .tip-card h4 {
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 12px;
        }

        .tip-card p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .concepts-grid {
            grid-template-columns: 1fr;
          }

          .table-header, .table-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .tips-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default TradingBasics;