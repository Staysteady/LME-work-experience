import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';

const QuizSection = ({ updateProgress }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    updateProgress('/quiz', 25);
  }, [updateProgress]);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the LME?",
      options: [
        "London Money Exchange",
        "London Metal Exchange",
        "Large Market Exchange",
        "Limited Metal Exchange"
      ],
      correct: 1,
      explanation: "The LME stands for London Metal Exchange - the world's premier marketplace for industrial metals trading."
    },
    {
      id: 2,
      question: "How much annual notional value does the LME handle?",
      options: [
        "$5 trillion",
        "$10 trillion", 
        "$15 trillion",
        "$20 trillion"
      ],
      correct: 2,
      explanation: "The LME handles over $15 trillion in annual notional value, making it the world's largest metals marketplace."
    },
    {
      id: 3,
      question: "Which metal is known as 'Dr. Copper'?",
      options: [
        "Aluminum",
        "Copper",
        "Nickel",
        "Zinc"
      ],
      correct: 1,
      explanation: "Copper is known as 'Dr. Copper' for its ability to diagnose economic health due to its widespread use in economic activity."
    },
    {
      id: 4,
      question: "What is the lot size for a copper contract on the LME?",
      options: [
        "5 tonnes",
        "10 tonnes",
        "25 tonnes",
        "50 tonnes"
      ],
      correct: 2,
      explanation: "Copper contracts on the LME are traded in 25-tonne lots with a minimum price movement of $0.50 per tonne."
    },
    {
      id: 5,
      question: "Which metal has the smallest lot size on the LME?",
      options: [
        "Tin (5 tonnes)",
        "Nickel (6 tonnes)", 
        "Lead (25 tonnes)",
        "Zinc (25 tonnes)"
      ],
      correct: 0,
      explanation: "Tin has the smallest contract size at 5 tonnes, reflecting its scarcity and higher value in the market."
    },
    {
      id: 6,
      question: "What does RSI divergence signal?",
      options: [
        "Trend continuation",
        "Market volatility",
        "Potential trend reversal",
        "Volume increase"
      ],
      correct: 2,
      explanation: "RSI divergence occurs when price and RSI move in opposite directions, signaling potential trend weakness and possible reversal."
    },
    {
      id: 7,
      question: "In bearish divergence, what happens to price and RSI?",
      options: [
        "Both move higher",
        "Price moves higher, RSI moves lower",
        "Both move lower", 
        "Price moves lower, RSI moves higher"
      ],
      correct: 1,
      explanation: "In bearish divergence, price makes higher highs while RSI makes lower highs, suggesting weakening upward momentum."
    },
    {
      id: 8,
      question: "What is the primary use of zinc?",
      options: [
        "Electronics soldering",
        "Galvanizing steel",
        "Battery production",
        "Electrical wiring"
      ],
      correct: 1,
      explanation: "Zinc is primarily used for galvanizing steel to prevent corrosion, protecting everything from automobiles to infrastructure."
    },
    {
      id: 9,
      question: "Which metal is essential for electric vehicle batteries?",
      options: [
        "Lead",
        "Tin",
        "Nickel",
        "Zinc"
      ],
      correct: 2,
      explanation: "Nickel is essential for electric vehicle batteries, particularly in lithium-ion battery cathodes, transforming the nickel market."
    },
    {
      id: 10,
      question: "What does a Doji candlestick pattern indicate?",
      options: [
        "Strong bullish trend",
        "Strong bearish trend",
        "Market indecision",
        "High volume"
      ],
      correct: 2,
      explanation: "A Doji occurs when open and close prices are virtually identical, signaling market indecision and potential reversal."
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishQuiz = () => {
    let correctAnswers = 0;
    quizQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
    setScore(0);
    setQuizStarted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 90) {
      return { message: "🎉 LME Expert! Outstanding performance!", color: "#4CAF50" };
    } else if (percentage >= 80) {
      return { message: "🌟 Great job! You're well on your way to mastering metals trading!", color: "#43e97b" };
    } else if (percentage >= 70) {
      return { message: "👍 Good work! Keep studying to improve your understanding!", color: "#ff9800" };
    } else if (percentage >= 60) {
      return { message: "📚 Not bad! Review the materials and try again!", color: "#2196F3" };
    } else {
      return { message: "💪 Keep learning! The basics need more practice!", color: "#f44336" };
    }
  };

  if (!quizStarted) {
    return (
      <div className="page-container">
        <div className="page-header">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Knowledge Quiz
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Test your understanding of the LME and metal trading
          </motion.p>
        </div>

        <motion.div 
          className="quiz-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="intro-icon">
            <Brain size={60} />
          </div>
          <h2>Ready to Test Your Knowledge?</h2>
          <div className="quiz-stats">
            <div className="stat">
              <span className="stat-number">{quizQuestions.length}</span>
              <span className="stat-label">Questions</span>
            </div>
            <div className="stat">
              <span className="stat-number">10</span>
              <span className="stat-label">Minutes</span>
            </div>
            <div className="stat">
              <span className="stat-number">70%</span>
              <span className="stat-label">To Pass</span>
            </div>
          </div>
          <p className="quiz-description">
            This quiz covers everything you've learned about the LME, the six base metals, 
            and technical analysis. Take your time and choose the best answer for each question.
          </p>
          <button 
            className="start-quiz-button"
            onClick={() => setQuizStarted(true)}
          >
            <Brain size={20} />
            Start Quiz
          </button>
        </motion.div>

        <style jsx>{`
          .quiz-intro {
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

          .quiz-intro h2 {
            font-size: 1.8rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 30px;
          }

          .quiz-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 30px 0;
          }

          .stat {
            text-align: center;
          }

          .stat-number {
            display: block;
            font-size: 2rem;
            font-weight: bold;
            background: linear-gradient(45deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .stat-label {
            font-size: 0.9rem;
            color: #666;
            margin-top: 4px;
          }

          .quiz-description {
            color: #666;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .start-quiz-button {
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

          .start-quiz-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }

          @media (max-width: 768px) {
            .quiz-stats {
              grid-template-columns: 1fr;
              gap: 16px;
            }
          }
        `}</style>
      </div>
    );
  }

  if (showResults) {
    const scoreMessage = getScoreMessage();
    const percentage = Math.round((score / quizQuestions.length) * 100);

    return (
      <div className="page-container">
        <motion.div 
          className="quiz-results"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="results-header">
            <div className="score-circle" style={{ borderColor: scoreMessage.color }}>
              <span className="score-percentage" style={{ color: scoreMessage.color }}>
                {percentage}%
              </span>
            </div>
            <h2>Quiz Complete!</h2>
            <p style={{ color: scoreMessage.color }}>{scoreMessage.message}</p>
          </div>

          <div className="score-breakdown">
            <div className="breakdown-item">
              <CheckCircle size={20} color="#4CAF50" />
              <span>Correct: {score}</span>
            </div>
            <div className="breakdown-item">
              <XCircle size={20} color="#f44336" />
              <span>Incorrect: {quizQuestions.length - score}</span>
            </div>
            <div className="breakdown-item">
              <Award size={20} color="#ff9800" />
              <span>Score: {percentage}%</span>
            </div>
          </div>

          <div className="question-review">
            <h3>Review Your Answers</h3>
            <div className="review-list">
              {quizQuestions.map((question, index) => (
                <div 
                  key={question.id}
                  className={`review-item ${userAnswers[index] === question.correct ? 'correct' : 'incorrect'}`}
                >
                  <div className="review-header">
                    <span className="question-number">Q{index + 1}</span>
                    {userAnswers[index] === question.correct ? (
                      <CheckCircle size={16} color="#4CAF50" />
                    ) : (
                      <XCircle size={16} color="#f44336" />
                    )}
                  </div>
                  <p className="review-question">{question.question}</p>
                  <p className="review-answer">
                    <strong>Your answer:</strong> {question.options[userAnswers[index]]}
                  </p>
                  {userAnswers[index] !== question.correct && (
                    <p className="correct-answer">
                      <strong>Correct answer:</strong> {question.options[question.correct]}
                    </p>
                  )}
                  <p className="explanation">{question.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="results-actions">
            <button className="retry-button" onClick={resetQuiz}>
              <RotateCcw size={20} />
              Try Again
            </button>
            <button className="continue-button">
              Continue Learning
            </button>
          </div>
        </motion.div>

        <style jsx>{`
          .quiz-results {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 16px;
            padding: 30px;
            max-width: 800px;
            margin: 0 auto;
          }

          .results-header {
            text-align: center;
            margin-bottom: 30px;
          }

          .score-circle {
            width: 120px;
            height: 120px;
            border: 8px solid;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
          }

          .score-percentage {
            font-size: 2rem;
            font-weight: bold;
          }

          .results-header h2 {
            font-size: 1.8rem;
            color: #333;
            margin-bottom: 12px;
          }

          .score-breakdown {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 30px;
            flex-wrap: wrap;
          }

          .breakdown-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: bold;
          }

          .question-review h3 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
          }

          .review-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 30px;
          }

          .review-item {
            padding: 16px;
            border-radius: 8px;
            border-left: 4px solid;
          }

          .review-item.correct {
            background: rgba(76, 175, 80, 0.1);
            border-left-color: #4CAF50;
          }

          .review-item.incorrect {
            background: rgba(244, 67, 54, 0.1);
            border-left-color: #f44336;
          }

          .review-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
          }

          .question-number {
            font-weight: bold;
            color: #333;
          }

          .review-question {
            font-weight: bold;
            margin-bottom: 8px;
            color: #333;
          }

          .review-answer, .correct-answer {
            margin-bottom: 8px;
            color: #666;
          }

          .explanation {
            font-style: italic;
            color: #666;
            font-size: 0.9rem;
          }

          .results-actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .retry-button, .continue-button {
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

          .retry-button {
            background: #757575;
            color: white;
          }

          .continue-button {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
          }

          .retry-button:hover, .continue-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          @media (max-width: 768px) {
            .score-breakdown {
              flex-direction: column;
              align-items: center;
              gap: 16px;
            }

            .results-actions {
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="page-container">
      <div className="quiz-header">
        <div className="quiz-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="progress-text">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
        </div>
      </div>

      <motion.div 
        className="question-container"
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        <div className="question-card">
          <div className="question-header">
            <span className="question-number">Question {currentQuestion + 1}</span>
          </div>
          <h2 className="question-text">{question.question}</h2>
          
          <div className="answer-options">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                className={`answer-option ${userAnswers[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="option-letter">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="option-text">{option}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="quiz-navigation">
        <button 
          className="nav-button prev"
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        
        <button 
          className="nav-button next"
          onClick={handleNextQuestion}
          disabled={userAnswers[currentQuestion] === undefined}
        >
          {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
        </button>
      </div>

      <style jsx>{`
        .quiz-header {
          margin-bottom: 30px;
        }

        .quiz-progress {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          padding: 16px;
        }

        .progress-bar {
          height: 8px;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.3s ease;
        }

        .progress-text {
          text-align: center;
          display: block;
          color: #666;
          font-weight: 500;
        }

        .question-container {
          margin-bottom: 30px;
        }

        .question-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 30px;
          max-width: 700px;
          margin: 0 auto;
        }

        .question-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .question-number {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
        }

        .question-text {
          font-size: 1.4rem;
          font-weight: bold;
          color: #333;
          text-align: center;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .answer-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .answer-option {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.8);
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
        }

        .answer-option:hover {
          background: rgba(102, 126, 234, 0.1);
          border-color: #667eea;
        }

        .answer-option.selected {
          background: rgba(102, 126, 234, 0.2);
          border-color: #667eea;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .option-letter {
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .option-text {
          flex: 1;
          line-height: 1.5;
        }

        .quiz-navigation {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          max-width: 700px;
          margin: 0 auto;
        }

        .nav-button {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-button.prev {
          background: #757575;
          color: white;
        }

        .nav-button.next {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .nav-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 768px) {
          .question-card {
            padding: 20px;
          }

          .question-text {
            font-size: 1.2rem;
          }

          .quiz-navigation {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default QuizSection;