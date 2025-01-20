import logo from './logo.svg';
import './App.css';

function App() {

  const randomNamechange=()=>{
    const name=["aniketh","geder","ayush"];
    const int=Math.floor(Math.random()*3);
    return name[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {randomNamechange()} how are you 
        </p>
      </header>
    </div>
  );
}
export default App;
