import { useState } from 'react'
import 'styles/Footer.css'

function Footer() {
  const [inputValue, setInputValue] = useState('')

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  function handleBlur() {
    if (!inputValue.includes('@')) {
      alert("Cette adresse e-mail n'est pas valide (manque @)")
    }
  }

  return (
    <footer className="cbs-footer">
      <div className="cbs-footer-elem">
        Pour les passionné·e·s de moments suspendus 📚☕
      </div>
      <div className="cbs-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  )
}

export default Footer
