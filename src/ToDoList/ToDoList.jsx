import React, { useState } from 'react'
import styles from './ToDoList.module.css'


function ToDoList(){

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dogs"]);
    const [newTask, setNewTask] = useState("");

    //to see the text within the text box
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        //to make sure that you have to actually add text vs just clicking the add button

        //if after removing any white space this is strictly not equal to any empty string, then add a new task
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    return(
        <div className={styles.toDoList}>
            <h1> To Do List: </h1>
            <div>
                <input
                    type="text"
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange}
                    />
                <button
                className={styles.addButton}
                onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className={styles.text}>{task}</span>
                        <button
                            className={styles.deleteButton}
                            onClick={() => deleteTask(index)}>
                            ✄ Delete
                        </button>

                        <button
                            className={styles.moveButton}
                            onClick={() => moveTaskUp(index)}>
                            ⬆️
                        </button>
                        {/* to add emoji: CTRL + CMD + Space */}

                        <button
                            className={styles.moveButton}
                            onClick={() => moveTaskDown(index)}>
                            ⬇️
                        </button>
                    </li>
                )}
            </ol>
    
            <h6>*Pending*</h6>

        </div>
        
        )
    }

export default ToDoList