import '../styles/Header.css'
import logo from '../assets/logo-cbs.svg'

function Header() {
    const title = 'Coffee & Books Shop'

    const currentMonth = new Date().getMonth() + 1; // getMonth() retourne 0-11, donc +1 pour 1-12
    let season;
    if (currentMonth <= 2 || currentMonth === 12) {
    season = 'winter';
    } else if (currentMonth >= 3 && currentMonth <= 5) {
    season = 'spring';
    } else if (currentMonth >= 6 && currentMonth <= 8) {
    season = 'summer';
    } else {
    season = 'autumn';
    }

    let sloganPeriode;
    switch (season) {
    case 'winter':
        sloganPeriode = "Un bon café et une romance de noël pour se réchauffer en hiver !";
        break;
    case 'spring':
        sloganPeriode = "Le printemps, c'est la saison idéale pour un café et un roman feel-good en terrasse !";
        break;
    case 'summer':
        sloganPeriode = "L'été : romance et café glacé !";
        break;
    case 'autumn':
        sloganPeriode = "Vous, un plaid, un café et votre PAL";
        break;
    default:
        sloganPeriode = "Profitez d'un bon café toute l'année !";
    }

console.log(sloganPeriode);


    return  <header className='cbs-banner'>
                <div className='logo_title'>
                    <img src={logo} alt='Coffee & Bookshop' className='cbs-logo'/>
                    <h1 className="cbs-title">{title}</h1>
                    <div></div>
                </div>
                <p className='slogan-periode'>{sloganPeriode}</p>
            </header>
            
}

export default Header