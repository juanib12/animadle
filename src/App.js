import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  // console.log(solution)

  useEffect(() => {
    fetch("https://62e35146b54fc209b8875e4b.mockapi.io/solutions")
      .then((res) => res.json())
      .then((json) => {
        // operacion matematica para retornar un numero random entre los numeros que haya (ej: entre 0 y 14)
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  console.log(solution);
  return (
    <div className="App">
      <div className="header">
        <h1>ANIMADLE</h1>
      </div>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
