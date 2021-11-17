import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import styles from './Skills.module.css';
const Container = Styled.div`
 
 progress {
     margin-right :8px;
 }
progress[value]{
    width:${props => props.width};
    -webkit-appearance: none;
appearance: none;
}
progress[value]::-webkit-progress-bar {
   
    width: 265px;
    height: 13px;
    left: 429px;
    top: 467px;
    
    background: #FFFFFF;
    border-radius: 57px;
    
    
  }
  progress[value]::-webkit-progress-value {
    
    width: 222px;
    height: 13px;
    left: 429px;
    top: 467px;

    background: #FC8E5B;
    border-radius: 81px;
    
    
  }


`;
const Progress = ({ title, value, max, color, width }) => {
    return (
        <Container color={color} width={width}>

            <div  >
                <div style={{ textAlign: 'right' }} >
                    <span className={styles.text}>{title}  <span className={styles.txt}>{(value / max) * 100}%</span> </span>
                </div>
                <div>
                    <progress value={value} max={max} />
                </div>
            </div>

        </Container>
    )
};

Progress.propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string
};
Progress.defaultProps = {
    max: 100,
    color: 'lightBlue',
    width: '265px',

};

export default Progress
