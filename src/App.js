import jack from './static/images/png-transparent-jack-skellington-santa-claus-the-nightmare-before-christmas-the-pumpkin-king-drawing-puss-in-boots-holidays-cartoon-fictional-character-removebg-preview.png'
import './App.css';

// import teamsCSV from "./data/data.csv";
import { useState } from 'react'
import { guests } from "./data/data";

import DataTransformation from './static/transformer';
import Restaurant from './components/Restaurant/Restaurant';

function App() {

  const transformer = DataTransformation(guests)
  const [data, setData] = useState(transformer)

  return (
    <div className="App">
      <header className="App-header">
        <img src={jack} className="App-logo" alt="logo" />
        <p>
          Steve's Nightmare Before Christmas (this is Steve ↖️)
        </p>
        <p>
          (Steve's nightmare sorted ⬇️)
        </p>
        <Restaurant steak={data.steak} vegan={data.vegan}></Restaurant>
      </header>
    </div>
  );
}

export default App;
