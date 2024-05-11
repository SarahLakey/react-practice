import styles from './Student.module.css'
 
function Student(props){
    return(
        <div className={styles.student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age} months</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student