import React from "react";
import "./style.css";

const Buttons = props => (
    <div className="card-body">
        <button className="btn btn-primary">1</button>
        <button className="btn btn-primary">2</button>
        <button className="btn btn-primary">3</button>
        <button className="btn btn-danger">+</button>
        <br />
        <button className="btn btn-primary">4</button>
        <button className="btn btn-primary">5</button>
        <button className="btn btn-primary">6</button>
        <button className="btn btn-danger">-</button>
        <br />
        <button className="btn btn-primary">7</button>
        <button className="btn btn-primary">8</button>
        <button className="btn btn-primary">9</button>
        <button className="btn btn-danger">x</button>
        <br />
        <button className="btn btn-primary">0</button>
        <button className="btn btn-danger">/</button>
        <button className="btn btn-danger">^</button>
        <button className="btn btn-success">=</button>
        <br />
        <button className="btn btn-dark">clear</button>
    </div>
) 

export default Buttons;