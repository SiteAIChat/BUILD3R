export type ProjectType = "ai_jumpstart" | "automation" | "mvp" | "commerce";
export type ComplexityLevel = "low" | "mid" | "high";
export type SizeLevel = "small" | "medium";
export type SpeedLevel = "standard" | "fast";

export type AddOnKey =
  | "design_polish"
  | "multi_role_auth"
  | "payments"
  | "training"
  | "integrations";

export interface EstimateInput {
  projectType: ProjectType;
  complexity: ComplexityLevel;
  size: SizeLevel;
  speed: SpeedLevel;
  addons: AddOnKey[];
}

export interface EstimateResult {
  low: number;
  high: number;
  timelineWeeks: number;
  recommendedPackage: ProjectType;
}

const basePrice: Record<ProjectType, number> = {
  ai_jumpstart: 6000,
  automation: 8000,
  mvp: 15000,
  commerce: 7000
};

const complexityFactor: Record<ComplexityLevel, number> = {
  low: 1.0,
  mid: 1.4,
  high: 1.9
};

const sizeFactor: Record<SizeLevel, number> = {
  small: 1.0,
  medium: 1.35
};

const speedFactor: Record<SpeedLevel, number> = {
  standard: 1.0,
  fast: 1.3
};

const addonPricing: Record<AddOnKey, number> = {
  design_polish: 800,
  multi_role_auth: 1200,
  payments: 1400,
  training: 600,
  integrations: 1200
};

const projectTimelineBase: Record<ProjectType, number> = {
  ai_jumpstart: 3,
  automation: 4,
  mvp: 8,
  commerce: 4
};

function roundHundred(value: number): number {
  return Math.round(value / 100) * 100;
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const base = basePrice[input.projectType];
  const complexity = complexityFactor[input.complexity];
  const size = sizeFactor[input.size];
  const speed = speedFactor[input.speed];

  const addonsTotal = input.addons.reduce((sum, addon) => {
    const price = addonPricing[addon] ?? 0;
    return sum + price;
  }, 0);

  const rawValue = base * complexity * size * speed + addonsTotal;
  const low = roundHundred(rawValue * 0.9);
  const high = roundHundred(rawValue * 1.2);

  const baseTimeline = projectTimelineBase[input.projectType];
  const complexityDelta = input.complexity === "high" ? 2 : input.complexity === "mid" ? 1 : 0;
  const speedAdjustment = input.speed === "fast" ? -1 : 0;
  const sizeDelta = input.size === "medium" ? 1 : 0;

  const timelineWeeks = Math.max(2, baseTimeline + complexityDelta + sizeDelta + speedAdjustment);

  return {
    low,
    high,
    timelineWeeks,
    recommendedPackage: input.projectType
  };
}
