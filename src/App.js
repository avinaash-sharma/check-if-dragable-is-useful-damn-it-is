import React, { useState } from "react";
import Draggable from "react-draggable";
import NewComponent from "./NewComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckingComponent from "./CheckingComponent";

const App = () => {
  // state = {
  //   activeDrags: 0,
  //   deltaPosition: {
  //     x: 0, y: 0
  //   },
  //   controlledPosition: {
  //     x: -400, y: 200
  //   }
  // };

  const [activeDrags, setActiveDrags] = useState(0);
  const [showCaller, setShowCaller] = useState(false);

  const onStart = () => {
    let temp = activeDrags + 1;
    setActiveDrags(temp);
  };

  const onStop = () => {
    let temp = activeDrags - 1;
    setActiveDrags(temp);
  };
  const dragHandlers = { onStart: onStart, onStop: onStop };
  return (
    <div>
      <button onClick={() => setShowCaller(true)}>Click</button>
      {showCaller && (
      <Draggable {...dragHandlers}>
        <div className="box" style={{position: 'absolute', bottom: '100px', right: '100px'}}>
        <button onClick={() => setShowCaller(false)}>Close</button>
          {
            "I have a default position of {x: 25, y: 25}, so I'm slightly offset."
          }
        </div>
      </Draggable>
      )}
      <NewComponent />
      <BrowserRouter>
      <Routes>
        
          
          <Route path="checkIng" element={<CheckingComponent />} />
          
        
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
