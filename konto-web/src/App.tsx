import './App.css';
import { useState } from 'react'

const App: React.FC = () => {
  const [count, updateCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header" onClick={() => { updateCount(count => count + 1) }}>
        <div>MY PLEASURE{count}</div>
        <div>{process.env.REACT_APP_ELECTRON_MODE}</div>
      </header>
    </div>
  );
}

export default App;
