import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Work.module.css'
import Pic1 from '../icone/Pic1.png'
import Pic2 from '../icone/Pic2.png'

const Scroll = () => {
    return (
        <div  >
            <Container className={styles.scroll} style={{ padding: '0px', height: '500px' }}  >

                <div className='row'>
                    <div className='col-lg-6' style={{ padding: '0px' }}>

                        <img src={Pic1} alt='pic1' width="100%" height='100%' />

                    </div>


                    <div className='col-lg-6 ' style={{ padding: '0px' }} >

                        <div className={styles.annonce}>
                            <h3 className={styles.title}>SHOP WEBSITE</h3>
                            <br />
                            <p className={styles.txt1}>THIS IS A HOMEPAGE DESING AND BUILD FOR A <span> CONCEPT PROJECT </span> <br /> <span> A SHOP WEBSITE </span></p>

                        </div>

                    </div>
                </div>

                <div className='row'>

                    <div className='col-lg-6 ' style={{ paddingRight: '0px', paddingLeft: '0px' }} >
                        <div className={styles.annonce}  >
                            <   h3 className={styles.title}>HABIT BUILDER <br /> APPLICATION</h3>
                            <br />
                            <p className={styles.txt}>THIS IS AN APP DESING AND BUILD FOR A CONCEPT PROJECT  <br /> A HABIT BUILDER APPLICATION .</p>

                        </div>
                    </div>
                    <div className='col-lg-6' style={{ padding: '0px' }}>
                        <img src={Pic2} alt='pic2' width="100%" height='100%' />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-6' style={{ padding: '0px' }}>
                        <img src={Pic1} alt='pic1' width="100%" height='100%' />

                    </div>

                    <div className='col-lg-6 ' style={{ padding: '0px' }}>
                        <div className={styles.annonce}>
                            <h3 className={styles.title}>SHOP WEBSITE</h3>
                            <br />
                            <p className={styles.txt1}>THIS IS A HOMEPAGE DESING AND BUILD FOR A <span> CONCEPT PROJECT </span> <br /> <span> A SHOP WEBSITE </span></p>

                        </div>
                    </div>
                </div>
            </Container >
        </div >
    );
}

export default Scroll;
