
import Footer from './Footer.js';
import FunctionComp from './FunctionComp.js';
import ClassComp from "./ClassComp";
import SetStateCounter from "./SetStateCounter";

function App() {
  return (
    <div className="App">
    <ClassComp />
    <FunctionComp name="Evaldas" />
    <SetStateCounter />
    <Footer />
    </div>
  );
}

export default App;