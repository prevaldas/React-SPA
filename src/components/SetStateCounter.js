import React from "react";

// SETSTATE

class SetStateCounter extends React.Component {
  constructor() {
    super();
    this.state = {
        count: 0
    }
  }
        increment() {
        this.setState({
        count: this.state.count + 1
        })
      }
        decrement() {
        this.setState({
        count: this.state.count - 1
        })
      }

render() {
    return(<div>
  
    <h4 className="rate">Rate this page:</h4>
    <div className="rate-no">{this.state.count}</div>
    <div className="buttons">
    <button className="plusBtn" onClick={() => this.increment()}>+</button>
    <button className="minusBtn" onClick={() => this.decrement()}>-</button>
    </div>
    </div>
    )
}
}
export default SetStateCounter;