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
        <Student name="Shayne" age="18" isStudent={true}/>
      </div>
    </>
  )
}

export default App
