import React, { useState } from "react";
import styles from './List.module.css'


function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

        //If you do the below, it will remove the foods previously in the array
        // setFoods([newFood]);

        //Use spread operator to keep items from the array while adding to it
        // setFoods([...foods, newFood]);

        //best practice is to use an update variable; use the first letter of the state variable (in this case "foods") to use the spread operator on the previous state
        setFoods(f => [...foods, newFood]);

    }

    function handleRemoveFood(index){

        //when you use an underscore _ for a parameter, that means it should be ignored
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2 className={styles.listCategory}>List of Food</h2>
            <ol className={styles.orderedListItems}> 
                {foods.map((food,index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>
            )}
            </ol>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
  
        </div>
    )
}

export default MyComponent;