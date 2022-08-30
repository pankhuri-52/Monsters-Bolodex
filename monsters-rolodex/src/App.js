import  {Component}  from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

constructor() {
  super(); //calls the constructor of class component

  this.state = {
    monsters: [],
    searchField: ''
  };
}

componentDidMount() {
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
      this.setState(
      () =>  {
          return {monsters: users};
      }
    )); 
}

onSearchChange = (event) => {console.log(event.target.value);
  const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
        return {searchField};
    });
}

render() {

  const {monsters, searchField} = this.state;
  const {onSearchChange} = this;

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
 })


  return (
    <div className="App">
      <SearchBox onChangeHandler={onSearchChange} 
                 placeholder='Search monsters' 
                 className='monsters-search-box' />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
 }
}

export default App;
