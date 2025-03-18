import { GroqPlugin } from './plugin';
import { GroqModel } from '../constants/models';

export type MessageRole = 'user' | 'assistant' | 'error';

export interface Message {
    role: MessageRole;
    content: string;
    timestamp: string;
}

export interface ChatProps {
    plugin: GroqPlugin;
}

export interface ChatPanelState {
    messages: Message[];
    inputText: string;
    isLoading: boolean;
    selectedModel: GroqModel;
}

export interface ChatHistoryManager {
    saveMessages(messages: Message[]): void;
    loadMessages(): Message[];
    clearHistory(): void;
}

// Internal props for the chat panel component
export interface ChatPanelInternalProps {
    messages: Message[];
    inputText: string;
    isLoading: boolean;
    selectedModel: GroqModel;
    onInputChange: (text: string) => void;
    onSendMessage: () => Promise<void>;
    onModelChange: (model: GroqModel) => void;
    onClearHistory: () => void;
}

export interface ChatHistory {
    messages: Message[];
    lastUpdated: string;
}

export interface HistoryOptions {
    method: 'memory' | 'file';
    maxHistoryLength: number;
    notePath: string;
}