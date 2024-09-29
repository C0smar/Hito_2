import React from 'react'
import Header from '../header/Header'
import CardPizza from '../cardPizza/CardPizza'

const Home = () => {

  return (
    <div >
      <div>
        <Header/> 
      </div>

        <div className='grilla'>
          <CardPizza
            img='pizzaEspañola.jpg'
            title='Pizza Napolitana'
            ingredientes= {['Mozzarella,', 'Tomates,', 'Jamón,', 'Oregano']}
            precio={5950}/>

          <CardPizza
            img='pizzaNapolitana.webp'
            title='Pizza Española'
            ingredientes= {['Mozzarella,', 'Gorgonzola,', 'Provolone']}
            precio={6950}/>

          <CardPizza
            img='pizzaPeperoni.webp'
            title='Pizza Pepperoni'
            ingredientes= {['Mozzarella,', 'Pepperoni,', 'orégano']}
            precio={6950}/>

        </div>
    </div>
  )
}

export default Home;