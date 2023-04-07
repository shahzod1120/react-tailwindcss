import React from 'react'
import { styles } from '../util/style'
import { Button } from '../UI/Button'
import { Contract } from '../assets'

const Contarct = () => {
  return (
    <div id='clients' className={`${styles.flexBetween} ${styles.marginY} py-2 md:flex-row flex-col`}>
        <div className={`flex-1 ${styles.flexStart} flex-col sm:mb-0 mb-10`}>
            <h1 className={`${styles.haeading1}`}>Bir necha oson qadamda kontrakt tuzish</h1>
            <p className={`${styles.paragraph} py-2`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi modi quia veritatis possimus optio, voluptate nesciunt mollitia amet perspiciatis consequatur.</p>
            <Button style={'mt-3'} />
        </div>
        <div className={`flex-1`}>
            <img src={Contract} alt="" />
        </div>
    </div>
  )
}

export default Contarct
