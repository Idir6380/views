import React from 'react'
import styles from './Work.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Scroll from './Scroll'

export const WorkPage = () => {
    return (
        <Container className='Workcont' style={{ padding: '6.7%', paddingBottom: '10%', paddingTop: '9.15%' }} fluid>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className={styles.head}><span className={styles.line}>W</span>ork</h1>
                </div>

                <div className='col-md-6 scl '>
                    <Scroll />
                </div>
            </div>
        </Container>
    )
}
export default WorkPage;
