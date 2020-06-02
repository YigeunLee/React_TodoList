import './App.css';
import React,{PureComponent} from 'react';
import {Provider} from 'react-redux';
import TodoListContainer from './redux_actions/todoListContainer';
import reducers from './redux_actions/reducers';
import { createStore } from 'redux';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
        const store = createStore(reducers, devTools);
        
          return (
              <div>
                <nav>
                    <div className="nav_wrapper">
                        <Provider store={store}>
                            <TodoListContainer/>
                        </Provider>
                    </div>
                </nav>
              </div>
          );
    }
}

export default App;






