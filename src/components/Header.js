import Menu from './Menu';
import Logo from './icons/Logo';

function Header() {

    return (
        <header className='header'>
            <h1>
                <Logo />
            </h1>
            <Menu />
        </header>
    );
}

export default Header;