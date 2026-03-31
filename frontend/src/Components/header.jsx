import pokemonLogo from '../../public/pokemon-logo.png';

export default function Header() {
    return (
        <header>
            <img src={pokemonLogo} alt="Pokemon Logo" className="header-logo" />
            <p> Build Your Dream Team! </p>
        </header>
    );
}
