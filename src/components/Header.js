import Menu from './Menu';
import Logo from './icons/Logo';

function Header({ isMobileMode }) {

    return (
        <header className='header'>
            <h1>
                <Logo isMobileMode={isMobileMode}/>
            </h1>
            <Menu isMobileMode={isMobileMode} />
        </header>
    );
}

export default Header;