import JokeGen from "./JokeGen";
import Footer from "./Footer";
import FunctionComp from "./FunctionComp";
import ClassComp from "./ClassComp"
import ComState from "./ComState";
import SetStateCounter from "./SetStateCounter";
import TodoList from "./TodoList";




function App() {
  return (
  <div className="App grid-container">
  <div className="item1"><ClassComp /><FunctionComp name="Evaldas" /></div>
  <div className="item2"><JokeGen /></div>
  <div className="item3"><TodoList /></div>  
  <div className="item4"><SetStateCounter /><ComState /></div>
  <div className="item5"><Footer /></div>
  </div>
  );
}

export default App;
