import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IRandomNumbers } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomNumbers({
  size,
  min,
  max,
}: IRandomNumbers): number[] {
  const randomNumbers: number[] = [];

  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}
