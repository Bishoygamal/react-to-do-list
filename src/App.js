import React,{Component} from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { render } from '@testing-library/react';
class App extends Component {
  state ={
    items:[{id:'1',title:'wake up'},
           {id:'2',title:'breakfast'}],
    id:uuid(),
    item:'',
    editItem:false
  }
  handleChange = (e)=>{
    console.log('handle Changed');
  }
  handleSubmit = (e)=>{
    console.log('handle Submitted');
  }
  handleClearList =()=>{
    console.log('Clearing List');
  }
  handleEdit =(id)=>{
    console.log(`handle Edit ${id}`);
  }
  handleDelete =(id)=>{
    console.log(`handle Delete ${id}`);
  }
  render(){
    console.log(this.state);  
    return ( 
    
      <div className="container"> 
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4 ">
            <h3 className="text-capitalize text-center">To Do Input</h3>
          <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            editItem={this.state.editItem}/>
          <TodoList 
            items={this.state.items} 
            clearList={this.clearList}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
