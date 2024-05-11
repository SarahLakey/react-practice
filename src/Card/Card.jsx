import profilePic from '../assets/profile.jpg'
import styles from './Card.module.css'

function Card(){

    return(
        <>
        <div className={styles.card}>
            <img className={styles.cardImage} src={profilePic} alt="profile picture"></img>
            <h2 className={styles.cardTitle}>Sarah</h2>
            <p className={styles.cardText}>I love my kids!</p>
        </div>
        </>
    );

}

export default Card