import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('.default'));

// Moataz
// https://reactjs.org/docs/components-and-props.html
// function Welcome(props) {
//     return <h1>Hello => {props.name}</h1>;
// }


class Welcome extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            date: new Date(),
            name:props.name

        };
    this.name =props.name;
    }


    render() {
        return (
            <div>
                <h1>Hello, {this.name } !</h1>
                {/*<h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/}
            </div>
        );
    }
}


function Family(props) {
    return <ul>
        <li><Welcome name='Moataz'/></li>
        <li><Welcome name='Hamza'/></li>
    </ul>;
}


const element = <Family/>;
ReactDOM.render(
    element,
    document.getElementById('root')
);


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // shouldn't use setState !! in constructor
            date: new Date()

        };


    }

    componentDidMount() {

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    tick() {

        // this.state.date = new Date();  // wrong you should use setState


        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Time: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('timer')
);

///////////////////////////

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}


function Greeting(props) {

    const isLoggedIn = props.isLoggedIn;


    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={true} />,
    document.getElementById('login')
);