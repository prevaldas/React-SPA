import Footer from './Footer';
import FunctionComp from './FunctionComp';
import ClassComp from './ClassComp';
import ComState from './ComState';
import SetStateCounter from './SetStateCounter';
import Views from './Views';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';
import JokeGen from './JokeGen';
import TodoList from './TodoList';
import DogAge from './DogAge';
import Weather from './Weather';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter hashType="hashbang">
      <div className="App grid-container">
        <div className="item1">
          <ClassComp />
        </div>
        <div className="item2">
          <Menu />
        </div>
        <div className="item3">
          <Routes>
            <Route path="/" element={<FunctionComp name="Evaldas" />} />
            <Route path="/joke" element={<JokeGen />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/dogAge" element={<DogAge />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="*" element={<FunctionComp name="Evaldas" />} />
          </Routes>
        </div>
        <div className="item4">
          <SetStateCounter />
          <ComState />
        </div>
        <div className="item5">
          <Views />
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
