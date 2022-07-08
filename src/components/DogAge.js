import React, { useState } from 'react';

function DogAge() {
  const [dogAge, setDogAge] = useState();
  const [humanAge, setHumanAge] = useState();

  let calcAge = (event) => {
    event.preventDefault();

    if (dogAge === 0) {
      alert('Please enter age!');
    } else {
      let humanAge = (dogAge - 2) * 4 + 21;
      setHumanAge(humanAge.toFixed(1));
    }
  };

  return (
    <div>
      <form onSubmit={calcAge}>
        <h6 className="greet">How old is your dog in human years?</h6>
        <input
          value={dogAge}
          onChange={(event) => setDogAge(event.target.value)}
          placeholder="dog years"
        />
        <button className="btn">submit</button>
      </form>
      <br />
      <h3 className="human-years">{humanAge}</h3>
    </div>
  );
}
export default DogAge;
