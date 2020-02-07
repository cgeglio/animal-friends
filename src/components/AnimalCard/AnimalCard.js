import React from 'react'
import './AnimalCard.scss'

const AnimalCard = ({animal, removeAnimal}) => {
  return (
    <article>
      <h2>{animal.name}</h2>
      <h3>Diet: {animal.diet}</h3>
      <h3>Fun Fact: {animal.fun_fact}</h3>
      <button onClick={() => {removeAnimal(animal.id)}}>🗑</button>
    </article>
  )
}

export default AnimalCard
