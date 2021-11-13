import React from 'react'
import styles from './Work.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Scroll from './Scroll'

export const WorkPage = () => {
    return (
        <Container fluid >
            <Row>
                <Col  >
                    <div >
                        <h1 className={styles.head}>Work</h1>
                        <hr className={styles.line}></hr>
                    </div>
                </Col>
                <Col xs={12} md={8} >
                    <Scroll />
                </Col>
            </Row>
        </Container>
    )
}
export default WorkPage;
