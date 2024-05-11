import styles from './UserGreeting.module.css'

function UserGreeting(props){

    return(props.isLoggedIn ? 
        <h1 className={styles.welcomeMessage}>Welcome, {props.username}!</h1> :
        <h1 className={styles.greeting}>Please log in to continue.</h1>
    
        );
    }


export default UserGreeting