import React, { useState } from 'react'

const Count = () => {
    // useState for counter value is a "0":-
    const [counter, setCounter] = useState(0);
  
  // set function of Increment:-
    const count1 = () =>{
      setCounter(counter + 1);
    }
  
  // set function of Reset Count:-
    const count2 = () =>{
      setCounter(0);
    }
  
  // set function of Decrement:-
    const count3 = () =>{
      setCounter(counter - 1);
    }
  
    return (
    <div className='couter-container'>
    <h1 className='counter-title'>Counter App</h1>
    <div className='heading-main'>
      <h2 className='counter-heading'> Count :  {counter}</h2>
    </div>
    <div className='button-group'>
      <button onClick={count1} className='button-increment cus-btn'>
        Increment

      </button>
      <button onClick={count2} className='button-reset cus-btn'>
        Reset Count
      </button>
      <button onClick={count3} className='button-decrement cus-btn '>
        Decrement
      </button>
    </div>
  </div>
)
}

export default Count