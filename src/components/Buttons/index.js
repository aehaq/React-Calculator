import React from "react";
import "./style.css";

const Buttons = props => (
    <div className="card-body">
        <button className="btn btn-primary" data-type={"number"} id={"1"} onClick={(e) => props.handleClick(e)}>1</button>
        <button className="btn btn-primary" data-type={"number"} id={"2"} onClick={(e) => props.handleClick(e)}>2</button>
        <button className="btn btn-primary" data-type={"number"} id={"3"} onClick={(e) => props.handleClick(e)}>3</button>
        <button className="btn btn-danger" data-type={"operator"} id={"+"} onClick={(e) => props.handleClick(e)}>+</button>
        <br />
        <button className="btn btn-primary" data-type={"number"} id={"4"} onClick={(e) => props.handleClick(e)}>4</button>
        <button className="btn btn-primary" data-type={"number"} id={"5"} onClick={(e) => props.handleClick(e)}>5</button>
        <button className="btn btn-primary" data-type={"number"} id={"6"} onClick={(e) => props.handleClick(e)}>6</button>
        <button className="btn btn-danger" data-type={"operator"} id={"-"} onClick={(e) => props.handleClick(e)}>-</button>
        <br />
        <button className="btn btn-primary" data-type={"number"} id={"7"} onClick={(e) => props.handleClick(e)}>7</button>
        <button className="btn btn-primary" data-type={"number"} id={"8"} onClick={(e) => props.handleClick(e)}>8</button>
        <button className="btn btn-primary" data-type={"number"} id={"9"} onClick={(e) => props.handleClick(e)}>9</button>
        <button className="btn btn-danger" data-type={"operator"} id={"x"} onClick={(e) => props.handleClick(e)}>x</button>
        <br />
        <button className="btn btn-primary" data-type={"number"} id={"0"} onClick={(e) => props.handleClick(e)}>0</button>
        <button className="btn btn-danger" data-type={"operator"} id={"/"} onClick={(e) => props.handleClick(e)}>/</button>
        <button className="btn btn-danger" data-type={"operator"} id={"^"} onClick={(e) => props.handleClick(e)}>^</button>
        <button className="btn btn-success" data-type={"equals"} id={"="} onClick={(e) => props.handleClick(e)}>=</button>
        <br />
        <button className="btn btn-dark">clear</button>
    </div>
) 

export default Buttons;