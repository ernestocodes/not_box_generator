import React, {useState} from 'react'
import ColorBoxForm from './components/ColorBoxForm'
import ColorBoxDisplay from './components/ColorBoxDisplay'

function App() {
  const [newColor, setNewColor] = useState([])

  const handleNewColor = (box) =>{
    setNewColor([...newColor, box])

  }

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <ColorBoxForm onNewColor={handleNewColor}/>
      <ColorBoxDisplay newColor ={newColor}/>
    </div>
  );
}

export default App;
