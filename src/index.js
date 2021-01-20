import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./page/form";
import store from './store/index'
import {Provider} from "react-redux";

const App=()=>{
    return <div className="App">
        <Provider store={store}>
            <Form/>
        </Provider>
    </div>
}

ReactDOM.render(<App />,document.getElementById('root'));

