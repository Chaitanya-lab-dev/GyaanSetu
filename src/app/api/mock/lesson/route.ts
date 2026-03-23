import { mockLesson } from "@/lib/mock/lesson";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(mockLesson);
}
