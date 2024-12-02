
function Input({inputId, inputName, inputType, register, inputLabel, className, children}) {

    return (
    <label className={className} htmlFor={inputId}>{inputLabel}
        <input id={inputId} {...register(inputName)} type={inputType}/>
        {children}
    </label>
    )
}

export default Input;