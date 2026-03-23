import { TeachingResponse } from "@/lib/tutor/types";

export const mockLesson: TeachingResponse = {
  originalQuestion: "Why do plants need sunlight?",
  learningGoal: "Understand why sunlight is essential for plants to make their own food.",
  topic: "Photosynthesis",
  needsPrerequisites: true,
  prerequisiteTitle: "Missing basics we should teach first",
  prerequisiteExplanation: [
    "Plants are living things and they need energy to grow.",
    "Leaves capture sunlight; roots absorb water.",
    "Air contains carbon dioxide, which plants also use.",
  ],
  mainExplanation: [
    "Photosynthesis is how plants make food using sunlight, water, and carbon dioxide.",
    "Chlorophyll in leaves captures sunlight and powers the process.",
    "The plant creates glucose (food) and releases oxygen as a bonus.",
    "Without sunlight, this food-making process slows down or stops.",
  ],
  example:
    "Think of a leaf as a tiny kitchen: sunlight is the stove power, water and carbon dioxide are ingredients, and glucose is the meal it cooks.",
  checkQuestion: "Name the three main things a plant needs for photosynthesis.",
  localizedVersion: {
    language: "hindi",
    title: "Hindi learning view",
    summary: "Paudhe surya ki roshni se khana banate hain.",
    explanation: [
      "Kadam 1: Roshni, paani, aur carbon dioxide ki zaroorat hoti hai.",
      "Kadam 2: Patte ka hari rang (chlorophyll) roshni pakadta hai.",
      "Kadam 3: Paudha glucose banata hai aur oxygen chhodta hai.",
    ],
    checkQuestion: "Photosynthesis ke liye 3 cheezein kaun si chahiye?",
  },
  safety: { blocked: false },
};

export const mockLibrary = [
  {
    id: "les-101",
    title: "Fractions",
    summary: "Understand numerators and denominators using food-sharing examples.",
    language: "english",
    savedAt: "Today",
  },
  {
    id: "les-102",
    title: "Gravity",
    summary: "Why objects fall toward Earth and how gravity acts as a pull.",
    language: "english",
    savedAt: "Yesterday",
  },
  {
    id: "les-103",
    title: "Photosynthesis",
    summary: "Plants use sunlight, water, and carbon dioxide to make food.",
    language: "hindi",
    savedAt: "2 days ago",
  },
];
