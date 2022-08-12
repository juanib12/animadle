import React from "react";

export default function Modal({ isCorrect, solution, turn }) {

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Ganaste!</h1>
          <p className="solution">{solution}</p>
          <p>Encontraste la solución en {turn} intentos! :)</p>
          <button onClick={refreshPage} className="btn-modal">Volver a jugar</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Perdiste :(</h1>
          <p className="solution">{solution}</p>
          <p>Suerte en la proxima :)</p>
          <button onClick={refreshPage} className="btn-modal">Volver a jugar</button>
        </div>
      )}
    </div>
  );
}
