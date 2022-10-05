import { Component } from "react";
import list from './list.png'


export class List extends Component {
    
    state = {
        userInput: "",
        groceryList: []
    }

    changeItem(e) {
        this.setState({userInput:e})
    }

    addItem(input) {
        if (input === '') {
            return false;
        }

        let listArray = this.state.groceryList
        listArray.push(input)
        this.setState({groceryList: listArray, userInput:""})
        console.log(listArray)
    }

    deleteItem() {
        let listArray = this.state.groceryList
        listArray = []
        this.setState({groceryList: listArray})
    }

    crossedItem (event) {
        const li = event.target
        li.classList.toggle('crossed')
    }

    onSubmitForm (e) {
        e.preventDefault()
    }

    render() { 
        return <div className="main">
            <form onSubmit = {this.onSubmitForm}>
        <div className="container">
            <input type="text" placeholder="Type the text..." onChange={(e) => {this.changeItem(e.target.value)}}  value={this.state.userInput} />
            <button className="btnAdd" onClick={() => this.addItem(this.state.userInput)}><i className ="fa fa-plus"></i></button>
            <button className="btnDel" onClick={() => this.deleteItem()}><i className ="fa fa-trash"></i> DELETE ALL</button>
        </div>
        <div className="container">
        <ul>
            {this.state.groceryList.map((item, index) => (
                <li onClick={this.crossedItem} key={index}><img className="icon" src={list} alt="icon" width="25px"/> {item}</li>
            ))}
        </ul>
        </div>
        </form>
    </div>
    }
}