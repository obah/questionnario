import { IQuestion } from "../../types";
import { generateRandomNumbers } from "../../lib/utils";
import { questions } from "../../lib/constants";
import { Button, OptionButton } from "./ui/Button";
import { Dispatch, useEffect, useState } from "react";

interface Props {
  score: number | null;
  scoreHandler: Dispatch<React.SetStateAction<number | null>>;
}

export function Questionnaire({ scoreHandler, score }: Props) {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [questionSet, setQuestionSet] = useState<number[]>([]);

  useEffect(() => {
    const randomNumbers = generateRandomNumbers({ size: 3, min: 1, max: 30 });

    setQuestionSet(randomNumbers);
    console.log(questionSet);
  }, []);

  const handleNextClick = () => {
    if (selectedAnswers[questionIndex] === correctAnswer) {
      setTotalScore(totalScore + 1);
    }

    setQuestionIndex(questionIndex + 1);
  };

  const handleAnswerClick = (option: string) => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = option;
      return newAnswers;
    });
  };

  const handleSubmitClick = () => {
    scoreHandler(totalScore);
  };

  const { question, answers, correctAnswer }: IQuestion =
    questions[questionSet[questionIndex]];

  return (
    <>
      {score ? (
        <p>You scored: {score}</p>
      ) : (
        <div>
          <p>{question}</p>
          <div>
            {answers.map((answer) => (
              <OptionButton
                key={answer}
                onClick={() => handleAnswerClick(answer)}
                className={
                  answer === selectedAnswers[questionIndex]
                    ? "bg-red-400"
                    : "bg-blue-400"
                }
              >
                {answer}
              </OptionButton>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Button onClick={() => setQuestionIndex(questionIndex - 1)}>
              Back
            </Button>

            {questionIndex === 9 ? (
              <Button onClick={handleSubmitClick}>Submit</Button>
            ) : (
              <Button onClick={handleNextClick}>Next</Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
