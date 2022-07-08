import { useState, useEffect } from 'react';
import axios from 'axios';

function JokeGen() {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    axios
      .get('https://v2.jokeapi.dev/joke//Programming?type=twopart')
      .then((res) => {
        console.log(res);
        setJoke(res.data.setup + ' ... ' + res.data.delivery);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="item2">
      <center>
        <h1 className="joke-gen">Joke Generator</h1>
        <h2 className="joke-space" dangerouslySetInnerHTML={{ __html: joke }} />
        <button className="btn" onClick={getJoke}>
          Generate joke
        </button>
      </center>
    </div>
  );
}
export default JokeGen;
