import Counter from "./Counter"


function App() {
  window.localStorage.setItem("yourname","Chinmay")
  console.log(window.localStorage.getItem("age"))
  return (
    <div className="border border-danger border-2 m-2 p-2">
      <h1>useCounter CustomHook:</h1> 
      <Counter ic={5} is={5} name="FrstCounter"></Counter> 
      <Counter ic={10} is={10} name="SecCounter"></Counter>
    </div>
      
  )
}

export default App
