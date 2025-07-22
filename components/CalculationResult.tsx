
import React, { useState } from 'react';
import { SelectedInjury } from '../types';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { InjuryInfoModal } from './InjuryInfoModal';

interface CalculationResultProps {
  selectedInjuries: SelectedInjury[];
  totalRate: number;
  onRemoveInjury: (id: string) => void;
}

const InfoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);


export const CalculationResult: React.FC<CalculationResultProps> = ({ selectedInjuries, totalRate, onRemoveInjury }) => {
  const [modalInjury, setModalInjury] = useState<string | null>(null);

  return (
    <>
    <Card className="w-full">
      <h3 className="text-lg font-bold mb-3">Analyse des Lésions</h3>
      {selectedInjuries.length === 0 ? (
        <p className="text-slate-500 text-sm">Aucune lésion sélectionnée. Discutez avec l'assistant pour commencer.</p>
      ) : (
        <>
          <div className="space-y-2 mb-4">
            {selectedInjuries.map((injury) => (
              <div key={injury.id} className="flex justify-between items-center bg-slate-50 p-2 rounded-lg">
                <span className="flex-1 text-sm font-medium mr-2">{injury.name}</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setModalInjury(injury.name)} className="text-slate-400 hover:text-blue-500" title="En savoir plus">
                      <InfoIcon />
                  </button>
                  <span className="font-semibold text-blue-600 text-md w-12 text-center">{injury.chosenRate}%</span>
                  <Button onClick={() => onRemoveInjury(injury.id)} variant="danger" className="!p-1.5 !text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
            <h4 className="font-semibold text-md text-blue-800">Taux global estimé :</h4>
            <p className="text-5xl font-extrabold text-blue-600 my-1">{totalRate}%</p>
            {selectedInjuries.length > 1 && (
                <p className="text-xs text-blue-600">
                Calculé selon la méthode Balthazard (capacité restante).
                </p>
            )}
          </div>
        </>
      )}
    </Card>
    {modalInjury && (
        <InjuryInfoModal injuryName={modalInjury} onClose={() => setModalInjury(null)} />
    )}
    </>
  );
};