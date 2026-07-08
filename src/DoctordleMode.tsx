import React, { useState, useEffect, useMemo } from 'react';
import { Question } from './App';
import { CheckCircle2, XCircle, RotateCcw, Lightbulb, X } from 'lucide-react';

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
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const question = questions[currentIndex];
  if (!question) return null;

  const correctAnswer = question.options[question.correctIndex];
  const allDiagnoses = question.options;

  // Filtrar sugestões conforme o usuário digita
  useMemo(() => {
    if (!guess.trim()) {
      setSuggestions([]);
      return;
    }
    const input = guess.toLowerCase().trim();
    const filtered = allDiagnoses.filter(opt =>
      opt.toLowerCase().includes(input) && opt.toLowerCase() !== input
    );
    setSuggestions(filtered.slice(0, 5));
  }, [guess, allDiagnoses]);

  const handleSubmit = () => {
    if (!guess.trim()) return;
    setRevealed(true);

    const isCorrect = guess.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setGuess(suggestion);
    setSuggestions([]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setGuess('');
      setRevealed(false);
      setShowHint(false);
      setSuggestions([]);
    } else {
      alert(`Jogo finalizado!\nPontuação: ${score}/${questions.length}\nSequência: ${streak}🔥`);
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
    setSuggestions([]);
  };

  const isCorrect = revealed && guess.toLowerCase().trim() === correctAnswer.toLowerCase().trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-slate-100 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-teal-700">🩺 Diagnóstico</h1>
          <button
            onClick={onExit}
            className="p-2 hover:bg-slate-200 rounded-lg transition"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-teal-600">{score}/{questions.length}</div>
            <div className="text-xs text-slate-600">Acertos</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-amber-600">{streak}🔥</div>
            <div className="text-xs text-slate-600">Sequência</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-slate-600">{currentIndex + 1}/{questions.length}</div>
            <div className="text-xs text-slate-600">Caso</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6 bg-white rounded-lg shadow p-3">
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-500 to-teal-600 transition-all"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Case Presentation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Caso Clínico</h2>
            <div className="prose prose-sm max-w-none">
              <p className="text-slate-700 leading-relaxed whitespace-pre-line text-base font-medium">
                {question.text}
              </p>
            </div>
          </div>

          {/* Hint Button */}
          {!revealed && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 text-amber-600 hover:text-amber-700 text-sm font-medium mb-4 transition"
            >
              <Lightbulb size={16} />
              {showHint ? 'Ocultar' : 'Ver'} diagnósticos possíveis
            </button>
          )}

          {showHint && !revealed && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-xs text-amber-700 font-semibold mb-3">Diagnósticos possíveis:</p>
              <div className="space-y-2">
                {allDiagnoses.map((opt, idx) => (
                  <div key={idx} className="text-sm text-amber-800 bg-white rounded p-2 pl-3 border-l-3 border-amber-400">
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input Section */}
          {!revealed ? (
            <div className="relative">
              <div className="flex gap-3 mb-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="Digite seu diagnóstico..."
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-teal-500 font-medium"
                    autoFocus
                    autoComplete="off"
                  />
                  {guess && (
                    <button
                      onClick={() => {
                        setGuess('');
                        setSuggestions([]);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!guess.trim()}
                  className="px-8 py-3 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition"
                >
                  Enviar
                </button>
              </div>

              {/* Suggestions dropdown */}
              {suggestions.length > 0 && (
                <div className="absolute z-50 w-full top-full mt-1 bg-white border-2 border-teal-200 rounded-lg shadow-lg overflow-hidden">
                  {suggestions.map((sugg, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(sugg)}
                      className="w-full text-left px-4 py-2.5 hover:bg-teal-50 border-b border-slate-100 last:border-b-0 text-sm font-medium text-slate-700 transition"
                    >
                      {sugg}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className={`p-4 rounded-lg mb-4 border-2 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
              <div className="flex items-center gap-3 mb-3">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="text-green-600 flex-shrink-0" size={28} />
                    <span className="font-bold text-green-600 text-lg">Diagnóstico Correto! 🎉</span>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-600 flex-shrink-0" size={28} />
                    <span className="font-bold text-red-600 text-lg">Diagnóstico Incorreto</span>
                  </>
                )}
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-slate-700">
                  <span className="font-bold text-slate-900">Sua resposta:</span> {guess}
                </p>
                {!isCorrect && (
                  <p className="text-slate-700">
                    <span className="font-bold text-slate-900">Diagnóstico correto:</span> {correctAnswer}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Explanation */}
          {revealed && question.explanation && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded">
              <h3 className="font-bold text-blue-900 mb-2 text-sm">Explicação:</h3>
              <p className="text-blue-800 text-sm leading-relaxed">{question.explanation}</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center flex-wrap">
          {revealed && currentIndex < questions.length - 1 && (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-bold hover:shadow-lg transition flex items-center gap-2"
            >
              Próximo Caso →
            </button>
          )}
          {revealed && currentIndex === questions.length - 1 && (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-bold hover:shadow-lg transition"
            >
              Finalizar Jogo
            </button>
          )}
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-slate-500 text-white rounded-lg font-bold hover:bg-slate-600 transition flex items-center gap-2"
          >
            <RotateCcw size={18} />
            Recomeçar
          </button>
          <button
            onClick={onExit}
            className="px-6 py-3 bg-slate-200 text-slate-700 rounded-lg font-bold hover:bg-slate-300 transition"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
