export type Difficulty = "easy" | "medium" | "hard";
export type SequenceType = "exercise" | "stretch" | "break";

export interface SequenceItem {
  slug: string;
  name: string;
  type: SequenceType;
  duration: number;
  reps?: number;
}

export interface Workout {
  slug: string;
  name: string;
  duration: number;
  difficulty: Difficulty;
  sequence: Array<SequenceItem>;
}
