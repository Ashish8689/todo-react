import React,{Component} from 'react';
import '../../App.css'

  class AddTodo extends Component{

    state = {
        title: ' '
    }

    onSubmit =(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ' '});
    }

    onChange = (e)=>{
            this.setState({title: e.target.value});
        }
   
    render(){
    return(
        <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Enter data"
             name="title" value={this.state.title} 
             onChange={this.onChange} />

             <input type="submit" value="+"/>
        </form>
    )
} 
}
export default AddTodo;