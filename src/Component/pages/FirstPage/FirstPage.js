import React from "react";
import LeftImage from "./Image";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./FirstPage.css";
function FirstPage() {
    return (
        <div className="row cont">
            <div className="col-md-6 col-sm-12 left-half">
                <LeftImage />
            </div>
            <div className="col-md-6 col-sm-12 right-half">
                <h1>Need a </h1>
                <h1>Project?</h1>
                <button className="btn">send message</button>
            </div>
        </div>
    );
}
export default FirstPage