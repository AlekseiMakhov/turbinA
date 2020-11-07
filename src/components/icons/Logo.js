function Logo({ isMobileMode }) {
    const size = (isMobileMode ? "32" : "50");
    return(
        <a href='https://marshakbooks.ru/' className='header__logo' target='blank'>
            <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.98864V26.1364V50H50L48.2249 0H42.3077L40.8284 17.0455H29.2899L28.4024 1.98864L20.1183 1.42045L21.3018 17.0455H8.87574L6.80473 1.42045L0 1.98864Z" fill="white"/>
            </svg>
        </a>
    )
} 

export default Logo;