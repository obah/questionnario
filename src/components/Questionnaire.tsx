import { IQuestion } from "../../types";
import { questions } from "../../lib/constants";
import { Button } from "./ui/Button";
import { Dispatch, useState } from "react";

interface Props {
  questionNumbers: number[];
  score: number | null;
  scoreHandler: Dispatch<React.SetStateAction<number | null>>;
}

export function Questionnaire({ questionNumbers, scoreHandler, score }: Props) {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

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
    questions[questionNumbers[questionIndex]];

  const totalQuestionNumber = questionNumbers.length;

  return (
    <>
      {score ? (
        <p className="text-5xl font-medium">
          You scored: {score} / {totalQuestionNumber}
        </p>
      ) : (
        <div>
          <p>{question}</p>
          <div className="flex gap-5">
            {answers.map((answer) => (
              <Button
                key={answer}
                onClick={() => handleAnswerClick(answer)}
                className={
                  answer === selectedAnswers[questionIndex]
                    ? "bg-emerald-500"
                    : "bg-white text-black"
                }
              >
                {answer}
              </Button>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <Button
              onClick={() => setQuestionIndex(questionIndex - 1)}
              disabled={questionIndex < 2}
            >
              Back
            </Button>

            {questionIndex === totalQuestionNumber - 1 ? (
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
