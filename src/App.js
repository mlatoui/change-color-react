import { useEffect, useState } from 'react';
import './app.css';

const colors = [
  'crimson',
  'deeppink',
  'deepskyblue',
  'gold',
  'lightgrey',
  'pink',
  'orange',
  'mediumturquoise',
  'lemonchiffon',
  'indigo',
];

function App() {
  const [state, setState] = useState({ colorIndex: 0 });

  useEffect(() => {
    setState({ colorIndex: Math.floor(Math.random() * colors.length) });
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = colors[state.colorIndex];
  }, [state.colorIndex]);

  return (
    <div className="App">
      <h1 id="current-color">{colors[state.colorIndex]}</h1>
      <div className="colors">
        {colors.map((c, i) => {
          return (
            <button
              key={`color-${i}`}
              className={i === state.colorIndex ? 'active' : ''}
              style={{
                backgroundColor: c,
              }}
              onClick={() => {
                setState({ colorIndex: i });
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
