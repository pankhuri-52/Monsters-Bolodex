import  {Component}  from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor() {
  super(); //calls the constructor of class component

  this.state = {
    monsters: [
      {
        name: 'Linda',
        id:'123edgt56'
      },
      {
        name: 'Frank',
        id:'12ndfgyrt'
      },
      {
        name: 'Jacky',
        id:'1wb3yrt'
      },
      {
        name: 'Andrei',
        id:'uirf4fj'
      }
    ]
  }
}

render() {
  return (
    <div className="App">
      {
        this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })
      }
    </div>
  );
 }
}

export default App;
