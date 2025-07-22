
import React, { useState, useEffect, useCallback } from 'react';
import { SelectedInjury } from './types';
import { InjurySelector } from './components/InjurySelector';
import { CalculationResult } from './components/CalculationResult';
import { AiAnalyzer } from './components/AiAnalyzer';
import { LegislativeGuide } from './components/LegislativeGuide';
import { ProfessionalDiseasesGuide } from './components/ProfessionalDiseasesGuide';
import { BottomNav } from './components/BottomNav';

const RateCalculator: React.FC = () => {
    const [selectedInjuries, setSelectedInjuries] = useState<SelectedInjury[]>([]);
    const [totalRate, setTotalRate] = useState<number>(0);

    const calculateBalthazard = useCallback((injuries: SelectedInjury[]): number => {
      if (injuries.length === 0) {
        return 0;
      }
      const rates = injuries.map(i => i.chosenRate).sort((a, b) => b - a);
      let combinedRate = rates[0] / 100;
      for (let i = 1; i < rates.length; i++) {
        combinedRate = combinedRate + (rates[i] / 100) * (1 - combinedRate);
      }
      return Math.round(combinedRate * 100);
    }, []);

    useEffect(() => {
        const newTotalRate = calculateBalthazard(selectedInjuries);
        setTotalRate(newTotalRate);
    }, [selectedInjuries, calculateBalthazard]);

    const handleAddInjury = (injury: SelectedInjury) => {
        if (!selectedInjuries.some(i => i.name === injury.name)) {
            setSelectedInjuries(prev => [...prev, injury]);
        }
    };

    const handleRemoveInjury = (id: string) => {
        setSelectedInjuries(prev => prev.filter(injury => injury.id !== id));
    };

    const handleAnalysisComplete = (aiInjuries: SelectedInjury[]) => {
        const existingNames = new Set(selectedInjuries.map(i => i.name));
        const newInjuries = aiInjuries.filter(aiInjury => !existingNames.has(aiInjury.name));
        setSelectedInjuries(prev => [...prev, ...newInjuries]);
    };

    return (
        <div className="flex flex-col gap-4 p-4">
            <AiAnalyzer onAnalysisComplete={handleAnalysisComplete} />
             <CalculationResult
                selectedInjuries={selectedInjuries}
                totalRate={totalRate}
                onRemoveInjury={handleRemoveInjury}
            />
            <InjurySelector onAddInjury={handleAddInjury} selectedInjuries={selectedInjuries} />
             <div className="mt-2 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg text-yellow-800 text-xs">
                <p><span className="font-bold">Avertissement :</span> Cet outil est un simulateur à but informatif et n'a aucune valeur légale. Seule une expertise médicale peut fixer le taux officiel.</p>
            </div>
        </div>
    );
};


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('calculator');

  return (
    <div className="relative mx-auto h-[90vh] max-h-[900px] w-full max-w-sm rounded-3xl shadow-2xl bg-slate-100 border-[10px] border-slate-800 overflow-hidden">
        <main className="h-full overflow-y-auto custom-scrollbar pb-20">
            {activeTab === 'calculator' && <RateCalculator />}
            {activeTab === 'legislative' && <LegislativeGuide />}
            {activeTab === 'diseases' && <ProfessionalDiseasesGuide />}
        </main>
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;