import React, {useState} from "react";
function ArrayofobjectsUpdate(){
    const [Cars, setCars] = useState([]);
    const[CarYear, setCarYear] =  useState (new Date().getFullYear());
    const [CarModel, setCarModel] = useState("");
    const [CarMake, setCarMake] =  useState("");
    function handleAddCars(){
        const newCar = {year: CarYear, 
                        model: CarModel, 
                        make: CarMake};
        setCars(C =>[...C, newCar]) 
        setCarYear (new Date().getFullYear());
        setCarModel("");
        setCarMake("");           
    }
    function handleRemoveCars(index){
        setCars(C => C.filter((_, i) =>i !==index))
    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    return(<div>
        <h1>List Of Object Cars</h1>
        <ul>
            {Cars.map((Car,index) => <li key={index} onClick={() =>handleRemoveCars}>
                {Car.year} {Car.model} {Car.make}
            </li>)}
        </ul>
        <input type="number" value={CarYear} onChange={handleYearChange} /><br/>
        <input type="text" value={CarModel} onChange={handleModelChange}placeholder="Enter car model"/><br/>
        <input type="text" value={CarMake} onChange={handleMakeChange}placeholder="Enter car make"/><br/>
        <button onClick ={handleAddCars}>Add Car</button>
    </div>);
}
export default ArrayofobjectsUpdate;
