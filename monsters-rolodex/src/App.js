import  {Component}  from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor() {
  super(); //calls the constructor of class component

  this.state = {
    name: 'Pankhuri'
  }
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name}
        </p>
        <button onClick = { () => {
            this.setState( {name: 'Andrei'} )
        }}>Change Name</button>
      </header>
    </div>
  );
 }
}

export default App;
