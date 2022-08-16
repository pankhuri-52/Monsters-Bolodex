import  {Component}  from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor() {
  super(); //calls the constructor of class component

  this.state = {
    monsters: []
  };
  console.log('constructor');
}

componentDidMount() {
  console.log('componentDidMount');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
      this.setState(
      () =>  {
          return {monsters: users};
      }, 
      () => {
          console.log(this.state);
       }
    )); 
}

render() {
  console.log('render');

  return (
    <div className="App">

    <input className='search-box' 
            type='search' 
            placeholder='Search monsters' 
            onChange={(event) => {console.log(event.target.value);}} />
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
