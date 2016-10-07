import React, {Component} from 'React'

//输入框组件
class Input extends Component{
  constructor() {
    super();
  }
	render() {
          var btnText = this.props.text?"Please enter your plan":"Click to add";
          return (
            <div>

              <label htmlFor="input-text">To do something</label>
              <div className="input-group">
              <input type="text" id="input-text" className="form-control" placeholder="PLease enter your plan" onChange={this.props.inputHandler} onKeyDown={this.props.clickHandler.bind(this)}/>
               <span className="input-group-addon"><span className="glyphicon glyphicon-tag"></span></span>
              </div>
              <button type="button" className="btn btn-primary btn-block" onClick={this.props.clickHandler.bind(this)} disabled={this.props.text}>{btnText}</button>
            </div>
          );
        }
}
export default Input