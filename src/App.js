import './App.css';
import Image from "./assets/Income Certificate.jpg";
function App() {
  const x = 10;
  var text;
  if(x===1){
    text="Equal";
  }else {
    text="Not Equal";
  }
  return (
  <div className="App">
    <h1>Hello world</h1>
    <p>This is paragraph{5+50}</p>
    <h3>{5+50}</h3>
    <img src={Image}alt="pic" width="200px"/>
    <h2>{text}</h2>
    <h2>{x >= 10 ? "greater":"lesser"}</h2>
    </div>
  );
}

export default App;
