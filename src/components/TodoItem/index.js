import React, {Component} from 'react';

 class TodoItem extends Component {
    state = {
        isDone:false,
        isEditing: false
    }
    delete(id){
        this.props.delete(id);
    }
    onEditClick = () =>{
      this.setState({
          isEditing :!this.state.isEditing 
      })
    }  
    onSave = (e, text)=>{
        e.preventDefault()
        this.props.changeText(text, this.refs.textInput.value)
        text = this.refs.textInput.value;
        this.setState({
            isEditing : false
        })
    }
    checkboxChange = (id) =>{
        this.props.checkToggle(id)
    }
    render(){    
         return(
           <li>
             {this.state.isEditing ?
                    <form>
                        <input type="text" defaultValue={this.props.text} ref="textInput" />
                        <button type="submit" onClick={(e)=>this.onSave(e, this.props.text)}>Save</button>
                    </form> : <div><input onChange={() =>this.checkboxChange(this.props.id)} type="checkbox" checked={this.props.finished} /> {this.props.text }</div>}
                    <div>
                        <button onClick={this.onEditClick} >{this.state.isEditing ? "Cancel" : "Edit"}</button> 
                        {this.state.isEditing ? " " :  <button onClick={() => this.delete(this.props.id)} >X</button>}
                     </div>  
           </li>
                        
         );
     }
 }

export default TodoItem;