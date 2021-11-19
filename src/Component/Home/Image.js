import React from "react";
import HelloSquare from "./HelloSquare";
import { ReactComponent as Animatedsvg } from './firstpage.svg';
import "./Image.css";
function LeftImage(props) {
    return (
        <div className={props.Circle === true ? 'circle' : 'light-circle'}>
            <div className="Hello-square">
                <HelloSquare />
            </div>
            <div className={props.Circle === true ? 'white-circle' : 'dark-circle'}>
                <div className='animate' >
                    <Animatedsvg />
                </div>
            </div>
        </div>
    );
}
export default LeftImage;