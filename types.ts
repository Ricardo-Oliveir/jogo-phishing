
import { ReactNode } from 'react';

export type AnswerType = 'phishing' | 'not_phishing';

export interface Question {
  id: number;
  scenario: ReactNode;
  type: AnswerType;
  explanation: string;
}

export type GameStatus = 'start' | 'playing' | 'ended';
