import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputFeild from './components/inputFeild';
import { Todo } from './model';
import TodoList from './components/TodoList';


const App:React.FC = ()=> {  /// this is the functional component of react and that is the type of App
    const [todo ,setTodo] = useState<string>("");
     const [todos , setTodos] = useState<Todo[]>([])
  
     const handleAdd = (e:React.FormEvent)=>{
           e.preventDefault() ; 

           if(todo){
            setTodos([...todos,{id:Date.now() ,  todo , isDone:false}]);
            setTodo("");
          }
     }
      console.log(todos);
  return (
    <div className="App">
      <span className = "heading">TODO LIST</span>
     <InputFeild  todo = {todo} setTodo = {setTodo} handleAdd = {(e)=>handleAdd(e)}/>
      <TodoList todos = {todos} setTodos={setTodos} />
    
    </div>
  );
}

export default App;
