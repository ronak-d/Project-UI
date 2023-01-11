import React from 'react'
import styles from '../CSS/IOfigma.module.css'

const IOfigma = () => {
  return (
    <div className={styles.container}>

        <div className={styles.compHeader}>
            <img src="../CSS/Vector.png"/>
            <p className={styles.compName}>Culinary kitchen</p>
        </div>

        <div className={styles.compVarities}>

            <div className={styles.varitiesSection}>
                <div><p className={styles.HeadVarities}>V A R I T I E S</p></div>

                <div className={styles.Varities}>
                    <div className={styles.VaritiesLine}></div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default IOfigma;