import React from 'react';

const FunctionComp = (props) => {
  return (
    <div className="greetName">
      <h3>My name is {props.name}</h3>
      <h6>and here is React functionality to try out.</h6>
    </div>
  );
};

export default FunctionComp;
