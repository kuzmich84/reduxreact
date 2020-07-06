import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

const Counter = ({counter, inc, dec, isNull}) => {
    return (
        <div className="container">
            <div className="counter-block">
                <h1>{counter}</h1>
                <ul className="counter-list">
                    <li onClick={inc} className="counter-item counter-item--sub"/>
                    <li onClick={dec} className="counter-item counter-item--minus"/>
                    <li onClick={isNull} className="counter-item counter-item--group"/>
                </ul>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

export default connect(mapStateToProps, actions)(Counter);
