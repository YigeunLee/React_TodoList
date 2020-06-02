import { connect } from 'react-redux';
import TodoList from './todoList';
import {addTodo,updateTodo,removeTodo}from './reducers';

const mapStateToProps = (state) => {
    return {
        item : state.item
    };
};

const mapDispatchProps = (dispatch) => {
    return {
        handleAddTodo: (item) => { dispatch(addTodo(item))},
        handleRemoveTodo: (item) => { dispatch(removeTodo(item))},
        handleUpdateTodo: (item) => { dispatch(updateTodo(item))}
    };
};

export default connect(mapStateToProps, mapDispatchProps)(TodoList);