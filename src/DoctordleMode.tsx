import React, { useState, useEffect } from 'react';
import { Question } from './App';
import { CheckCircle2, XCircle, RotateCcw, Lightbulb } from 'lucide-react';

interface DoctorddleModeProps {
  questions: Question[];
  onExit: () => void;
}

export default function DoctordleMode({ questions, onExit }: DoctorddleModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const question = questions[currentIndex];
  if (!question) return null;

  const handleSubmit = () => {
    if (!guess.trim()) return;
    setRevealed(true);

    const isCorrect = guess.toLowerCase().trim() === question.options[question.correctIndex].toLowerCase().trim();
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setGuess('');
      setRevealed(false);
      setShowHint(false);
    } else {
      alert(`Jogo finalizado!\nPontuação: ${score}/${questions.length}`);
      onExit();
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setGuess('');
    setRevealed(false);
    setStreak(0);
    setScore(0);
    setShowHint(false);
  };

  const correctAnswer = question.options[question.correctIndex];
  const isCorrect = revealed && guess.toLowerCase().trim() === correctAnswer.toLowerCase().trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-slate-100 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-teal-700">🩺 Diagnóstico</h1>
          <div className="text-right">
            <div className="text-sm text-slate-600">Pontuação: {score}/{questions.length}</div>
            <div className="text-sm text-amber-600 font-semibold">Sequência: {streak}🔥</div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6 bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-600">Caso {currentIndex + 1}/{questions.length}</span>
            <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-500 transition-all"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Case Presentation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Apresentação Clínica:</h2>
            <p className="text-slate-700 leading-relaxed text-lg">{question.text}</p>
          </div>

          {/* Hint Button */}
          {!revealed && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 text-amber-600 hover:text-amber-700 text-sm font-medium mb-4"
            >
              <Lightbulb size={16} />
              {showHint ? 'Ocultar' : 'Dica'}
            </button>
          )}

          {showHint && !revealed && (
            <div className="bg-amber-50 border border-amber-200 rounded p-3 mb-4 text-sm text-amber-800">
              Opções: {question.options.map((opt, idx) => (
                <span key={idx} className="inline-block mr-3">
                  <span className="font-semibold">{String.fromCharCode(65 + idx)})</span> {opt}
                </span>
              ))}
            </div>
          )}

          {/* Input Section */}
          {!revealed ? (
            <div className="flex gap-3">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Digite seu diagnóstico..."
                className="flex-1 px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                autoFocus
              />
              <button
                onClick={handleSubmit}
                disabled={!guess.trim()}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 disabled:bg-slate-300 transition"
              >
                Enviar
              </button>
            </div>
          ) : (
            <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
              <div className="flex items-center gap-3 mb-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="text-green-600" size={24} />
                    <span className="font-bold text-green-600">Correto!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-600" size={24} />
                    <span className="font-bold text-red-600">Incorreto</span>
                  </>
                )}
              </div>
              <div className="text-sm">
                <p className="font-semibold mb-1">Sua resposta: <span className="text-slate-700">{guess}</span></p>
                <p className="font-semibold mb-1">Resposta correta: <span className="text-slate-700">{correctAnswer}</span></p>
              </div>
            </div>
          )}

          {/* Explanation */}
          {revealed && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Explicação:</h3>
              <p className="text-blue-800 text-sm leading-relaxed">{question.explanation}</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          {revealed && currentIndex < questions.length - 1 && (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition flex items-center gap-2"
            >
              Próximo Caso →
            </button>
          )}
          {revealed && currentIndex === questions.length - 1 && (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Finalizar
            </button>
          )}
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-slate-500 text-white rounded-lg font-semibold hover:bg-slate-600 transition flex items-center gap-2"
          >
            <RotateCcw size={18} />
            Reiniciar
          </button>
          <button
            onClick={onExit}
            className="px-6 py-3 bg-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-400 transition"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
