// import cafe from '../assets/cafe.jpg'
import cappuccinoVegan from '../assets/cappuccinovegan.jpg'
import mocaccinoCoco from '../assets/moccacinococo.jpg'
import cafeGlaceVanille from '../assets/cafeglacevanille.jpeg'
import expresso from '../assets/expresso.jpg'
import cafeGlace from '../assets/cafeGlace.png'
import latteCaramel from '../assets/lattecaramel.jpeg'
import cafeFiltre from '../assets/cafefiltre.jpg'
import americano from '../assets/americano.jpg'

export const coffeeList = [
	{
		name: 'Roman SF<br />& Cappuccino vegan',
		category: 'A retrouver toute l’année',
        isBestSale: true,
		intensite: '2',
		cafeine: true,
		id: '1ed',
		cover: cappuccinoVegan,
		price: 22,
		editionLimitee: false,
		description: "Découvrez un grand classique de la SF, pour une pause futuriste et gourmande."
	},
	{
		name: 'Essai féministe<br />& Mocaccino au lait de coco',
		category: 'A retrouver toute l’année',
        isBestSale: false,
		intensite: '2',
		cafeine: true,
		id: '2ab',
		cover: mocaccinoCoco,
		price: 23,
		editionLimitee: false,
		description: "Découvrez une réflexion puissante sur le monde, accompagné d’un mocaccino doux au lait de coco, parfait pour éveiller vos sens et vos idées."
	},
	{
		name: 'Romance<br />& Café glacé à la vanille ',
		category: 'Edition limitée',
        isBestSale: true,
		intensite: '2',
		cafeine: false,
		id: '3sd',
		cover: cafeGlaceVanille,
		price: 21,
		editionLimitee: true,
		description: "Un livre pour vibrer, un café glacé à la vanille pour se rafraîchir : pas de clichés, juste une pause tout en douceur."
	},
	{
		name: 'Poésie contemporaine<br />& Espresso corsé',
		category: 'A retrouver toute l’année',
        isBestSale: false,
		intensite: '3',
		cafeine: true,
		id: '4kk',
		cover: expresso,
		price: 20,
		editionLimitee: false,
		description: "Pour une pause pleine de caractère, soyez stupéfait par de la poésie contemporaine accompagnée d’un espresso corsé."
	},
	{
		name: 'Roman feel-good<br />& Café filtre doux',
		category: 'A retrouver toute l’année',
        isBestSale: true,
		intensite: '1',
		cafeine: true,
		id: '5pl',
		cover: cafeFiltre,
		price: 21,
		editionLimitee: false,
		description: "Besoin de prendre du recul sur le rythme éreintant de la vie ? Profitez d'un roman feel-good et d'un café filtre tout doux."
	},
	{
		name: 'Nouvelle philosophique<br />& Café glacé latte avoine',
		category: 'Edition limitée',
        isBestSale: false,
		intensite: '3',
		cafeine: false,
		id: '6uo',
		cover: cafeGlace,
		price: 22.50,
		editionLimitee: true,
		description: "Réfléchissez à la vie avec une nouvelle philosophique et un latte glacé à l’avoine, alliance parfaite de fraîcheur et de profondeur."
	},
	{
		name: 'Roman historique<br />& Latte caramel',
		category: 'Edition limitée',
        isBestSale: false,
		intensite: '1',
		cafeine: false,
		id: '7ie',
		cover: latteCaramel,
		price: 23,
		editionLimitee: true,
		description: "Oubliez le temps en plongeant dans une autre époque, latte caramel à la main."
	},
	{
		name: 'Polar<br />& Americano intense',
		category: 'A retrouver toute l’année',
        isBestSale: true,
		intensite: '3',
		cafeine: true,
		id: '9vn',
		cover: americano,
		price: 20,
		editionLimitee: false,
		description: "Intrigue à suspense, café noir : le pack idéal pour rester accroché à sa lecture."
	}
]