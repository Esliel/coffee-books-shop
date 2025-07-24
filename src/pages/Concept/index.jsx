import 'styles/index.css'
import 'styles/App.css'
import 'styles/Presentation.css'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Link } from 'react-router-dom'

function Concept() {
  return (
    <body>
      <Header />
      <main className="section-presentation">
        <h2>Avec Coffee Books Shop, l’expérience de lecture réinventée</h2>

        <p>
          <em>
            {' '}
            Nous vous proposons une expérience unique : choisissez une
            association qui vous plaît, et on s’occupe du reste !{' '}
          </em>
        </p>

        <p>
          Pour chaque association commandée, vous recevrez directement chez vous
          un pack contenant :
        </p>

        <ul>
          <li>
            un <em>livre surprise</em>
          </li>
          <small>Sélectionné avec soin</small>
          <li>
            une <em>recette de boisson chaude</em>
          </li>
          <small>Toujours vegan</small>
          <li>
            les <em>ingrédients nécessaires</em> à la préparation de la boisson
          </li>
          <small>Bio et issus du commerce équitable</small>
        </ul>

        <p>
          Le même livre est envoyé tout au long du mois, puis changé chaque
          mois. Vous pouvez aussi vous abonner pour recevoir automatiquement le
          nouveau pack chaque mois, sans avoir à vous soucier de rien.
        </p>

        <nav>
          <Link className="butonNav" to="/coffee-books-shop">
            Retour à l'accueil...
          </Link>
        </nav>
      </main>
      <Footer />
    </body>
  )
}

export default Concept
