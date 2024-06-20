import React, { useState } from "react";

function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){

    }

    function handleRemoveFood(){

    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul> 
                {foods.map((food,index) => <li key={index}>{food}</li>
            )}
            </ul>
        </div>
    )
}

export default MyComponent;