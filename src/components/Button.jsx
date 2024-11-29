function Button ({buttonType, buttonName, children}){
    return(
    <button type={buttonType} onClick={children}>{buttonName}</button>
)
}

export default Button;