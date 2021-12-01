import React from 'react'
import styles from './Work.module.css'

import Scroll from './Scroll'

export const WorkPage = () => {
    return (
        <div className={styles.Workcont} >
            <div className='row xrow'>
                <div className='col-md-6'>
                    <h1 className={styles.head}><span className={styles.line}>W</span>ork</h1>
                </div>

                <div className='col-md-6 scl '>
                    <Scroll />
                </div>
            </div>
        </div>
    )
}
export default WorkPage;
