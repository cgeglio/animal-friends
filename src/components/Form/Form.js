import React, { Component } from 'react'
import './Form.scss'

class Form extends Component {
  constructor() {
    super();
    this.state= {id:'' , name:'' , diet:'' , fun_fact:'', error: false}
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  checkInputs = (event) => {
    event.preventDefault();
    let values = Object.values(this.state);
    values.includes('') ? this.setState({error: true}) : this.addAnimal(event);
  }

  addAnimal = (event) => {
    event.preventDefault();
    this.props.addAnimal({id: this.state.id , name: this.state.name , diet: this.state.diet , fun_fact: this.state.fun_fact})
    this.setState({id:'' , name:'' , diet:'' , fun_fact:'', error: false})
  }

  render() {
    return (
      <form>
      <h2>🦁 Add a new animal friend! 🐻</h2>
        <input
          type="text"
          placeholder="Id number..."
          name="id"
          value={this.state.id}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Name..."
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Diet..."
          name="diet"
          value={this.state.diet}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Fun fact..."
          name="fun_fact"
          value={this.state.fun_fact}
          onChange={this.handleChange}
        />
        <button onClick={this.checkInputs}>Add Friend</button>
        { this.state.error ? <p>Please complete all fields!</p> : null }
      </form>
    )
  }
}

export default Form
