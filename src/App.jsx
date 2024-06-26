import Card from "./Card/Card"
import Student from "./Student/Student"
import './App.css'
import ButtonInline from "./ButtonInline"
import UserGreeting from './UserGreeting/UserGreeting.jsx'
import List from './List/List.jsx'
import MyComponent from './List/MyComponent.jsx'
import ToDoList from './ToDoList/ToDoList'

function App() {


  const fruits = [{id: 1, name: "apple", calories: 95},
                {id: 2, name: "orange", calories: 45}, 
                 {id: 3, name: "banana", calories: 105}, 
                 {id: 4, name: "coconut", calories: 159}, 
                {id: 5, name: "pineapple", calories: 37}];

  const vegetables = [{id: 6, name: "potatoes", calories: 110},
                {id: 7, name: "celery", calories: 15}, 
                 {id: 8, name: "carrots", calories: 25}, 
                 {id: 9, name: "corn", calories: 63}, 
                {id: 10, name: "broccoli", calories: 50}];

  return (
    <>
      <ToDoList/>
      <UserGreeting isLoggedIn={true} username="Sarah"/>
      <div>
          <Card/>
      </div>

      <ButtonInline/>
      
      <div>
        <Student name="Shayne" age={1.5} isStudent={true}/>
        <Student name="Skylar" age={0} isStudent={false}/>
        <Student name="Jax" age={11} isStudent={false}/>
        <Student name="Kora" age={6} isStudent={true}/>
        {/* <Student age={10}/> */}

      </div>
      <div>
          <List items={fruits} category="Fruits"/>
          <List items={vegetables} category="Vegetables"/>

      </div>

      <MyComponent/>
    </>
  )
}

export default App
