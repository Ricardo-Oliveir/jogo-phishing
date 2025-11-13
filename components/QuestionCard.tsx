import React from 'react';
import { Question, AnswerType } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: AnswerType) => void;
  onNext: () => void;
  userAnswer: AnswerType | null;
  isCorrect: boolean | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onNext, userAnswer, isCorrect }) => {
  const hasAnswered = userAnswer !== null;

  const getButtonClass = (answerType: AnswerType) => {
    if (!hasAnswered) {
      // This state is not visible as buttons are hidden, but kept for logic consistency
      return '';
    }
    if (userAnswer === answerType) {
      return isCorrect ? 'bg-green-600 dark:shadow-[0_0_15px_rgba(74,222,128,0.6)]' : 'bg-red-600 dark:shadow-[0_0_15px_rgba(239,68,68,0.6)]';
    }
    if (question.type === answerType) {
        return 'bg-green-600 opacity-60'
    }
    return 'bg-gray-400 dark:bg-gray-700 opacity-50';
  };

  return (
    <div className="bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-green-500/10 p-8 w-full max-w-4xl mx-auto text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-green-500/30">
      <h2 className="text-2xl font-bold mb-6 text-emerald-600 dark:text-green-400">Isto é phishing?</h2>
      <div className="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300 p-6 rounded-md shadow-inner mb-6 border border-gray-200 dark:border-gray-700">
        {question.scenario}
      </div>

      {!hasAnswered && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onAnswer('phishing')}
            className="w-full text-white font-bold py-4 px-4 rounded-lg transition-all transform hover:scale-105 bg-red-600 hover:bg-red-700 dark:hover:shadow-[0_0_20px_rgba(239,68,68,0.7)] text-lg"
          >
            É Phishing
          </button>
          <button
            onClick={() => onAnswer('not_phishing')}
            className="w-full text-white font-bold py-4 px-4 rounded-lg transition-all transform hover:scale-105 bg-green-600 hover:bg-green-700 dark:hover:shadow-[0_0_20px_rgba(74,222,128,0.7)] text-lg"
          >
            Não é Phishing
          </button>
        </div>
      )}

      {hasAnswered && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <button disabled className={`w-full text-white font-bold py-4 px-4 rounded-lg transition-colors text-lg ${getButtonClass('phishing')}`}>
              É Phishing
            </button>
            <button disabled className={`w-full text-white font-bold py-4 px-4 rounded-lg transition-colors text-lg ${getButtonClass('not_phishing')}`}>
              Não é Phishing
            </button>
          </div>
          <div className={`p-5 rounded-lg ${isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
            <h3 className={`font-bold text-2xl ${isCorrect ? 'text-emerald-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>{isCorrect ? 'Correto!' : 'Incorreto!'}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-base">{question.explanation}</p>
          </div>
          <button
            onClick={onNext}
            className="mt-8 w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-green-600 dark:hover:bg-green-700 text-white dark:text-black font-bold py-4 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg dark:shadow-[0_0_15px_rgba(74,222,128,0.4)] dark:hover:shadow-[0_0_25px_rgba(74,222,128,0.6)] text-lg"
          >
            Próxima Pergunta
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;