import React, {Component} from 'React'

//完成事项
class DoneList extends Component {
  constructor() {
    super();
  }
	render() {
        var nList = [];
        var nList = this.props.list.map(function(item,index){
            return <li key={index} className="list-group-item">
                        <p>
                        <span className="label label-default" style={{marginRight:"10px"}}>{index+1}</span>
                        {item}
                        <button type="button" className="btn btn-danger pull-right" onClick={this.props.removeHandler.bind(this,index,"Done")}>remove</button>
                        <button type="button" className="btn btn-info pull-right" onClick={this.props.moveHandler.bind(this,index)}>not done</button>
                        </p> 
                      </li>;
          },this)

          return (
            <div className="panel panel-danger">
              <div className="panel-heading">Done list</div>
              {(!this.props.list.length)
                ?<p style={{textAlign:"center"}}>This list is empty now.</p>
                : null
              }
              <ol className="list-group clearfix">
                {nList}
              </ol>
            </div>
          );
        }
}

export default DoneList