interface IRandomNumbers {
  size: number;
  min: number;
  max: number;
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
