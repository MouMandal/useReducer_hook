
import { useReducer, useState } from 'react'
import Form from './Components/Form'
import './App.css'


/* create the reducer*/
function reducer(state, action) {
  if (action.type == 'increment') {
    return {
      age: state.age + 1
    }
  }
  else if (action.type == "decrement") {
    return {
      age: state.age - 1
    }
  }

}

function App() {

  // use the reducer
  const [state, dispatch] = useReducer(reducer, { age: 20 });//The dispatch function only updates the state variable for the next render.


  const incrementButton = () => {
    dispatch({
      type: 'increment'
    });
  }

  const decrementButton = () => {
    dispatch({
      type: "decrement",
    })
  }


  return (
    <>

      {/* option1:----------- */}

      {/* <button onClick={() => dispatch({
        type: 'increment'
      })}>
        Increment age
      </button>

      <button onClick={() => dispatch({
        type: 'decrement'
      })}>
        decrement age
      </button> */}


      {/* option2-------------- */}

      <button onClick={incrementButton}>increment age</button>
      <button onClick={decrementButton}>decrement age</button>

      <p>Hello your age is {state.age}</p>


      <Form/>
    </>
  )
}

export default App
