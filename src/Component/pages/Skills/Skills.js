import React, { useState, useEffect } from 'react'
import Progress from './Progress'

const Skills = (props) => {
    const [val, setVal] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setVal((oldVal) => {
                const newVal = oldVal + 10;
                if (newVal === 90) {
                    clearInterval(interval);
                }
                return newVal;
            })
        }, 50);
    }, []);

    return (
        <div >

            <div >
                <Progress title={props.skill} value={val} max={100} />
            </div>

        </div>
    )
}

export default Skills;
