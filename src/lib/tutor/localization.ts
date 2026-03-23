import { SupportedLanguage, TeachingResponse } from "@/lib/tutor/types";

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  english: "English",
  hindi: "Hindi",
  kannada: "Kannada",
  marathi: "Marathi",
  tamil: "Tamil",
  telugu: "Telugu",
  bengali: "Bengali",
};

const TEMPLATES: Record<
  SupportedLanguage,
  {
    title: string;
    summaryPrefix: string;
    stepPrefix: string;
    checkPrefix: string;
  }
> = {
  english: {
    title: "Localized teaching view",
    summaryPrefix: "Simple summary",
    stepPrefix: "Step",
    checkPrefix: "Quick check",
  },
  hindi: {
    title: "Hindi learning view",
    summaryPrefix: "Aasan saar",
    stepPrefix: "Kadam",
    checkPrefix: "Chhota check",
  },
  kannada: {
    title: "Kannada learning view",
    summaryPrefix: "Sulabha saara",
    stepPrefix: "Hanta",
    checkPrefix: "Sanna check",
  },
  marathi: {
    title: "Marathi learning view",
    summaryPrefix: "Sopa saar",
    stepPrefix: "Paaul",
    checkPrefix: "Lahan tapashani",
  },
  tamil: {
    title: "Tamil learning view",
    summaryPrefix: "Elimaiyana surukkam",
    stepPrefix: "Padi",
    checkPrefix: "Siru saripaarppu",
  },
  telugu: {
    title: "Telugu learning view",
    summaryPrefix: "Sulabha saaram",
    stepPrefix: "Dasha",
    checkPrefix: "Chinna check",
  },
  bengali: {
    title: "Bengali learning view",
    summaryPrefix: "Shohoj shaar",
    stepPrefix: "Dhap",
    checkPrefix: "Chhoto check",
  },
};

export function buildLocalizedView(
  response: Omit<TeachingResponse, "localizedVersion">,
  language: SupportedLanguage,
): TeachingResponse["localizedVersion"] {
  const template = TEMPLATES[language];
  const summary =
    language === "english"
      ? `Learning goal: ${response.learningGoal}`
      : `${template.summaryPrefix}: ${response.learningGoal}`;

  const explanation = response.mainExplanation.map(
    (step, index) => `${template.stepPrefix} ${index + 1}: ${step}`,
  );

  return {
    language,
    title: `${template.title} (${LANGUAGE_LABELS[language]})`,
    summary,
    explanation,
    checkQuestion:
      language === "english"
        ? response.checkQuestion
        : `${template.checkPrefix}: ${response.checkQuestion}`,
  };
}

export const supportedLanguages = Object.entries(LANGUAGE_LABELS).map(([value, label]) => ({
  value: value as SupportedLanguage,
  label,
}));
