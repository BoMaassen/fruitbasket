
function Input({inputId, inputName, inputType, register, inputLabel, children}) {

    return (
    <label htmlFor={inputId}>{inputLabel}
        <input id={inputId} {...register(inputName)} type={inputType}/>
        {children}
    </label>
    )
}

export default Input;