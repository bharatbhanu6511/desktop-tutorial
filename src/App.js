import { useState } from 'react';
import './App.css';
import ColorBox from './ColorBox';
import ColorInput from './ColorInput';

function App() {
  const [color, setColor] = useState('white')
  const [boxText, setBoxText] = useState('Empty Value')

  return (
    <div className="App">
      <ColorBox color={color} boxText={boxText} setBoxText={setBoxText} />
      <ColorInput setColor={setColor} setBoxText={setBoxText} />
    </div>
  );
}

export default App;
