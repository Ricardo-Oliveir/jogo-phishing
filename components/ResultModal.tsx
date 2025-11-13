import React from 'react';

interface ResultModalProps {
  score: number;
  onRestart: () => void;
  totalQuestions: number;
}

const ResultModal: React.FC<ResultModalProps> = ({ score, onRestart, totalQuestions }) => {
    const maxScore = totalQuestions * 10;
    const percentage = (score / maxScore) * 100;

    let message = "Bom trabalho! Você está no caminho certo para se tornar um mestre anti-phishing.";
    if (percentage < 50) {
        message = "Há espaço para melhorias. Continue praticando para identificar melhor as ameaças!";
    } else if (percentage >= 80) {
        message = "Excelente! Você tem um olho de águia para detectar phishing. Mantenha-se vigilante!";
    }


  return (
    <div className="bg-white/60 dark:bg-black/50 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-green-500/20 p-8 w-full max-w-2xl mx-auto text-gray-800 dark:text-gray-200 text-center border border-gray-200 dark:border-green-500/30">
      <h2 className="text-5xl font-bold mb-4 text-emerald-600 dark:text-green-400 dark:drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">Fim de Jogo!</h2>
      <p className="text-xl mb-2">Sua pontuação final é:</p>
      <p className="text-8xl font-bold text-emerald-600 dark:text-green-400 dark:drop-shadow-[0_0_10px_rgba(74,222,128,0.7)] mb-6">{score}</p>
      <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg">{message}</p>
      <button
        onClick={onRestart}
        className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-green-600 dark:hover:bg-green-700 text-white dark:text-black font-bold py-4 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg dark:shadow-[0_0_15px_rgba(74,222,128,0.4)] dark:hover:shadow-[0_0_25px_rgba(74,222,128,0.6)] text-xl"
      >
        Jogar Novamente
      </button>
    </div>
  );
};

export default ResultModal;