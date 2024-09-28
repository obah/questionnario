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
    <main>
      <h1>
        {username === "" ? "Welcome to Questionnario" : `Goodluck ${username}`}
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
