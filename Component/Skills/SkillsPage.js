import React from 'react'

import Skills from './Skills'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Skills.module.css';
import { ReactComponent as Figma } from '../icone/figma.svg';
import { ReactComponent as JS } from '../icone/js.svg';
import { ReactComponent as Ai } from '../icone/Ai.svg';
import { ReactComponent as Ailight } from '../icone/Ailight.svg';
import { ReactComponent as HtmlCss } from '../icone/HTML-Css.svg';
import { ReactComponent as Flutter } from '../icone/logos_flutter.svg';
import { ReactComponent as Flutterdark } from '../icone/logos_flutterdark.svg';
import { ReactComponent as Reactsvg } from '../icone/React.svg';
import { ReactComponent as Ps } from '../icone/Ps.svg';
import { ReactComponent as Pslight } from '../icone/pslight.svg';
const SkillsPage = (props) => {

    return (

        <Container className={styles.contain} >

            <div className={styles.head}>
                <h1 className={styles.title}>Proffesional<br /><span className={styles.line2}>S<span className={styles.line}>kill</span></span>s</h1>

            </div>

            <Row className={styles.rows}>
                <Col className={styles.cols}>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <Figma />
                        </div> <Skills skill={skills[0]} /></div>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <JS />
                        </div>
                        <Skills skill={skills[1]} /></div>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            {props.Image === true ? <Ailight /> : <Ai />}
                        </div>

                        <Skills skill={skills[2]} />
                    </div>

                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <HtmlCss />
                        </div>
                        <Skills skill={skills[3]} />
                    </div>

                </Col>
                {/*dexiem col*/}
                <Col className={styles.cols}>

                    <div className={styles.container}>
                        <div className={styles.logo}>
                            {props.Image === true ? <Flutterdark /> : <Flutter />}
                        </div>

                        <Skills skill={skills[4]} />
                    </div>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <Reactsvg />
                        </div>
                        <Skills skill={skills[5]} />
                    </div>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            {props.Image === true ? <Pslight /> : <Ps />}
                        </div>

                        <Skills skill={skills[6]} />
                    </div>

                </Col>

            </Row>

        </Container>

    )
}

const skills = ['Figma', 'Js', 'Ai', 'HTML & Css', 'Flutter', 'React', 'Ps'];

export default SkillsPage
