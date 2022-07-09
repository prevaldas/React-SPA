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
        <br />
        <button className="btn" onClick={getJoke}>
          New joke
        </button>
        <h2 className="joke-space" dangerouslySetInnerHTML={{ __html: joke }} />
      </center>
    </div>
  );
}
export default JokeGen;
