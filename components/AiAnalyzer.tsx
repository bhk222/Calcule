
import React, { useState, useEffect, useRef } from 'react';
import { createRateCalculatorChatSession } from '../services/geminiService';
import { SelectedInjury, Message, Chat } from '../types';
import { disabilityData } from '../data/disabilityRates';

interface AiAnalyzerProps {
    onAnalysisComplete: (injuries: SelectedInjury[]) => void;
}

const TypingIndicator: React.FC = () => (
    <div className="flex items-center space-x-1 p-3">
        <span className="text-slate-500 text-sm">L'assistant écrit</span>
        <div className="animate-bounce w-1.5 h-1.5 bg-slate-500 rounded-full [animation-delay:-0.3s]"></div>
        <div className="animate-bounce w-1.5 h-1.5 bg-slate-500 rounded-full [animation-delay:-0.15s]"></div>
        <div className="animate-bounce w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
    </div>
);

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
    const isUser = message.role === 'user';
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-2xl shadow-sm ${isUser ? 'bg-blue-500 text-white rounded-br-lg' : 'bg-white text-slate-800 rounded-bl-lg'}`}>
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
            </div>
        </div>
    );
};

const mapJsonToSelectedInjuries = (jsonResponse: any[]): SelectedInjury[] => {
    const injuryList = disabilityData.flatMap(c => c.subcategories.flatMap(s => s.injuries));

    return jsonResponse.map((item: any): SelectedInjury | null => {
        const originalInjury = injuryList.find(i => i.name === item.name);
        if (!originalInjury) {
            console.warn(`Lésion retournée par l'IA non trouvée: ${item.name}`);
            return null;
        }

        const chosenRate = Number(item.chosenRate);
        if (isNaN(chosenRate)) {
            console.warn(`Taux invalide pour la lésion: ${item.name}`, item.chosenRate);
            return null;
        }

        return {
            id: crypto.randomUUID(),
            name: originalInjury.name,
            rate: originalInjury.rate,
            chosenRate: chosenRate,
        };
    }).filter((item): item is SelectedInjury => item !== null);
};

export const AiAnalyzer: React.FC<AiAnalyzerProps> = ({ onAnalysisComplete }) => {
    const [chatSession, setChatSession] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const session = createRateCalculatorChatSession();
                setChatSession(session);
                const response = await session.sendMessage({ message: "Bonjour" });
                const welcomeMessage = response.text.trim();
                if (welcomeMessage) {
                    setMessages([{ role: 'model', text: welcomeMessage }]);
                }
            } catch (err) {
                console.error("Error during chat initialization:", err);
                setError("Impossible d'initialiser l'assistant. Veuillez rafraîchir.");
            } finally {
                setIsLoading(false);
            }
        };
        initChat();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        const messageToSend = userInput.trim();

        if (!messageToSend || !chatSession || isLoading) return;

        setMessages(prev => [...prev, { role: 'user', text: messageToSend }]);
        setUserInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await chatSession.sendMessage({ message: messageToSend });
            const aiText = response.text.trim();

            let parsedJson: any;
            try {
                const cleanText = aiText.replace(/^```json\s*|```\s*$/g, '');
                parsedJson = JSON.parse(cleanText);
            } catch (jsonError) {
                setMessages(prev => [...prev, { role: 'model', text: aiText }]);
                return;
            }
            
            if (Array.isArray(parsedJson)) {
                const newInjuries = mapJsonToSelectedInjuries(parsedJson);
                if (newInjuries.length > 0) {
                    setMessages(prev => [...prev, { role: 'model', text: "J'ai terminé l'analyse. Les résultats ont été ajoutés ci-dessous." }]);
                    onAnalysisComplete(newInjuries);
                } else {
                     setMessages(prev => [...prev, { role: 'model', text: "L'analyse n'a pas pu identifier de lésion valide. Pouvez-vous donner plus de détails ?" }]);
                }
            } else {
                setMessages(prev => [...prev, { role: 'model', text: aiText }]);
            }
        } catch (err) {
            setError("Erreur de communication avec l'IA. Veuillez réessayer.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-xl flex flex-col h-[500px]">
             <div className="p-4 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-800">Assistant IA</h3>
             </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                {messages.map((msg, index) => <MessageBubble key={index} message={msg} />)}
                {isLoading && messages.length > 0 && <TypingIndicator />}
                {isLoading && messages.length === 0 && (
                    <div className="flex justify-center items-center h-full">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {error && <p className="text-red-500 p-2 text-xs text-center">{error}</p>}
            
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 flex items-center gap-2 bg-white">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder={isLoading ? "L'assistant réfléchit..." : "Écrivez votre message..."}
                    className="flex-1 w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    aria-label="Votre message"
                    disabled={isLoading || !!error}
                />
                <button type="submit" disabled={isLoading || !userInput.trim() || !!error} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </form>
        </div>
    );
};