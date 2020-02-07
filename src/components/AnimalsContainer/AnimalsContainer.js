import React from 'react'
import './AnimalsContainer.scss';
import AnimalCard from '../AnimalCard/AnimalCard'

const AnimalContainer = (props) => {
  return props.animals.map(animal => {
    return (
      <AnimalCard
        key={animal.id}
        animal={animal}
        removeAnimal={props.removeAnimal}
      />
    )
  })
}

export default AnimalContainer;
