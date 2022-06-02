import { useState, useEffect } from "react";


function JokeGen () {

            const [joke, setJoke] = useState("");

            const generateJoke = () => {
            fetch(
                "http://api.icndb.com/jokes/randome?firstName=Evaldas&lastName=Pranckevicius"
                )
                .then((res) => res.json())
                .then((data) => {setJoke(data.value.joke)})
        
            }
    useEffect(() => {
            generateJoke();
    }, []);
    return<div className="item2">
    <center><h1 className="joke-gen">Joke Generator</h1>
        <h2 className="joke-space" dangerouslySetInnerHTML={{__html: joke}} />
    <button className="btn" onClick={generateJoke}>Generate joke</button>
    </center>
    </div>
}
export default JokeGen;