// /* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Game from "./components/Game";
// import HighScores from "./components/Highscores";


function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
          <>
          <h1>🎲 Dice Roller Game</h1>
          <Registration setUser={setUser} />
          <Login setUser={setUser} />
        </>
      ) : (
        <>
        <Game setUser={setUser} />
        </>
      )}
    </div>
  );
}

export default App;
