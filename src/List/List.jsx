
function List(){
    
    //each child in a list should have a unique "key" prop
    //real world scenario each would have a unique id

    
    const fruits = [{id: 1, name: "apple", calories: 95},
                     {id: 2, name: "orange", calories: 45}, 
                     {id: 3, name: "banana", calories: 105}, 
                     {id: 4, name: "coconut", calories: 159}, 
                     {id: 5, name: "pineapple", calories: 37}];

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                        <b>{fruit.name}</b>: &nbsp;
                        {fruit.calories}</li>);


    /*    SORTING

    ALPHABETICAL
   fruits.sort((a, b) => a.name.localeCompare(b.name)); 

   REVERSE ALPHABETICAL
   fruits.sort((a, b) => b.name.localeCompare(a.name)); 

   NUMERIC ORDER
   fruits.sort((a, b) => a.calories - b.calories); 

   REVERSE NUMERIC ORDER
   fruits.sort((a, b) => b.calories - a.calories); 
   */



/*  FILTERING  
    
      --> LOW CALORIES <--

const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);


const listItems = lowCalFruits.map(lowCalFruit => 
                                    <li key={lowCalFruit.id}>
                                     <b>{lowCalFruit.name}</b>: &nbsp;
                                    {lowCalFruit.calories}</li>);


      --> HIGH CALORIES <--

const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);


const listItems = highCalFruits.map(highCalFruit => 
                                    <li key={highCalFruit.id}>
                                     <b>{highCalFruit.name}</b>: &nbsp;
                                    {highCalFruit.calories}</li>);

    */

    return(<ul>{listItems}</ul>);

}

export default List
