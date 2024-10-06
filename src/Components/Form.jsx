import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                name: state.name,
                age: state.age + 1,
            }


        case 'changed_name':
            return {
                name: action.nextName,
                age: state.age,
            };


        default:
            break;
    }
}



/*decleared the initial age*/
let initialState = { name: "rimi", age: 20 };



function Form() {



    function button() {
        dispatch({
            type: 'increment',
        })
    }
    function input(e) {
        dispatch({
            type: "changed_name",
            nextName: e.target.value,
        })
        
    }


    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>

            <input value={state.name} onChange={input} />
            <button onClick={button}>Increment age</button>

            <p>Hello, {state.name}. You are {state.age}.</p>
        </>
    )
}
export default Form;