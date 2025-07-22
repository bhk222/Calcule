
import React, { useState } from 'react';
import { Injury, InjuryCategory, SelectedInjury } from '../types';
import { disabilityData } from '../data/disabilityRates';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface InjurySelectorProps {
  onAddInjury: (injury: SelectedInjury) => void;
  selectedInjuries: SelectedInjury[];
}

const RateSelector: React.FC<{ injury: Injury; onConfirm: (rate: number) => void; onCancel: () => void }> = ({ injury, onConfirm, onCancel }) => {
    const [min, max] = Array.isArray(injury.rate) ? injury.rate : [injury.rate, injury.rate];
    const [currentRate, setCurrentRate] = useState(min);

    return (
        <div className="mt-2 p-3 bg-slate-100 rounded-md">
            <label htmlFor="rate" className="block text-sm font-medium text-slate-700">
                Choisir le taux : {currentRate}%
            </label>
            <input
                type="range"
                id="rate"
                min={min}
                max={max}
                value={currentRate}
                onChange={(e) => setCurrentRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-end gap-2 mt-2">
                <Button onClick={onCancel} variant="secondary" className="py-1 px-2">Annuler</Button>
                <Button onClick={() => onConfirm(currentRate)} className="py-1 px-2">Confirmer</Button>
            </div>
        </div>
    );
}

export const InjurySelector: React.FC<InjurySelectorProps> = ({ onAddInjury, selectedInjuries }) => {
  const [selectingRateFor, setSelectingRateFor] = useState<Injury | null>(null);

  const handleAddClick = (injury: Injury) => {
    if (typeof injury.rate === 'number') {
      onAddInjury({ ...injury, chosenRate: injury.rate, id: crypto.randomUUID() });
    } else {
      setSelectingRateFor(injury);
    }
  };

  const handleConfirmRate = (rate: number) => {
    if (selectingRateFor) {
        onAddInjury({ ...selectingRateFor, chosenRate: rate, id: crypto.randomUUID() });
        setSelectingRateFor(null);
    }
  };

  return (
    <Card className="w-full">
      <h3 className="text-lg font-bold mb-3">Barème Manuel</h3>
      <p className="text-slate-500 mb-4 text-xs">Parcourez le barème complet pour ajouter ou modifier des lésions manuellement.</p>
      <div className="space-y-1">
        {disabilityData.map((category: InjuryCategory) => (
          <details key={category.name} className="group">
            <summary className="cursor-pointer p-3 bg-slate-100 rounded-md font-semibold text-slate-700 group-open:bg-blue-100 group-open:text-blue-800 transition-colors flex justify-between items-center">
              {category.name}
              <svg className="h-5 w-5 transition-transform duration-200 group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </summary>
            <div className="p-3">
              {category.subcategories.map(subcategory => (
                <div key={subcategory.name} className="mb-4">
                    <h4 className="font-semibold text-md text-slate-600 border-b border-slate-200 pb-1 mb-2">{subcategory.name}</h4>
                    <ul className="space-y-2">
                        {subcategory.injuries.map((injury: Injury) => {
                          const isAdded = selectedInjuries.some(sel => sel.name === injury.name);
                          return (
                            <li key={injury.name} className="flex justify-between items-center p-2 rounded-md hover:bg-slate-50">
                                <div className="flex-1 mr-2">
                                    <span className="font-medium text-sm">{injury.name}</span>
                                    <span className="text-xs text-slate-500 ml-2">
                                        ({typeof injury.rate === 'number' ? `${injury.rate}%` : `${injury.rate[0]}-${injury.rate[1]}%`})
                                    </span>
                                </div>
                                {selectingRateFor?.name === injury.name ? (
                                    <div className="w-1/2">
                                        <RateSelector 
                                            injury={injury} 
                                            onConfirm={handleConfirmRate}
                                            onCancel={() => setSelectingRateFor(null)} 
                                        />
                                    </div>
                                ) : (
                                    <Button 
                                      onClick={() => handleAddClick(injury)} 
                                      disabled={isAdded}
                                      className={`py-1 px-3 text-xs ${isAdded ? 'bg-green-600 hover:bg-green-600 cursor-not-allowed' : ''}`}
                                    >
                                      {isAdded ? 'Ajouté' : 'Ajouter'}
                                    </Button>
                                )}
                            </li>
                          );
                        })}
                    </ul>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </Card>
  );
};