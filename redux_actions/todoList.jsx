import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handlekeyPress = this.handlekeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onEvent = this.onEvent.bind(this);
        this.state = {
            uniqueId: 0,
            contents: '',
        };
    }
    componentDidMount(){
        const input = window.document.getElementById('inputs');
        input.addEventListener('change',this.onEvent);
    }
    onEvent(e){
        this.setState({contents:e.target.value});
    }
    handlekeyPress(e){
        if (e.key === "Enter") {

        }
    }
    handleClick(e){
        console.log(e);
        
        this.setState({
            uniqueId:e.uniqueId,
            contents:e.contents
        });
    }
    render() {
        var todo = this.props.item.map((item) => {
            var li = [];
            li.push(<li onClick={() => this.handleClick(item)}>{'uniqueId: ' + item.uniqueId + ', contents: ' + item.contents }</li>);
            return li;
        });
        
        var {handleAddTodo,handleRemoveTodo,handleUpdateTodo} = this.props;
        return (
            <div >
                <input
                    type="text"
                    id='inputs'
                 />
                <button id="btnAdd" onClick = {() => handleAddTodo(this.state,this.props.item)}>ADD</button>
                <button id="btnRemove" onClick = {() => handleRemoveTodo(this.state, this.props.item)}>REMOVE</button>
                <button id="btnUpdate" onClick = {() => handleUpdateTodo(this.state, this.props.item)}>UPDATE</button>
                {todo}
                <p>{'uniqueId: ' + this.state.uniqueId + ', contents: ' + this.state.contents }</p>
            </div>
        );
    }
}

TodoList.propTypes = {
    item : PropTypes.object,
    handleAddTodo : PropTypes.func,
    handleRemoveTodo : PropTypes.func,
    handleUpdateTodo : PropTypes.func,
};
