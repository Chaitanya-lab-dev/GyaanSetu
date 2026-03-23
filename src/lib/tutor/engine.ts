import { buildLocalizedView } from "@/lib/tutor/localization";
import { DEFAULT_TOPIC, TOPICS } from "@/lib/tutor/topics";
import {
  SupportedLanguage,
  TeachingResponse,
  TopicDefinition,
  TutorRequest,
} from "@/lib/tutor/types";

const CONTACT_PATTERN =
  /(\+?\d{2,3}[-.\s]?)?\d{10}|\b(?:whatsapp|telegram|instagram|snapchat|email|gmail|phone number|contact me)\b/i;

function normalizeQuestion(question: string) {
  return question.trim().toLowerCase();
}

function pickTopic(question: string): TopicDefinition {
  const normalized = normalizeQuestion(question);

  return (
    TOPICS.find((topic) =>
      topic.keywords.some((keyword) => normalized.includes(keyword.toLowerCase())),
    ) ?? DEFAULT_TOPIC
  );
}

function needsPrerequisiteSupport(question: string, topic: TopicDefinition) {
  const normalized = normalizeQuestion(question);

  return topic.prerequisiteSignals.some((signal) => normalized.includes(signal.toLowerCase()));
}

function buildPrerequisiteExplanation(topic: TopicDefinition, level: TutorRequest["level"]) {
  const audienceNote =
    level === "foundation"
      ? "We will keep the language very simple and concrete."
      : level === "middle-school"
        ? "We will bridge everyday examples to the school concept."
        : level === "high-school"
          ? "We will keep the logic clear and exam-friendly."
          : "We will stay practical and concise.";

  return [audienceNote, ...topic.prerequisites];
}

function buildMainExplanation(topic: TopicDefinition, level: TutorRequest["level"]) {
  if (level === "foundation") {
    return [
      topic.explanationSteps[0],
      topic.explanationSteps[1] ?? topic.explanationSteps[0],
      "Now say the idea once in your own simple words.",
    ];
  }

  return topic.explanationSteps;
}

function buildSafeResponse(
  question: string,
  language: SupportedLanguage,
): TeachingResponse {
  const base = {
    originalQuestion: question,
    learningGoal:
      "Stay safe while learning and keep all support inside the protected teaching system.",
    topic: "Safety",
    needsPrerequisites: false,
    prerequisiteTitle: "Why this matters",
    prerequisiteExplanation: [
      "Children and young learners should not be pushed toward direct contact with unknown adults.",
      "A safer learning product keeps explanations inside the app and avoids sharing private contact details.",
    ],
    mainExplanation: [
      "Please ask the learning question itself, not for a person’s contact details.",
      "The tutor experience should stay moderated, logged, and child-safe.",
      "If you need help, use approved in-product support or a trusted teacher or guardian channel.",
    ],
    example:
      "Safer question: 'Can you explain photosynthesis step by step?' instead of asking for someone’s phone number.",
    checkQuestion:
      "What is safer for a child-focused learning app: in-app guidance or direct contact with unknown adults?",
    safety: {
      blocked: true,
      message:
        "This request looks like it asks for direct contact or private details. The MVP keeps learners inside a safe, mediated experience.",
    },
  } satisfies Omit<TeachingResponse, "localizedVersion">;

  return {
    ...base,
    localizedVersion: buildLocalizedView(base, language),
  };
}

export function buildTeachingResponse(request: TutorRequest): TeachingResponse {
  if (CONTACT_PATTERN.test(request.question)) {
    return buildSafeResponse(request.question, request.language);
  }

  const topic = pickTopic(request.question);
  const needsPrerequisites = needsPrerequisiteSupport(request.question, topic);
  const baseResponse = {
    originalQuestion: request.question.trim(),
    learningGoal: topic.reframedGoal(request.question),
    topic: topic.title,
    needsPrerequisites,
    prerequisiteTitle: needsPrerequisites
      ? "Missing basics we should teach first"
      : "Quick grounding before the main explanation",
    prerequisiteExplanation: buildPrerequisiteExplanation(topic, request.level),
    mainExplanation: buildMainExplanation(topic, request.level),
    example: topic.example,
    checkQuestion: topic.checkQuestion,
    safety: {
      blocked: false,
    },
  } satisfies Omit<TeachingResponse, "localizedVersion">;

  return {
    ...baseResponse,
    localizedVersion: buildLocalizedView(baseResponse, request.language),
  };
}
