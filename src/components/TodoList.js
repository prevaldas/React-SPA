import React from "react";

class TodoList extends React.Component {
    constructor(props){
        super(props);

        this.state={
            newItem:"",
            list:[]
        }
    }

    updateInput(key, value){
        //update react state
        this.setState({
            [key]: value
        });
    }
    addItem(){
        //item with uniq id
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };
        //copy current list
        const list = [...this.state.list];

        //add new item
        list.push(newItem);

        //update state
        this.setState({
            list,
            newItem:""
        });
    }
    //delete
    deleteItem(id){
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({list: updatedList}) 
    }

render() {
    return (
        <div className="todo">
        <h1 className="todo-h1">ToDo List</h1>
            <div>
                <input className="input" type="text"
                placeholder="Add one here..."
                value={this.state.newItem}
                onChange={e => this.updateInput("newItem", e.target.value)} />
                <button className="btn" onClick={() => this.addItem()}>+</button>
                <br />
                    {this.state.list.map(item => {
                        return(
                            <p key={item.id}>{item.value}
                            <button className="btn-x" onClick={() => this.deleteItem(item.id)}>x</button>
                            </p>
                        )
                    })}
            </div>
        </div>
    );
}
}

export default TodoList;