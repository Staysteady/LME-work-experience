import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Car, Building, Cpu, Battery, Wrench, X, Info } from 'lucide-react';

const SixMetals = ({ updateProgress }) => {
  const [selectedMetal, setSelectedMetal] = useState(null);
  const [discoveredMetals, setDiscoveredMetals] = useState([]);

  useEffect(() => {
    updateProgress('/six-metals', 15);
  }, [updateProgress]);

  const metals = [
    {
      id: 'copper',
      name: 'Copper',
      symbol: 'CA',
      nickname: 'Dr. Copper',
      color: '#CD7F32',
      icon: '🔸',
      emoji: '⚡',
      price: '$9,500',
      lotSize: '25 tonnes',
      tickSize: '$0.50',
      consumption: '28M tonnes/year',
      mainProducers: ['Chile', 'Peru', 'China'],
      description: 'Known as "Dr. Copper" for its ability to diagnose economic health. Exceptional electrical conductivity makes it irreplaceable in power generation and electronics.',
      uses: [
        'Electrical wiring and power transmission',
        'Electronics and telecommunications',
        'Construction and architecture',
        'Transportation (cars, trains, ships)',
        'Renewable energy systems',
        'Air conditioning and refrigeration'
      ],
      funFacts: [
        'A single wind turbine requires 3-5 tonnes of copper',
        'China consumes over half of global copper production',
        'Copper is 100% recyclable without losing properties',
        'The Statue of Liberty contains 179,000 pounds of copper'
      ],
      keyPoints: [
        'Most economically sensitive metal',
        'Essential for electrical conductivity',
        'Growing demand from renewable energy',
        'China dominates global consumption'
      ]
    },
    {
      id: 'aluminum',
      name: 'Aluminum',
      symbol: 'AH',
      nickname: 'The Light Metal',
      color: '#C0C0C0',
      icon: '🔹',
      emoji: '✈️',
      price: '$2,100',
      lotSize: '25 tonnes',
      tickSize: '$0.50',
      consumption: '65M tonnes/year',
      mainProducers: ['China', 'Russia', 'Canada'],
      description: 'The most abundant metal in Earth\'s crust. Combines lightness with strength, making it essential for transportation and packaging.',
      uses: [
        'Aerospace and aviation',
        'Automotive industry (lightweighting)',
        'Food and beverage packaging',
        'Construction and architecture',
        'Electronics and appliances',
        'Transportation infrastructure'
      ],
      funFacts: [
        'Aluminum is 1/3 the weight of steel',
        'Takes 13,000-15,000 kWh to produce 1 tonne',
        'China produces 60% but has limited bauxite reserves',
        'Aluminum cans are recycled back to shelves in 60 days'
      ],
      keyPoints: [
        'Extremely energy-intensive to produce',
        'Critical for transportation lightweighting',
        'China dominates global production',
        'Highly recyclable metal'
      ]
    },
    {
      id: 'nickel',
      name: 'Nickel',
      symbol: 'NI',
      nickname: 'The Battery Metal',
      color: '#727472',
      icon: '🔋',
      emoji: '🔋',
      price: '$16,500',
      lotSize: '6 tonnes',
      tickSize: '$5.00',
      consumption: '2.7M tonnes/year',
      mainProducers: ['Indonesia', 'Philippines', 'Russia'],
      description: 'Corrosion-resistant metal vital for stainless steel. The electric vehicle revolution has transformed nickel dynamics with battery applications.',
      uses: [
        'Stainless steel production (70% of demand)',
        'Electric vehicle batteries',
        'Aerospace and defense',
        'Chemical processing equipment',
        'Coinage and jewelry',
        'Marine applications'
      ],
      funFacts: [
        'Battery-grade nickel commands premium prices',
        'Indonesia emerged as dominant producer recently',
        'Essential for lithium-ion battery cathodes',
        'Stainless steel contains 8-12% nickel'
      ],
      keyPoints: [
        'Transformed by EV battery demand',
        'Indonesia dominates global supply',
        'Two distinct markets: stainless vs battery grade',
        'Smaller contract size due to higher value'
      ]
    },
    {
      id: 'zinc',
      name: 'Zinc',
      symbol: 'ZS',
      nickname: 'The Protector',
      color: '#B8860B',
      icon: '🛡️',
      emoji: '🛡️',
      price: '$2,800',
      lotSize: '25 tonnes',
      tickSize: '$0.50',
      consumption: '14M tonnes/year',
      mainProducers: ['China', 'Peru', 'Australia'],
      description: 'Primarily used for galvanizing steel to prevent corrosion. Protects everything from automobiles to infrastructure.',
      uses: [
        'Galvanizing steel (corrosion protection)',
        'Die-casting for automotive parts',
        'Brass and bronze production',
        'Batteries and electronics',
        'Construction materials',
        'Nutritional supplements'
      ],
      funFacts: [
        'Galvanizing accounts for 50% of zinc consumption',
        'China is both largest producer and consumer',
        'Essential for immune system function',
        'Zinc coating can last 50+ years on steel'
      ],
      keyPoints: [
        'Closely tied to construction cycles',
        'China dominates supply and demand',
        'Seasonal patterns in consumption',
        'Critical for infrastructure protection'
      ]
    },
    {
      id: 'lead',
      name: 'Lead',
      symbol: 'PB',
      nickname: 'The Power Metal',
      color: '#2F4F4F',
      icon: '🔋',
      emoji: '🚗',
      price: '$2,100',
      lotSize: '25 tonnes',
      tickSize: '$0.50',
      consumption: '12M tonnes/year',
      mainProducers: ['China', 'Australia', 'USA'],
      description: 'Despite environmental concerns, lead remains essential for automotive and industrial batteries. High recycling rates make secondary supply crucial.',
      uses: [
        'Automotive batteries (85% of demand)',
        'Industrial and backup power systems',
        'Ammunition and firearms',
        'Radiation shielding',
        'Cable sheathing',
        'Soldering and welding'
      ],
      funFacts: [
        'Over 60% comes from recycling in developed markets',
        'Average car battery lasts 3-5 years',
        'Lead-acid batteries invented in 1859',
        'Recycling rate exceeds 95% in many countries'
      ],
      keyPoints: [
        'Battery replacement drives demand cycles',
        'High recycling rates affect pricing',
        'Environmental regulations influence markets',
        'Automotive industry dominates consumption'
      ]
    },
    {
      id: 'tin',
      name: 'Tin',
      symbol: 'SN',
      nickname: 'The Connector',
      color: '#D2B48C',
      icon: '🔧',
      emoji: '💾',
      price: '$25,000',
      lotSize: '5 tonnes',
      tickSize: '$5.00',
      consumption: '300K tonnes/year',
      mainProducers: ['China', 'Indonesia', 'Myanmar'],
      description: 'The smallest LME market by volume. Essential for soldering in electronics manufacturing, making it critical for the tech industry.',
      uses: [
        'Electronics soldering (50% of demand)',
        'Tinplate for food packaging',
        'Chemicals and compounds',
        'Float glass production',
        'Alloys and bearing metals',
        'Specialty applications'
      ],
      funFacts: [
        'Smallest LME market creates high volatility',
        'Essential for semiconductor manufacturing',
        'Myanmar and Indonesia control supply',
        'Tin cans actually contain very little tin today'
      ],
      keyPoints: [
        'Highly volatile due to small market size',
        'Electronics manufacturing drives demand',
        'Supply concentrated in few countries',
        'Smallest contract size reflects scarcity'
      ]
    }
  ];

  const handleMetalClick = (metal) => {
    setSelectedMetal(metal);
    if (!discoveredMetals.includes(metal.id)) {
      setDiscoveredMetals([...discoveredMetals, metal.id]);
    }
  };

  const completionPercentage = Math.round((discoveredMetals.length / metals.length) * 100);

  return (
    <div className="page-container">
      <div className="page-header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Six Base Metals
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover the metals that power our modern world
        </motion.p>
      </div>

      {/* Progress Indicator */}
      <motion.div 
        className="discovery-progress"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="progress-info">
          <span>Discovery Progress: {completionPercentage}%</span>
          <span>{discoveredMetals.length} of {metals.length} metals explored</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </motion.div>

      {/* Metals Grid */}
      <div className="metals-grid">
        {metals.map((metal, index) => (
          <motion.div
            key={metal.id}
            className={`metal-card ${discoveredMetals.includes(metal.id) ? 'discovered' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleMetalClick(metal)}
          >
            <div className="metal-header">
              <div 
                className="metal-icon"
                style={{ backgroundColor: metal.color }}
              >
                <span className="metal-emoji">{metal.emoji}</span>
              </div>
              <div className="metal-info">
                <h3 className="metal-name">{metal.name}</h3>
                <p className="metal-symbol">Symbol: {metal.symbol}</p>
                <p className="metal-nickname">{metal.nickname}</p>
              </div>
              {discoveredMetals.includes(metal.id) && (
                <motion.div 
                  className="discovered-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ✓
                </motion.div>
              )}
            </div>
            
            <div className="metal-preview">
              <div className="price-info">
                <span className="price-label">Current Price:</span>
                <span className="price-value">{metal.price}/tonne</span>
              </div>
              <p className="metal-description">{metal.description}</p>
              <button className="explore-button">
                <Info size={16} />
                Explore Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Metal Detail Modal */}
      <AnimatePresence>
        {selectedMetal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMetal(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-title-section">
                  <div 
                    className="modal-metal-icon"
                    style={{ backgroundColor: selectedMetal.color }}
                  >
                    <span>{selectedMetal.emoji}</span>
                  </div>
                  <div>
                    <h2>{selectedMetal.name}</h2>
                    <p>{selectedMetal.nickname}</p>
                  </div>
                </div>
                <button 
                  className="close-button"
                  onClick={() => setSelectedMetal(null)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="modal-body">
                <div className="specs-section">
                  <h3>Trading Specifications</h3>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">Symbol:</span>
                      <span className="spec-value">{selectedMetal.symbol}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Lot Size:</span>
                      <span className="spec-value">{selectedMetal.lotSize}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Tick Size:</span>
                      <span className="spec-value">{selectedMetal.tickSize}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Global Consumption:</span>
                      <span className="spec-value">{selectedMetal.consumption}</span>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <h3>Description</h3>
                  <p>{selectedMetal.description}</p>
                </div>

                <div className="content-section">
                  <h3>Main Uses</h3>
                  <ul className="uses-list">
                    {selectedMetal.uses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>

                <div className="content-section">
                  <h3>Key Market Points</h3>
                  <ul className="key-points-list">
                    {selectedMetal.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="content-section">
                  <h3>Fun Facts</h3>
                  <ul className="fun-facts-list">
                    {selectedMetal.funFacts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </div>

                <div className="content-section">
                  <h3>Main Producers</h3>
                  <div className="producers-list">
                    {selectedMetal.mainProducers.map((producer, index) => (
                      <span key={index} className="producer-badge">
                        {producer}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Completion Reward */}
      {completionPercentage === 100 && (
        <motion.div 
          className="completion-reward"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>🎉 Congratulations! Metal Expert Unlocked!</h3>
          <p>You've discovered all six base metals! Ready to learn about trading strategies?</p>
          <button className="btn btn-primary">
            Continue to Trading Basics
          </button>
        </motion.div>
      )}

      <style jsx>{`
        .discovery-progress {
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

        .metals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .metal-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .metal-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .metal-card.discovered {
          border-color: #4CAF50;
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(255, 255, 255, 0.95));
        }

        .metal-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          position: relative;
        }

        .metal-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
        }

        .metal-emoji {
          font-size: 28px;
        }

        .metal-info {
          flex: 1;
        }

        .metal-name {
          font-size: 1.4rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 4px;
        }

        .metal-symbol {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 4px;
        }

        .metal-nickname {
          font-size: 0.8rem;
          color: #888;
          font-style: italic;
        }

        .discovered-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 28px;
          height: 28px;
          background: #4CAF50;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 12px;
        }

        .metal-preview {
          margin-top: 16px;
        }

        .price-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          padding: 8px 12px;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 8px;
        }

        .price-label {
          font-size: 0.9rem;
          color: #666;
        }

        .price-value {
          font-weight: bold;
          color: #333;
        }

        .metal-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 16px;
          font-size: 0.9rem;
        }

        .explore-button {
          width: 100%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .explore-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          border-bottom: 1px solid #eee;
        }

        .modal-title-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .modal-metal-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 28px;
        }

        .modal-header h2 {
          font-size: 1.8rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 4px;
        }

        .modal-header p {
          color: #666;
          font-style: italic;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background-color 0.2s;
        }

        .close-button:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .modal-body {
          padding: 24px;
        }

        .specs-section {
          margin-bottom: 24px;
        }

        .specs-section h3 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 16px;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: rgba(102, 126, 234, 0.05);
          border-radius: 8px;
        }

        .spec-label {
          font-size: 0.9rem;
          color: #666;
        }

        .spec-value {
          font-weight: bold;
          color: #333;
        }

        .content-section {
          margin-bottom: 24px;
        }

        .content-section h3 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 12px;
        }

        .content-section p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .uses-list, .key-points-list, .fun-facts-list {
          list-style: none;
          padding: 0;
        }

        .uses-list li, .key-points-list li, .fun-facts-list li {
          padding: 8px 0;
          padding-left: 20px;
          position: relative;
          color: #555;
          line-height: 1.6;
        }

        .uses-list li:before {
          content: '🔧';
          position: absolute;
          left: 0;
        }

        .key-points-list li:before {
          content: '📊';
          position: absolute;
          left: 0;
        }

        .fun-facts-list li:before {
          content: '💡';
          position: absolute;
          left: 0;
        }

        .producers-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .producer-badge {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: bold;
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
          .metals-grid {
            grid-template-columns: 1fr;
          }
          
          .modal-content {
            margin: 10px;
            max-height: 95vh;
          }
          
          .specs-grid {
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

export default SixMetals;