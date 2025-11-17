import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Question, AnswerType, GameStatus } from './types';
import { QUESTIONS } from './constants/questions';
import Scoreboard from './components/Scoreboard';
import QuestionCard from './components/QuestionCard';
import ResultModal from './components/ResultModal';
import { ExpandIcon, ShrinkIcon } from './components/icons';

const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>('start');
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [userAnswer, setUserAnswer] = useState<AnswerType | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const level = useMemo(() => Math.floor(currentQuestionIndex / 10) + 1, [currentQuestionIndex]);
  
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startGame = useCallback(() => {
    setShuffledQuestions(shuffleArray(QUESTIONS));
    setCurrentQuestionIndex(0);
    setScore(0);
    setLives(3);
    setUserAnswer(null);
    setIsCorrect(null);
    setGameStatus('playing');
  }, []);

  const handleAnswer = useCallback((answer: AnswerType) => {
    if (userAnswer !== null) return;

    const correct = shuffledQuestions[currentQuestionIndex].type === answer;
    setUserAnswer(answer);
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 10);
    } else {
      setLives(prev => {
          const newLives = prev - 1;
          if (newLives <= 0) {
              setTimeout(() => setGameStatus('ended'), 2000);
          }
          return newLives;
      });
    }
  }, [userAnswer, currentQuestionIndex, shuffledQuestions]);

  const handleNextQuestion = useCallback(() => {
    setUserAnswer(null);
    setIsCorrect(null);
    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameStatus('ended');
    }
  }, [currentQuestionIndex, shuffledQuestions.length]);

  const renderGameContent = () => {
    switch (gameStatus) {
      case 'start':
        return (
          <div className="text-center bg-white/60 dark:bg-black/50 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-green-500/10 p-8 max-w-3xl mx-auto border border-gray-200 dark:border-green-500/30">
            <h1 className="text-5xl font-bold mb-4 text-emerald-600 dark:text-green-400 dark:drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">Phishing Quiz Challenge</h1>
            <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg">Teste suas habilidades para identificar e-mails e mensagens falsas. Você tem 3 vidas. Responda corretamente para ganhar pontos e subir de nível. Boa sorte!</p>
            <button onClick={startGame} className="bg-emerald-600 hover:bg-emerald-700 dark:bg-green-600 dark:hover:bg-green-700 text-white dark:text-black font-bold py-4 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-lg dark:shadow-[0_0_15px_rgba(74,222,128,0.4)]">
              Começar Jogo
            </button>
          </div>
        );
      case 'playing':
        return (
            <QuestionCard
              question={shuffledQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              onNext={handleNextQuestion}
              userAnswer={userAnswer}
              isCorrect={isCorrect}
            />
        );
      case 'ended':
        return <ResultModal score={score} onRestart={startGame} totalQuestions={shuffledQuestions.length} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 font-mono flex flex-col overflow-hidden relative transition-colors duration-300">
        <div className="absolute inset-0 z-0 bg-radial-gradient dark:opacity-100 opacity-0 transition-opacity duration-500"></div>
        <div className="absolute inset-0 z-0 scan-lines dark:opacity-100 opacity-0 transition-opacity duration-500"></div>
        <style>{`
          .bg-radial-gradient {
            background: radial-gradient(circle at center, rgba(16, 185, 129, 0.1), transparent 40%);
          }
          .scan-lines {
            background-image: linear-gradient(
              to bottom,
              rgba(0,0,0,0.5) 0%,
              rgba(0,0,0,0.5) 50%,
              transparent 50%,
              transparent 100%
            );
            background-size: 100% 4px;
            opacity: 0.1;
          }
        `}</style>

        <div className="absolute top-4 right-4 z-30 flex gap-2">
             <button onClick={toggleFullscreen} className="p-2 rounded-full bg-gray-200/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                {isFullscreen ? <ShrinkIcon className="w-6 h-6" /> : <ExpandIcon className="w-6 h-6" />}
            </button>
        </div>
        
        {gameStatus === 'playing' && (
            <header className="w-full pt-4 px-4 z-20">
                <Scoreboard 
                  score={score} 
                  lives={lives} 
                  level={level} 
                  currentQuestionIndex={currentQuestionIndex}
                  totalQuestions={shuffledQuestions.length}
                />
            </header>
        )}

        <main className="w-full flex-grow flex flex-col items-center justify-center gap-8 z-10 p-4">
            {renderGameContent()}
        </main>
    </div>
  );
};

export default App;