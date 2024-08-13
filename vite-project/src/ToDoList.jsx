import React, {useState} from "react";
function ToDoList(){
    const [task, setTask] = useState(["Eat Breakfast", "take a shower", "connect nature"]);
    const[newtask, setNewTask] =useState("");

    function handleInputChange(event){
        setTask(event.target.value);
    }
    function addTask(){
        if(newtask.trim()){
        setTask(t=>[...t, newtask]);
        setTask("");} 
    }
    function deleteTask(index){
        const updateTasks = task.filter((_,i)=>i!==index);
        setTask(updateTasks);
    } 
    function moveTaskUp(index ){
        if(index>0){
            const updatedTasks = [...task];
            [updatedTasks[index],updatedTasks[index-1]] =  
            [updatedTasks[index-1],updatedTasks[index]]; 
            setTask(updateTasks);    
        }
    }
    function moveTaskDown(){
        if(index<task.length-1){
            const updatedTasks = [...task];
            [updatedTasks[index],updatedTasks[index+1]] =  
            [updatedTasks[index+1],updatedTasks[index]]; 
            setTask(updateTasks);    
        }
    }
    return(<div className="to-do-list">
        <h1>To Do List</h1>
        <input type="text" value={setTask} placeholder="Enter task name" onChange={handleInputChange} />
        <button className="add-button "onClick={ () =>addTask(index)}>Add</button>
        <ol>
            {task.map((task, index) => <li key={index}><span className="text">{task}</span> 
         <button className="delete-button" onClick={ () =>deleteTask(index)}>Delete Up</button>
        <button className="move-button" onClick={ () =>moveTaskUp(index)}>Move Up</button>
        <button className="move-button" onClick={ () =>moveTaskDown(index)}>Move Down</button>
        </li>)}
        </ol>
        
      
    </div>);
}
export default ToDoList;
