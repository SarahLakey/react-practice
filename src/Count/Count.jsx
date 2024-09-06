// import styles from './Count.module.css'
import React, {useState, useEffect} from "react";

    //useEffect(function, [dependencies])

    //   Add Styling Example:     <div className={styles.toDoList}>

function Count(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    function addCount(){
        setCount(c => c+1);
    }

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>

        </>
    );

}

export default Count;