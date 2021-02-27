import React from 'react'
import styles from './BuyersInviteCard.module.sass'

export default function BuyersInviteCard() {
    return (
        <div className={styles.container}>
            <span className={styles.cardText}>Ready to get started? Launch a contest and start receiving submissions instantly.</span>            
            <a href='/registration' className={styles.startButton}>
                <span className="far fa-lightbulb"></span>
                Start A Contest
            </a>
        </div>
    )
}
