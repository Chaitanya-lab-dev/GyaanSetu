import { buildTeachingResponse } from "@/lib/tutor/engine";
import { LearningLevel, SupportedLanguage, TutorRequest } from "@/lib/tutor/types";
import { NextRequest, NextResponse } from "next/server";

interface IncomingPayload {
  question?: string;
  language?: SupportedLanguage;
  level?: LearningLevel;
}

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as IncomingPayload;
  const question = payload.question?.trim();

  if (!question) {
    return NextResponse.json(
      { error: "Please enter a student question so the teaching pipeline can begin." },
      { status: 400 },
    );
  }

  const tutorRequest: TutorRequest = {
    question,
    language: payload.language ?? "english",
    level: payload.level ?? "middle-school",
  };

  const response = buildTeachingResponse(tutorRequest);
  return NextResponse.json(response);
}
