import React from 'react'
import './App.css'
import BaseBlueprint from './components/baseBlueprint'
import SetDiimentions from './components/setDimentions'
import SetColor from './components/setColor'
import SetChamfer from './components/setChamfer'
import Additionally from './components/additionally'
import Total from "./components/total"
import SendCalculation from './components/sendCalculation'

function App() {
  return (
    <div className="main-wrap">
      <main>
        <BaseBlueprint />
        <SetDiimentions />
        <SetColor />
        <SetChamfer />
        <Additionally />
        <Total />
        <SendCalculation />
      </main>
  </div>
  );
}

export default App;
