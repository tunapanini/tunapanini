import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { TodoActions } from 'store/actionCreators';

class TodosContainer extends Component {
	handleInsert = () => {
		const { input } = this.props;
		TodoActions.insert(input);
		TodoActions.changeInput('');
	}
	
	handleToggle = (id) => {
		TodoActions.toggle(id);
	}
	
	handleRemove = (id) => {
		TodoActions.remove(id);
	}
	
	handleChange = (e) => {
		TodoActions.changeInput(e.target.value);
	}

	render() {
		const { handleInsert, handleToggle, handleRemove, handleChange } = this;
		const { todos, input } = this.props;
		
		return (
			<Todos
				todos={todos}
				input={input}
				onInsert={handleInsert}
				onToggle={handleToggle}
				onRemove={handleRemove}
				onChange={handleChange}
			/>
		);
	}
}
export default connect(
	({todo}) => ({
		todos: todo.todos,
		input: todo.input
	})
)(TodosContainer);