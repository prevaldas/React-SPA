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
  <div class="item1"><ClassComp /><FunctionComp name="Evaldas" /></div>
  <div class="item2"><JokeGen /></div>
  <div class="item3"><TodoList /></div>  
  <div class="item4"><SetStateCounter /><ComState /></div>
  <div class="item5"><Footer /></div>
  </div>
  );
}

export default App;
