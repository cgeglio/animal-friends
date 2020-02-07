import React, { Component } from 'react';
import './App.scss';
import Form from '../Form/Form.js'
import AnimalContainer from '../AnimalsContainer/AnimalsContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {animals: []}
  }

  componentDidMount = () => {
    return fetch('http://localhost:3001/api/v1/animals')
      .then(response => response.json())
      .then(animals => this.setState({animals: animals}))
  }

  addAnimal = animal => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        id: animal.id,
        name: animal.name,
        diet: animal.diet,
        fun_fact: animal.fun_fact
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

  return fetch('http://localhost:3001/api/v1/animals', options)
    .then(response => response.json())
    .then(animal => this.setState({animals: [...this.state.animals, animal]}))
    .catch(error => console.log('post error'));
  }

  removeAnimal = animalId => {
    let url = 'http://localhost:3001/api/v1/animals/' + animalId.toString();
    return fetch(url, {method: 'DELETE'})
      .then(response => response.json())
      .then(animal => this.setState({animals: this.state.animals.filter(animal => animal.id !== animalId)}))
      .catch(error => console.log('post error'));
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Animal Friends</h1>
        </header>
        <Form
          addAnimal={this.addAnimal}
        />
        <AnimalContainer
          animals={this.state.animals}
          removeAnimal={this.removeAnimal}
        />
      </div>
    );
  }
}

export default App;
