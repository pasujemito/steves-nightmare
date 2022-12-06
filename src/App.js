import jack from './static/images/png-transparent-jack-skellington-santa-claus-the-nightmare-before-christmas-the-pumpkin-king-drawing-puss-in-boots-holidays-cartoon-fictional-character-removebg-preview.png'
import './App.css';
// import teamsCSV from "./data/data.csv";
import { data } from "./data/data";
import DataTransformation from './static/transformer';
import Restaurant from './components/Restaurant/Restaurant';

function App() {

  const transform = DataTransformation(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={jack} className="App-logo" alt="logo" />
        <p>
          Steve's Nightmare Before Christmas
        </p>
        <Restaurant></Restaurant>
      </header>
    </div>
  );
}

export default App;
