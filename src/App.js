import './App.css';
import {Login} from "./Components/Login";
import { Routes, Route} from "react-router-dom";
import {Home} from "./Components/Home";
import { Summary } from './Components/Summary';
import Personal from './Components/Personal';
import Other from './Components/Other';
import Offical from './Components/Offical';


function App() {

  

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Summary/All" element={<Summary />}></Route>
          <Route path="/Summary/Personal" element={<Personal /> } ></Route>
          <Route path="/Summary/Other" element={<Other />}></Route>
          <Route path="/Summary/Offical" element={<Offical />}></Route>
        </Routes>
      </div>
  );
}

export default App;
