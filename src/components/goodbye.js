// import React from 'react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Goodbye extends Component {




    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
    }

    handleClick() {
        this.setState({clicks: ++this.state.clicks});
    }


    render() {
        return (
            <h1 onClick={() => this.handleClick()}>Goodbye, {this.props.name} <span >{this.state.clicks} time(s)!</span></h1>


        );
    }
}

Goodbye.defaultProps = {
    name: 'salah',
};



Goodbye.propTypes = {
    name: PropTypes.string.required,
};
