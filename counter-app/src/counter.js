import React ,{useState} from 'react';

function Counter (){
    const[count , setCount] =useState(0);

    return (
        <div className="container">
            <h1>Counter: {count} </h1>
            <button onClick = {()=> setCount(count + 1)}>tang</button>
            <button onClick = {()=> setCount(count - 1 )}>giam</button>
            <button onClick = {()=> setCount(0)}>reset</button>
        </div>

    );

}
export default Counter;