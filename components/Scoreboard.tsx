import React from 'react';
import { HeartIcon } from './icons';

interface ScoreboardProps {
  score: number;
  lives: number;
  level: number;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, lives, level, currentQuestionIndex, totalQuestions }) => {
  const progress = ((currentQuestionIndex) / totalQuestions) * 100;

  return (
    <div className="bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-green-500/10 p-4 w-full max-w-4xl mx-auto text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-green-500/30">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p className="text-xl font-bold">Pontuação: <span className="text-4xl text-emerald-600 dark:text-green-400 dark:drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">{score}</span></p>
        </div>
        <div className="text-center">
            <p className="text-xl font-bold">Nível <span className="text-4xl text-emerald-600 dark:text-green-400 dark:drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">{level}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold">Vidas:</p>
          <div className="flex">
            {Array.from({ length: 3 }).map((_, i) => (
              // FIX: Wrap HeartIcon in a div with a key to resolve typing issue.
              <div key={i}>
                <HeartIcon
                  className={`w-10 h-10 transition-colors duration-300 ${i < lives ? 'text-red-500 dark:drop-shadow-[0_0_5px_rgba(239,68,68,0.7)]' : 'text-gray-300 dark:text-gray-700'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-200 dark:bg-green-900/50 rounded-full h-3.5">
          <div className="bg-emerald-500 dark:bg-green-500 h-3.5 rounded-full dark:shadow-[0_0_10px_rgba(74,222,128,0.7)]" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-center text-base mt-2 text-gray-600 dark:text-gray-400">Pergunta {currentQuestionIndex + 1} de {totalQuestions}</p>
      </div>
    </div>
  );
};

export default Scoreboard;