
function Counter({counterTitle, fruitAmount, fruit, counterMin, counterPlus}){

    return (
        <article className="fruit-container">
            <h2>{counterTitle}</h2>
            <button type="button" onClick={() => counterMin(fruit) }>-
            </button>
            <p>{fruitAmount}</p>
            <button type="button" onClick={() => counterPlus(fruit)}>+</button>
        </article>
    )
}

export default Counter;