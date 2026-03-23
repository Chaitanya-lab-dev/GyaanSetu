export type SupportedLanguage =
  | "english"
  | "hindi"
  | "kannada"
  | "marathi"
  | "tamil"
  | "telugu"
  | "bengali";

export type LearningLevel = "foundation" | "middle-school" | "high-school" | "youth";

export interface TutorRequest {
  question: string;
  language: SupportedLanguage;
  level: LearningLevel;
}

export interface TopicDefinition {
  id: string;
  title: string;
  keywords: string[];
  reframedGoal: (question: string) => string;
  prerequisiteSignals: string[];
  prerequisites: string[];
  explanationSteps: string[];
  example: string;
  checkQuestion: string;
  localizedClue: string;
}

export interface TeachingResponse {
  originalQuestion: string;
  learningGoal: string;
  topic: string;
  needsPrerequisites: boolean;
  prerequisiteTitle: string;
  prerequisiteExplanation: string[];
  mainExplanation: string[];
  example: string;
  checkQuestion: string;
  localizedVersion: {
    language: SupportedLanguage;
    title: string;
    summary: string;
    explanation: string[];
    checkQuestion: string;
  };
  safety: {
    blocked: boolean;
    message?: string;
  };
}
