
function Counter({counterTitle, fruitAmount, fruit, counterMin, counterPlus}){

    return (
        <article className={!fruitAmount ? "fruit-container" : "fruit-container-active"}>
            <h2>{counterTitle}</h2>
            <button className="fruit-button" type="button" onClick={() => counterMin(fruit) }>-
            </button>
            <p>{fruitAmount}</p>
            <button className="fruit-button" type="button" onClick={() => counterPlus(fruit)}>+</button>
        </article>
    )
}

export default Counter;