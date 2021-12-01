import React from "react";
import LeftImage from "./Image";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./FirstPage.css";
function FirstPage(props) {
    return (
        <div className="row  cont ">
            <div className="col left-half">
                <LeftImage Circle={props.Circle} />
            </div>

            <div className="col right-half">
                <h1>Need a
                    <br />Project?</h1>
                <button className="btn">send message</button>
            </div>
        </div>
    );
}
export default FirstPage