import React, {Component} from 'react'
import Input from './input.js'
import DoingList from './doingList.js'
import DoneList from './doneList.js'
import styles from '../css/main.css'

//主组件
class TodoList extends Component{
    constructor(){
      super();
      this.state={
        text:"",
        doingList:[],
        doneList:[] 
      }
    }
    inputHandler(event){
        var val = event.target.value;
        this.setState({text:val});
    }
    addList(event){
		if((event.type == "click")||(event.keyCode == 13)){
      if(this.state.text){
        var curList = this.state.doingList;
        curList.push(this.state.text);
        this.setState({doingList:curList});
      }
		}
    }
    removeList(index,type){
      console.log("remove "+index+" from "+type );
      var curList=[];
      switch (type) {
        case "Doing":
           curList = this.state.doingList;
           curList.splice(index,1);
           this.setState({doingList:curList});
          break;
        case "Done":
           curList = this.state.doneList;
           curList.splice(index,1);
           this.setState({doneList:curList});
          break;
        default:
          // statements_def
          break;
      }
    }
    toDoing(index){
      console.log("done->doing");
      var item = this.state.doneList[index];
      var doneList = this.state.doneList;
      doneList.splice(index,1);
      var doingList = this.state.doingList;
      doingList.push(item);
      this.setState({doingList:doingList,doneList:doneList});
    }
    toDone(index){
      console.log("doing->done");
      var item = this.state.doingList[index];
      var doingList = this.state.doingList;
      doingList.splice(index,1);
      var doneList = this.state.doneList;
      doneList.push(item);
      this.setState({doingList:doingList,doneList:doneList});
    }
    render() {
      return (
        <div className="wrap">
          <div className="page-header"><h1 className={styles.blue}>TodoList based on React  <small>By PSC</small></h1></div>
          <Input inputHandler={this.inputHandler.bind(this)} clickHandler={this.addList.bind(this)} text={this.state.text==""}/>
          <DoingList list={this.state.doingList} removeHandler={this.removeList.bind(this)} moveHandler={this.toDone.bind(this)}/>
          <DoneList list={this.state.doneList} removeHandler={this.removeList.bind(this)} moveHandler={this.toDoing.bind(this)}/>
        </div>
      );
    }
}

export default TodoList