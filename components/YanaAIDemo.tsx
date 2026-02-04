
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const YanaAIDemo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [exercise, setExercise] = useState<{ phrase: string; translation: string; pronunciation: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateExercise = async (lang: string) => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Génère un exercice simple pour apprendre le ${lang}. Inclus une phrase courte, sa traduction française et une aide à la prononciation. Format JSON.`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              phrase: { type: Type.STRING },
              translation: { type: Type.STRING },
              pronunciation: { type: Type.STRING }
            },
            required: ['phrase', 'translation', 'pronunciation']
          }
        }
      });
      
      const result = JSON.parse(response.text);
      setExercise(result);
    } catch (err) {
      setError("Échec système : Signal perdu.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card rounded-3xl p-8 border-orange-500/20 shadow-[0_0_50px_-12px_rgba(249,115,22,0.15)] h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-8 text-left">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-orange-600/20 rounded-xl flex items-center justify-center border border-orange-500/40 text-xl">🦫</div>
          <div className="flex flex-col">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] leading-tight">Moteur IA Interactif</h4>
            <p className="text-[8px] text-orange-500/60 font-bold uppercase tracking-widest">NLU & Synthèse Culturelle v2.5</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-8">
        {['Wolof', 'Pulaar', 'Bambara', 'Lingala'].map(lang => (
          <button
            key={lang}
            onClick={() => generateExercise(lang)}
            disabled={loading}
            className="px-4 py-3 text-[10px] font-black uppercase tracking-widest bg-white/5 hover:bg-orange-600/20 text-gray-400 hover:text-orange-400 rounded-xl border border-white/5 transition-all disabled:opacity-50"
          >
            {lang}
          </button>
        ))}
      </div>

      <div className="flex-grow min-h-[140px] bg-black/40 rounded-2xl p-6 border border-white/5 font-mono relative overflow-hidden text-left flex flex-col justify-center">
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
               <div className="h-full bg-orange-500 animate-[loading_2s_infinite] shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
            </div>
            <p className="text-[10px] text-orange-500 animate-pulse uppercase">Génération d'exercice...</p>
          </div>
        ) : exercise ? (
          <div className="animate-fade-in">
            <p className="text-xl font-bold text-white mb-2 tracking-tight">{exercise.phrase}</p>
            <p className="text-sm text-orange-400/80 italic mb-6">"{exercise.translation}"</p>
            <div className="flex items-center space-x-3">
              <span className="px-2 py-0.5 bg-white/10 rounded text-[9px] text-gray-400 uppercase font-black">Phonétique</span>
              <span className="text-xs text-gray-500">{exercise.pronunciation}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">Choisissez une langue pour tester Yana</p>
          </div>
        )}
        
        {error && <p className="text-red-500 text-[10px] mt-2">{error}</p>}
      </div>
      
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default YanaAIDemo;
