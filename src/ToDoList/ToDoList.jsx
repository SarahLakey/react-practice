import React, { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dogs"]);
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

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button
                            className='delete-button'
                            onClick={() => deleteTask(index)}>
                            ✄ Delete
                        </button>

                        <button
                            className='move-button'
                            onClick={() => moveTaskUp(index)}>
                            ⬆️
                        </button>
                        {/* to add emoji: CTRL + CMD + Space */}

                        <button
                            className='move-button'
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