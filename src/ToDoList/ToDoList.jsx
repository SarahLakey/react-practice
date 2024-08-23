import React, { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    //to see the text within the text box
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    return(
        <div className='to-do-list'>
            <h1> To Do List: </h1>
            <div>
                <input
                    type="text"
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange}
                    />
                <button
                className='add-button'
                onClick={addTask}>
                    Add
                </button>
            </div>
    
            <h6>*Pending*</h6>

        </div>
        
        )
    }

export default ToDoList