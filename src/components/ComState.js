import React, {useState} from "react";

const ComState = () => {

    const [name, setName] = useState("");
    const [names, setNames] = useState([]);
    function addComment(e) {
    e.preventDefault();
    setNames([...names, {id: names.length, name}]);
    setName("");
    }

function disapier() {
  document.querySelector('#form-input').style.display= 'none';
}
    
    return (
    <div className="comment">

        <form  id="form-input" onSubmit={addComment}>
            <input type="text"
            spellCheck="false" value={name} 
            placeholder="or write comment..."
            onChange={(e) => setName(e.target.value)} />
            <button onClick={disapier} className="btn" >Submit</button>

        </form>
        
            {names.map((item) => (
                <p id="form-comment" className="item-p" key={item.id}>{item.name}</p>
            ))}
            
    </div>
    );
};
export default ComState;