function PlayButton({ onClick, width, height, color }) {
    // const size = (isMobileMode ? "14" : "18");
    return(
        <button className='button button_type_play' onClick={onClick}>
            <svg width={width} height={height} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3505 7.76283C14.2165 8.34867 14.2165 9.65133 13.3505 10.2372L2.24182 17.7525C1.28068 18.4027 -7.73515e-07 17.696 -7.21907e-07 16.5153L-6.48979e-08 1.48469C-1.32898e-08 0.304034 1.28068 -0.402717 2.24182 0.247521L13.3505 7.76283Z" fill={color}/>
            </svg>
        </button>
    )
} 

export default PlayButton;