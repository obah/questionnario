export interface IQuestion {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface IRandomNumbers {
  size: number;
  min: number;
  max: number;
}
