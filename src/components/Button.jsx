function Button ({buttonType, buttonName, className, children}){
    return(
    <button type={buttonType} onClick={children} className={className}>{buttonName}</button>
)
}

export default Button;