
import React from 'react';

const CalculatorIcon: React.FC<{isActive: boolean}> = ({isActive}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const LawIcon: React.FC<{isActive: boolean}> = ({isActive}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const DiseaseIcon: React.FC<{isActive: boolean}> = ({isActive}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);


interface NavButtonProps {
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, icon, isActive, onClick}) => {
    const activeClasses = 'text-blue-600';
    const inactiveClasses = 'text-slate-500 hover:text-blue-500';

    return (
        <button onClick={onClick} className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}>
            {icon}
            <span className="text-xs font-medium">{label}</span>
        </button>
    )
}

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'calculator', label: 'Calculateur', icon: <CalculatorIcon isActive={activeTab === 'calculator'}/> },
    { id: 'legislative', label: 'Guide', icon: <LawIcon isActive={activeTab === 'legislative'} /> },
    { id: 'diseases', label: 'Maladies Pro.', icon: <DiseaseIcon isActive={activeTab === 'diseases'} /> },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-t border-slate-200 flex justify-around items-center">
      {tabs.map((tab) => (
          <NavButton 
            key={tab.id}
            label={tab.label}
            icon={tab.icon}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
      ))}
    </div>
  );
};