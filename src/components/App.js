
import Footer from './Footer.js';
import FunctionComp from './FunctionComp.js';
import ClassComp from "./ClassComp";
import SetStateCounter from "./SetStateCounter";
import ComState from "./ComState";

function App() {
  return (
    <div className="App">
    <ClassComp />
    <FunctionComp name="Evaldas" />
    <SetStateCounter />
    <ComState />
    <Footer />
    </div>
  );
}

export default App;