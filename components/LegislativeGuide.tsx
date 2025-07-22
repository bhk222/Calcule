import React, { useState, useEffect, useRef } from 'react';
import { createLegislativeChatSession } from '../services/geminiService';
import { Message, Chat } from '../types';

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

export const LegislativeGuide: React.FC = () => {
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
                const session = createLegislativeChatSession();
                setChatSession(session);
                const response = await session.sendMessage({ message: "Bonjour" });
                const welcomeMessage = response.text.trim();
                if (welcomeMessage) {
                    setMessages([{ role: 'model', text: welcomeMessage }]);
                }
            } catch (err) {
                console.error("Erreur lors de l'initialisation du chat législatif:", err);
                setError("Impossible d'initialiser le guide IA. Veuillez rafraîchir la page.");
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
            setMessages(prev => [...prev, { role: 'model', text: aiText }]);
        } catch (err) {
            setError("Une erreur est survenue lors de la communication. Veuillez réessayer.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="bg-blue-800 p-6 text-white text-center sticky top-0 z-10">
                <h2 className="text-2xl font-bold">Guide de la Sécurité Sociale</h2>
                <p className="text-blue-200 text-sm mt-1">Législation Algérienne</p>
            </div>
            <div className="flex-1 flex flex-col bg-slate-100">
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    {messages.map((msg, index) => <MessageBubble key={index} message={msg} />)}
                    {isLoading && <TypingIndicator />}
                    {isLoading && messages.length === 0 && (
                        <div className="flex justify-center items-center h-full">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
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
                        placeholder={isLoading ? "L'assistant réfléchit..." : "Posez votre question..."}
                        className="flex-1 w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        aria-label="Votre question sur la sécurité sociale"
                        disabled={isLoading || !!error}
                    />
                     <button type="submit" disabled={isLoading || !userInput.trim() || !!error} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};