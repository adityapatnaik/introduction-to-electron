import React,{useState, useEffect} from "react";
import "./styles.css";
import {MdAdd,MdArrowForward} from 'react-icons/md'
import TodoItem from './TodoItem'

let arr = [
  "Breakfast at 9",
"Client Meeting",
"Grab a Snack",
"Talk to Cindy",
"Learn Electron",
"Have Fun",
"Start for Office",
"Meeting at 5",
"Remind Cindy for task1",
"Grab a Snack",
"Drive back home",
"Take a bath",
"Talk to your children",
"Plan for the next day",
"Learn from Community",
"Get Kids some Chocolates",
"Learn more about Vegetarianism",
"Plant a tree every week",
"Water trees"

]
export default function App() {
  const [todo,setTodo] = useState(arr)
  const [isEdit,setIsEdit] = useState(false)
  const [textfield,setTextField] = useState("")
  const [trigger,setTrigger] = useState("")

useEffect(()=>{
  setTodo(todo)
},[trigger,todo])
  

  const pushNewTodo = (event) =>{
      if(event.key==="Enter" || event.currentTarget.id==="go"){ 
        setIsEdit(!isEdit)
        if(textfield!==""){
          todo.push(textfield)
          setTodo(todo)
        }
        }
  }

    return (
      <div className="App">
        <div className="addbutton" onClick={()=>{setIsEdit(!isEdit)}}><MdAdd/></div>
        { todo.length!==0 ? <div className="todolist">
          
           
            {
              todo.map((item,index)=>{
              return  <TodoItem key={index} index={index} todo={todo} setTodo={setTodo} setTrigger={setTrigger} item={item}/>
              })
            }
        </div>: <div style={{display:'flex',placeItems:'center',justifyContent:'center',flexDirection:'column',flex:'1'}}>
          <img src="https://blush.ly/mkNyMPIGx/p" style={{width:'50%'}} alt="alldone"/>
              <h3>You are all caught up!</h3>
        </div>} 
          
          
         {
           isEdit && <div className="newtodofield">
             <input autoFocus className="inputfield"  placeholder="New Todo"
              onChange={(event)=>{setTextField(event.currentTarget.value)}}
             onKeyUp = {pushNewTodo}
              />
               <MdArrowForward id="go" className="go" onClick={pushNewTodo}/>
             </div>
         }
      </div>
    );
  
  
}
