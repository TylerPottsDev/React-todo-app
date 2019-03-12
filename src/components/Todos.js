import React, { Component } from 'react';

export class Todos extends Component {
  render() {
	return (
	  <div className="todolist">
	  	{this.props.todos.map(todo => (
			<div key={todo.id} className={"todoitem " + (todo.done ? 'done' : '' )}>
				<div className="todoitem__title" onClick={this.props.toggleDone.bind(this, todo.id)}>{todo.content}</div>
				<div className="todoitem__remove" onClick={this.props.removeTodo.bind(this, todo.id)}>remove</div>
			</div>
		))}
	  </div>
	)
  }
}

export default Todos;
