import styles from './UserGreeting.module.css'
import PropTypes from 'prop-types';

function UserGreeting(props){

    const welcomeMessage = <h1 className={styles.welcomeMessage}>
                            Welcome, {props.username}!</h1> 

    const loginPrompt = <h1 className={styles.loginPrompt}>
                            Please log in to continue.</h1>


    return(props.isLoggedIn ?  welcomeMessage : loginPrompt
        );
    }

    UserGreeting.prototype = {
        isLoggedIn: PropTypes.bool,
        username: PropTypes.string,
    }

    // UserGreeting.defaultProps={
    //     isLoggedIn: false,
    //     username: "Guest",
    // }

export default UserGreeting