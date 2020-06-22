import React,{Component} from 'react';
import Header from './Component/Header/header';
import AddTodo from './Component/form/AddTodo';
import './App.css';

class App extends Component{

  state ={
   todos : []
  }

  // *********** Adding Todo  **********

  addTodo = (title) =>{
    let datas = this.state.todos;
    const data ={ title:title,status:false};

    datas.push(data);
    this.setState({todos:datas});
  }

  // ********** Deleting Todos  ***********

  delete = (i) =>{
    const datas = this.state.todos;
    datas.splice(i,1);
    this.setState({todos:datas});
  }

  update=(i)=>{

    this.setState({todos :this.state.todos.map((todo,index)=>{
       if(index === i){
         todo.status = !todo.status;
       }
       return todo;
    })});
  }


  setStyle = (i) =>{
    return{
        opacity: this.state.todos[i].status ? '.5' : '1',
        textDecoration : this.state.todos[i].status ? 'line-through' : 'none'
    }

  }

  render(){
    let datas = this.state.todos;

    return(
      <div>
        <Header />             
        <div className="content">
          <div className="form">
             <AddTodo  addTodo={this.addTodo} />
             </div>
             <div className="box">
                  {datas.map((data,i)=>(
                    <li key={i}>
                  
                      <p style={this.setStyle(i)}>
                          {data.title}
                      </p>  
                      <div className="event">
                          <input type="checkbox" id={i} onClick={()=>this.update(i)} />
                          <i class="fa fa-trash-o" onClick={()=>this.delete(i)}></i>
                          {/* <button > X </button> */}
                      </div>
                    </li>
                  ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;