import React, { useState } from 'react'
import styles from './ToDoList.module.css'


function ToDoList(){

    //hard code in some tasks for the array initially to test
    // const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dogs"]);

    const [tasks, setTasks] = useState([]);
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

        // an underscore is the convention to ignore it
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        //check to see if index is greater than 0 -- if its already at the top, we don't need to move it up further
        //this code will swap 2 elements in an array

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
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