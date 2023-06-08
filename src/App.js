import { useEffect } from 'react';

const colors = [];

function App() {
  useEffect(() => {
    console.log('h2');
    // const randomIndex = Math.floor(Math.random());
  }, []);
  return (
    <div className="App">
      <h1 id="current-color">Test</h1>
      <div classname="colors"></div>
    </div>
  );
}

export default App;
