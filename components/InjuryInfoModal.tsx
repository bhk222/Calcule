
import React, { useState, useEffect } from 'react';
import { getInjuryInformation } from '../services/geminiService';
import { Button } from './ui/Button';

interface InjuryInfoModalProps {
  injuryName: string;
  onClose: () => void;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-24">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

export const InjuryInfoModal: React.FC<InjuryInfoModalProps> = ({ injuryName, onClose }) => {
  const [info, setInfo] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInfo = async () => {
      setIsLoading(true);
      const result = await getInjuryInformation(injuryName);
      setInfo(result);
      setIsLoading(false);
    };
    fetchInfo();
  }, [injuryName]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-slate-500 hover:text-slate-800 text-2xl">&times;</button>
        <h3 className="text-xl font-bold mb-4 text-slate-800">{injuryName}</h3>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <p className="text-slate-600">{info}</p>
        )}
        <div className="mt-6 text-right">
          <Button onClick={onClose}>Fermer</Button>
        </div>
      </div>
    </div>
  );
};
