import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(){
        super();
        this.state={
            tasks: [{task:'task 1 ',id:1},{task:' task 2 ',id:2},{task:' task 3 ', id:3}],
        currTask:''
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            currTask:e.target.value
        })
    }
    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask, id:this.state.tasks.length+1}],
            currTask:''
        })
    }
    handleDone=(id)=>{
        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id!=id 
        })
        this.setState({
            tasks:[...narr]
        })


    }
  render() {
    // console.log('render'
    return (
      <div>
        <input type='text' value={this.state.currTask} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
        {
            this.state.tasks.map((taskObj)=>(
                <li key={taskObj.id}>
                    <p>{taskObj.task}</p>
                    <button onClick={()=>this.handleDone(taskObj.id)}>Done</button>
                    </li>
            ))
        }
        </ul>
      </div>
    )
  }
}
