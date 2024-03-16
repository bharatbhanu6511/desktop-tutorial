import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ColorBox from './ColorBox';
import ColorInput from './ColorInput';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p>Hello world</p>
      <ColorBox count={count} setCount={setCount} />
      <ColorInput count={count} setCount={setCount} />
    </div>
  );
}

export default App;
