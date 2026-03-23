import { TopicDefinition } from "@/lib/tutor/types";

export const TOPICS: TopicDefinition[] = [
  {
    id: "fractions",
    title: "Fractions",
    keywords: ["fraction", "fractions", "half", "quarter", "numerator", "denominator"],
    reframedGoal: () =>
      "Understand what a fraction represents and how its two parts describe equal parts of a whole.",
    prerequisiteSignals: ["numerator", "denominator", "add fractions", "subtract fractions", "mixed fraction"],
    prerequisites: [
      "A whole can be split into equal parts.",
      "The bottom number tells us how many equal parts the whole is divided into.",
      "The top number tells us how many of those parts we are talking about.",
    ],
    explanationSteps: [
      "A fraction is a way to show part of something whole, like part of a pizza or part of a chocolate bar.",
      "In 3/4, the 4 means the whole is split into 4 equal parts.",
      "The 3 means we are looking at 3 of those 4 equal parts.",
      "Fractions become easier when you picture a real object being divided fairly.",
    ],
    example:
      "If a roti is cut into 4 equal pieces and you eat 3 pieces, you ate 3/4 of the roti.",
    checkQuestion: "If a mango is cut into 8 equal slices and you eat 2 slices, what fraction did you eat?",
    localizedClue: "Use food-sharing examples such as roti, mango, or pizza to keep the idea concrete.",
  },
  {
    id: "photosynthesis",
    title: "Photosynthesis",
    keywords: ["photosynthesis", "plants make food", "chlorophyll", "sunlight", "glucose"],
    reframedGoal: () =>
      "Learn how green plants use sunlight, water, and carbon dioxide to make their own food.",
    prerequisiteSignals: ["chlorophyll", "glucose", "carbon dioxide", "plant food"],
    prerequisites: [
      "Plants are living things and they need food for energy and growth.",
      "Leaves take in sunlight, and roots absorb water from the soil.",
      "Air contains carbon dioxide, which plants also use.",
    ],
    explanationSteps: [
      "Photosynthesis is the process plants use to make food.",
      "Leaves capture sunlight with the help of chlorophyll, the green material in leaves.",
      "The plant combines sunlight, water, and carbon dioxide to make glucose, which is food for the plant.",
      "Oxygen is released as a helpful extra product.",
    ],
    example:
      "Think of a plant leaf like a tiny kitchen. Sunlight is the power, water and carbon dioxide are the ingredients, and glucose is the food it cooks.",
    checkQuestion:
      "What are the three main things a plant needs for photosynthesis to happen?",
    localizedClue:
      "Kitchen and farming comparisons work well for Indian learners because they connect science to everyday life.",
  },
  {
    id: "linear-equations",
    title: "Linear Equations",
    keywords: ["equation", "algebra", "solve for x", "linear equation", "variable"],
    reframedGoal: () =>
      "Understand that solving a linear equation means finding the value that makes both sides equal.",
    prerequisiteSignals: ["solve x", "linear equation", "variable", "algebra", "balance"],
    prerequisites: [
      "A variable is a letter that stands for an unknown number.",
      "An equation is like a balance: both sides must stay equal.",
      "If you do something to one side, you must do the same to the other side.",
    ],
    explanationSteps: [
      "When we solve an equation, we want to get the variable alone on one side.",
      "We remove extra numbers step by step using opposite operations.",
      "Addition is undone by subtraction, and multiplication is undone by division.",
      "At the end, we check the answer by putting it back into the equation.",
    ],
    example:
      "For x + 5 = 12, subtract 5 from both sides. Then x = 7. Check: 7 + 5 = 12, so it works.",
    checkQuestion: "If y - 3 = 10, what is the value of y?",
    localizedClue:
      "The balance-scale metaphor is a strong fit because it makes the rule feel fair and visual.",
  },
  {
    id: "gravity",
    title: "Gravity",
    keywords: ["gravity", "fall down", "why things fall", "force", "earth pulls"],
    reframedGoal: () =>
      "Understand gravity as the pull that brings objects toward the Earth and helps keep us grounded.",
    prerequisiteSignals: ["force", "gravity", "mass", "weight"],
    prerequisites: [
      "A force is a push or a pull.",
      "Objects can move when a force acts on them.",
      "Earth pulls things toward its center.",
    ],
    explanationSteps: [
      "Gravity is a pulling force between objects that have mass.",
      "Because Earth is very large, its pull on nearby objects is strong enough for us to notice every day.",
      "That is why a dropped ball falls down instead of floating away.",
      "Gravity also helps keep the Moon moving around Earth and keeps us standing on the ground.",
    ],
    example:
      "When you throw a ball upward, gravity keeps pulling it back down, so it rises for a short time and then falls.",
    checkQuestion: "Why does a dropped pencil fall to the floor instead of staying in the air?",
    localizedClue:
      "Sports examples such as throwing a cricket ball make the idea easy to picture.",
  },
  {
    id: "democracy",
    title: "Democracy",
    keywords: ["democracy", "voting", "government by people", "election", "citizens"],
    reframedGoal: () =>
      "Understand democracy as a system where people help choose leaders and have a voice in how the country is run.",
    prerequisiteSignals: ["democracy", "election", "citizen", "government"],
    prerequisites: [
      "A government makes rules and decisions for a country or state.",
      "Citizens are the people who belong to that country.",
      "Elections are a way for citizens to choose leaders.",
    ],
    explanationSteps: [
      "In a democracy, leaders are chosen by the people, usually through voting.",
      "People can express opinions, ask questions, and expect leaders to work for the public good.",
      "Democracy also includes rules, rights, and responsibilities.",
      "It is not only about voting once, but also about participation and accountability.",
    ],
    example:
      "A school election is a simple example. Students vote for a class captain, and the chosen student represents the class.",
    checkQuestion: "What role do citizens play in a democracy?",
    localizedClue:
      "School elections and local community examples make civics feel real instead of abstract.",
  },
];

export const DEFAULT_TOPIC: TopicDefinition = {
  id: "general",
  title: "General Learning",
  keywords: [],
  reframedGoal: (question) => `Build a clear understanding of: ${question.trim()}.`,
  prerequisiteSignals: [],
  prerequisites: [
    "Start by identifying the most basic idea hidden inside the question.",
    "Connect the new idea to something the learner already knows.",
    "Move from simple meaning to formal explanation.",
  ],
  explanationSteps: [
    "We first restate the question in simple words so the learner knows the real goal.",
    "Then we explain the basic building blocks needed to understand the answer.",
    "After that, we teach the main concept one step at a time with no rushed jumps.",
    "Finally, we use an example and a short check-for-understanding question.",
  ],
  example:
    "If a learner asks a hard question, we do not begin with textbook language. We begin with the simplest idea that unlocks the topic.",
  checkQuestion:
    "Before giving the full answer, what should a good teacher check first: missing basics or only the final result?",
  localizedClue:
    "For unknown topics, the safest teaching pattern is always: simplify, bridge, explain, example, check.",
};
