import React, {useState, useEffect} from "react";

const ComState = () => {

    const [name, setName] = useState("");
    const [names, setNames] = useState([]);
    function addComment(e) {
    e.preventDefault();
    setNames([...names, {id: names.length, name}]);
    setName("");
    }
    useEffect(() => {
        
    },[]);
    
    return (
    <div className="comment">

        <form onSubmit={addComment}>
            <input type="text" value={name} 
            placeholder="or write comment..."
            onChange={(e) => setName(e.target.value)} />
            <button className="btn" >Submit</button>

        </form>
        
            {names.map((item) => (
                <p className="item-p" key={item.id}>{item.name}</p>
            ))}
            
    </div>
    );
};
export default ComState;