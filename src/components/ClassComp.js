import React from "react";

// STATE

class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
        message: "Hello!"
    }
  }

  changeMessage(){
      this.setState({
          message: "Thanks"
      })
  }

  change(){
    this.setState({
      message:"Hello!"
    })
  }
  render() {

return (<div className="hi">
  <div className="greet">
  <div  className="greet-h1">
  <h1>{this.state.message}</h1>
  </div>
  <div className="greet-btn">
  <button className="btn" onMouseLeave={() => this.change()} onClick={() => this.changeMessage()} >Greet back</button>
  </div>
  </div>
  </div>
)
  }
};

export default MyComponent;