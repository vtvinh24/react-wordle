import { useEffect, useState } from "react";
import { getScore } from "../../logic/api/offline/score";

const Home = () => {
  const [score, setScore] = useState<number>(0);
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    getScore(word).then((score) => {
      setScore(score);
    });
  }, [word]);

  return (
    <div id="base-home">
      <h1 className="text-xl">Home</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
        maxLength={10}
        
      />
      <p>Score: {score}</p>
    </div>
  );
};

export default Home;
