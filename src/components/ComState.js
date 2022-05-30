import React, {useState} from "react";

const ComState = () => {
    const [inputValue, setInputValue] = useState("...here.");

    let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    };

    return (
        <div className="comment">
    <input placeholder="or write something..." onChange={onChange} />
        <h3 className="h3-input">{inputValue}</h3>
        </div>
    );

};

export default ComState;