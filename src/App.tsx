import { useState } from "react";
import { WelcomePage } from "./components/WelcomePage";
import { Questionnaire } from "./components/Questionnaire";
import { generateRandomNumbers } from "../lib/utils";

function App() {
  const [username, setUsername] = useState<string>("");
  const [started, setStarted] = useState<boolean>(false);
  const [score, setScore] = useState<number | null>(null);

  const randomNumbers = generateRandomNumbers({ size: 3, min: 0, max: 30 });

  return (
    <main className="flex min-h-screen w-screen flex-col items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% pt-20">
      <h1 className="mb-10 text-7xl font-semibold">
        {username === "" ? (
          "Welcome to Questionnario"
        ) : (
          <>
            Goodluck <span className="capitalize">{username}</span>
          </>
        )}
      </h1>
      {!started ? (
        <WelcomePage inputHandler={setUsername} startHandler={setStarted} />
      ) : (
        <Questionnaire
          score={score}
          scoreHandler={setScore}
          questionNumbers={randomNumbers}
        />
      )}
    </main>
  );
}

export default App;
