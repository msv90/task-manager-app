import React, {Component} from 'react';
import Todos from "./Todos";

class App extends Component {

    state = {
        todos: [
            {id: 1, content: 'Get up early'},
            {id: 2, content: 'Drink coffee'},
            {id: 3, content: 'Rework portfolio'}
        ]
    };

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });

        this.setState({
            todos
        });
    };

    render() {
        return(
            <div className="todo-app container">
                <h1 className="center blue-text">The deals to do today</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        );
    }

}

export default App;