
import React, {useState} from 'react';
function UpdateObjectstate (){
    const[Car, setCar] = useState({year: 2024, 
                                  make: "volks", 
                                  model: "golve"});
    function handleYearChange(event){
        setCar(C=>({...C, year: event.target.value}))
    }
    function handeMakeChange(event){
        setCar(C=>({...C, make: event.target.value}))
    }
    function handeModelChange(event){
        setCar(C=>({...C, model: event.target.value}))
    }

    return(<div>
        <h1>My favorite car is {Car.year} {Car.make} {Car.model}</h1>
        <input type="number" value={Car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={Car.make} onChange={handeMakeChange}/><br/>
        <input type="text" value={Car.model} onChange={handeModelChange}/> 
    </div>)
}
export default UpdateObjectstate ;
