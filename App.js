import './App.css';
import  List from './List';
import Errorboundary from './Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <List a={["chocalate","icecream","fruits",890]}/>
      </Errorboundary>
    </div>
  );
}

export default App;