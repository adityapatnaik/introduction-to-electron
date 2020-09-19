import React,{useState} from 'react'
import {MdAdd,MdDehaze,MdArrowForward,MdDone,MdClose,MdEdit} from 'react-icons/md'

const TodoItem = props =>{
  const {item,index,setTrigger,setTodo} = props
  let {todo} = props
  const [isUpdate,setIsUpdate] = useState(false)
  const [updatedText,setUpdatedText] = useState("")
  const [isStrike,setIsStrike] = useState(false)
  
 const updateTodo = (event) =>{
          if(event.key==="Enter" || event.currentTarget.id==="gobutton"){
            setIsUpdate(!isUpdate)
            if(updatedText!==""){
              todo[index] = updatedText
             setTrigger(updatedText)
            }
          setUpdatedText("")
          }
 }
  
    return(
      <div className="todoitem" style={isStrike ? {backgroundColor:'#f87060'} :{}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}> 
               <span className="burger"><MdDehaze /></span>
               {
                  !isUpdate ? <div className="todotext">{item}</div>
                  : 
                  <div style={{display:'flex',alignItems:'center',flex:'1',width:'100%'}}>
                    <input autoFocus className="todofield" placeholder="Enter to goback"
                    onChange={(event)=>{setUpdatedText(event.currentTarget.value)}}
                    onKeyUp={updateTodo}
                    />
                  <MdArrowForward id="gobutton" onClick={updateTodo}/>
                  </div>
               } 
              </div>
                
               <div className="todo-options">
                 <MdDone onClick={()=>{setIsStrike(!isStrike)}}/>
                 <MdEdit onClick={()=>{setIsUpdate(!isUpdate);setUpdatedText("")}}/>
                 <MdClose onClick={()=>{setTodo(todo.filter(a=>a!==item));setIsUpdate(false)}}/>
               </div>
  
             </div>  
    )
  
 
}

export default TodoItem