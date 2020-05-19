import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Todo extends Component {

  state = {
    element: "",
    items: [],
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      element: "",
      items: [...this.state.items, {element: this.state.element}]
    });
  }

  deleteItem = (index) => {
    const array = this.state.items;
    array.splice(index, 1);
    this.setState({
      items: array
    });
  }

  renderTodo = () => {
    return this.state.items.map((item, index) => {
      return(
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h4>{item.element} <FontAwesomeIcon icon={["far", "times-circle"]} style={{cursor:"pointer", float:"right", color:"red"}} onClick={() => this.deleteItem(index)} /></h4>
          </div>
        </div>
      )
    });
  }

  render() {
    return(
      <React.Fragment>
        <div className="card my-3">
          <div className="card-header">To-do list</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="element">Chose à faire</label>
                  <input type="text" className="form-control form-control-lg" name="element" onChange={this.onChange} value={this.state.element}/>
                  <button className="btn btn-primary btn-block">Ajouter</button>
                </div>
              </form>
          </div>
        </div>
        {this.renderTodo()}
      </React.Fragment>
    )
  }
}
