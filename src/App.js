//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

import { Button } from '@material-ui/core';

import { Spring } from 'react-spring/renderprops'


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homecount, setHomeCount] = useState(32)
const [awaycount, setAwayCount] = useState(32)
  return (
    <Spring 
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>
    <div style={props} className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homecount}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awaycount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <Button size="large" variant="contained"  onClick={() => {setHomeCount(homecount + 7)}}>Home Touchdown</Button>
          <Button size="large" variant="contained"  onClick={() => {setHomeCount(homecount + 3)}}>Home Field Goal</Button>
        </div>
        <div className="awayButtons">
          <Button size="large" variant="contained"  onClick={() => {setAwayCount(awaycount + 7)}}>Away Touchdown</Button>
          <Button size="large" variant="contained"  onClick={() => {setAwayCount(awaycount + 3)}}>Away Field Goal</Button>
        </div>
      </section>
    </div>}
</Spring>
  );
}

export default App;
