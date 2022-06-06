import './App.css';
import { Navbar } from './Components/Navbar';
import { Profile } from './Components/Profile';
import { Todo } from './Components/Todo';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div id="wrapper">
      
      <Profile />
      <Todo />
      </div>

      
    </div>
  );
}

export default App;
