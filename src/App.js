import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import BaseBlueprint from './components/baseBlueprint'
import SetDiimentions from './components/setDimentions';
import SetColor from './components/setColor';
import Additionally from './components/additionally';
import Total from "./components/total"
import SendCalculation from './components/sendCalculation'

function App() {
  return (
    <div class="main-wrap">
      <main>
        <BaseBlueprint />
        <SetDiimentions />
        <SetColor />
        <Additionally />
        <Total />
        <SendCalculation />
      </main>
  </div>
  );
}

export default App;