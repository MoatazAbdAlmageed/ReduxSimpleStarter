// // import React from 'react';
// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//
//
// export default class Goodbye extends Component {
//
//
//
//
//     constructor(props) {
//         super(props);
//         this.state = { clicks: 0 };
//     }
//
//     handleClick() {
//         this.setState({clicks: ++this.state.clicks});
//     }
//
//
//     render() {
//         return (
//             <h1 onClick={() => this.handleClick()}>Goodbye, {this.props.name} <span >{this.state.clicks} time(s)!</span></h1>
//
//
//         );
//     }
// }
//
// Goodbye.defaultProps = {
//     name: 'salah',
// };
//
//
//
// Goodbye.propTypes = {
//     name: PropTypes.string.required,
// };

// Stateless component
import React from 'react';
// Normally the first argument to this function is props, However using a feature in ES6 called destructuring, we can replace ‘props’ with ‘{name}’ which is the equivalent to having ‘const name = props.name’
const Goodbye = ({name}) => <h1>Goodbye, {name}!</h1>;



export default Goodbye;