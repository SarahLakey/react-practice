import Card from "./Card/Card"
import Student from "./Student/Student"
import './App.css'
import ButtonInline from "./ButtonInline"

function App() {

  return (
    <>

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
    </>
  )
}

export default App
