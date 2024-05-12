import Card from "./Card/Card"
import Student from "./Student/Student"
import './App.css'
import ButtonInline from "./ButtonInline"
import UserGreeting from './UserGreeting/UserGreeting.jsx'
import List from './List/List.jsx'

function App() {


  const fruits = [{id: 1, name: "apple", calories: 95},
                {id: 2, name: "orange", calories: 45}, 
                 {id: 3, name: "banana", calories: 105}, 
                 {id: 4, name: "coconut", calories: 159}, 
                {id: 5, name: "pineapple", calories: 37}];

  // const fruits = [{id: 1, name: "apple", calories: 95},
  //               {id: 2, name: "orange", calories: 45}, 
  //                {id: 3, name: "banana", calories: 105}, 
  //                {id: 4, name: "coconut", calories: 159}, 
  //               {id: 5, name: "pineapple", calories: 37}];

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Sarah"/>
      <div>
          <Card/>
      </div>

      <ButtonInline/>
      <div>
          <List items={fruits} category="Fruits"/>
      </div>
      <div>
        <Student name="Shayne" age={1.5} isStudent={true}/>
        <Student name="Skylar" age={0} isStudent={false}/>
        <Student name="Jax" age={11} isStudent={false}/>
        <Student name="Kora" age={6} isStudent={true}/>
        {/* <Student age={10}/> */}

      </div>
    </>
  )
}

export default App
