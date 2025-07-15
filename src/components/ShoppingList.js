import { useState } from 'react'
import { coffeeList } from '../data/coffeeList.js'
import CoffeeItem from './CoffeeItem.js'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
    const [activeCategory, setActiveCategory] = useState('');
    const categories = coffeeList.reduce(
        (acc, coffee) =>
            acc.includes(coffee.category) ? acc : acc.concat(coffee.category),
        []
    )
    function addToCart(name, price) {
		const currentCoffeeSaved = cart.find((coffee) => coffee.name === name)
		if (currentCoffeeSaved) {
			const cartFilteredCurrentCoffee = cart.filter(
				(coffee) => coffee.name !== name
			)
			updateCart([
				...cartFilteredCurrentCoffee,
				{ name, price, amount: currentCoffeeSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
    
    return (
        <section className="cbs-shopping-list">
            <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

            <ul className='cbs-coffee-list'>
                {coffeeList.map(({ id, cover, name, cafeine, intensite, price, editionLimitee, category, description }) =>
                    !activeCategory || activeCategory === category ? (
                        <li key={id}> 
                            <CoffeeItem
                                cover={cover}
                                name={name}
                                cafeine={cafeine}
                                intensite={intensite}
                                editionLimitee={editionLimitee}
                                price={price}
                                description={description}
                            />
                            <button className='addCartCTA' onClick={() => addToCart(name, price)}>Ajouter</button>
                        </li>
                    ) : null
                )}
            </ul>
        </section>
    )
}

export default ShoppingList