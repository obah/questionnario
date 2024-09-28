import { ChangeEvent, Dispatch, useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

interface Props {
  inputHandler: Dispatch<React.SetStateAction<string>>;
  startHandler: Dispatch<React.SetStateAction<boolean>>;
}

export function WelcomePage({ inputHandler, startHandler }: Props) {
  const [username, setUsername] = useState<string>("");

  const handleStartClick = () => {
    startHandler(true);
    inputHandler(username);
  };

  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="flex flex-col items-center space-y-10">
      <Input
        name="username"
        placeholder="Enter your username"
        value={username}
        onChange={handleNameInput}
        required
      />
      <Button onClick={handleStartClick}>Start</Button>
    </div>
  );
}
