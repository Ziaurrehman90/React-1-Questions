import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';

function App() {
  const items = ["Apple", "Banana", "Orange", "Mango"];
  return (
    <div>
      <h2>Fruit List:</h2>
      <List items={items} />
    </div>
  );

}

export default App;
