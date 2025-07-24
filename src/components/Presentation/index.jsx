import 'styles/Presentation.css'
import 'styles/App.css'
import { Link } from 'react-router-dom'

function Presentation() {
  return (
    <section className="section-presentation">
      <h2>Plongez dans l’art du cocooning littéraire</h2>
      <p>
        Choisissez le <em>moment parfait</em>, associez un{' '}
        <em>livre soigneusement sélectionné</em> à une{' '}
        <em>tasse de café sur-mesure</em>, et laissez-vous emporter par une
        expérience sensorielle unique.
      </p>
      <p>
        Recevez directement chez vous une invitation à savourer l’alliance
        subtile entre la lecture et le café, pour{' '}
        <em>transformer chaque pause en un instant d’évasion.</em>
      </p>
      <nav>
        <Link className="butonNav" to="/Concept">
          En savoir plus...
        </Link>
      </nav>
    </section>
  )
}

export default Presentation
