import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Work.module.css'
import Pic1 from '../icone/Pic1.png'
import Pic2 from '../icone/Pic2.png'
const Scroll = () => {
    return (
        <div className={styles.dim}>
            <Container className={styles.scroll} fluid >
                <Row  >
                    <Col className={styles.pic} >
                        <img src={Pic1} alt='pic1' height='210px' width='300px' />
                    </Col>
                    <Col className={styles.annonce}>
                        <div >
                            <h3 className={styles.title}>Shop website</h3>
                            <br />
                            <p className={styles.txt}>THIS IS A HOMEPAGE DESING AND BUILD FOR A <br /><span> CONCEPT PROJECT </span> <br /> <span> A SHOP WEBSITE </span></p>

                        </div>
                    </Col>
                </Row>
                <Row  >

                    <Col className={styles.annonce}>
                        <div >
                            <h3 className={styles.title}>HABIT BUILDER APPLICATION</h3>
                            <br />
                            <p className={styles.txt}>THIS IS AN APP DESING AND BUILD FOR A CONCEPT PROJECT  <br /> A HABIT BUILDER APPLICATION .</p>

                        </div>
                    </Col>
                    <Col className={styles.pic} >
                        <img src={Pic2} alt='pic1' height='210px' width='310px' />
                    </Col>
                </Row>
                <Row  >
                    <Col className={styles.pic} >
                        <img src={Pic1} alt='pic1' height='210px' width='300px' />
                    </Col>
                    <Col className={styles.annonce}>
                        <div >
                            <h3 className={styles.title}>Shop website</h3>
                            <br />
                            <p className={styles.txt}>THIS IS A HOMEPAGE DESING AND BUILD FOR A <br /><span> CONCEPT PROJECT </span> <br /> <span> A SHOP WEBSITE </span></p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Scroll;
