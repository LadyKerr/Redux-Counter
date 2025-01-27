import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    incrementIfOdd = () => {
        if(this.props.count % 2) {
            return {count: this.props.increment()}
        }
    };

    incrementAsync = () => {
        setTimeout(() => this.props.increment(), 1000)
    };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <div className="counter-container">
                <h1>Clicked: {this.props.count} times</h1>
                <button className="btn" onClick={() => {this.props.increment() }}>
                    +
                </button>
                <button className="btn" onClick={() => {this.props.decrement() }}>
                    -
                </button> <br />
                 
                <button className="btn fn" onClick={this.incrementIfOdd}>
                    + if odd
                </button>
                <button className="btn fn" onClick={this.incrementAsync}>
                    + async
                </button> 
            </div>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement })(Counter);
