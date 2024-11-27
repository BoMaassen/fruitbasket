import './App.css'
import {useState} from "react";

function App() {
    const [fruitAmount, setFruitAmount] = useState(0);
    console.log(fruitAmount)
    return (<>        <h1>Fruitmand bezorgservice</h1>
        <section>
            <article className="fruit-container"><h2>Aardbeiden</h2>
                <button type="button" onClick={() => setFruitAmount(fruitAmount - 1)}>-</button>
                <p>{fruitAmount}</p>
                <button type="button" onClick={() => setFruitAmount(fruitAmount + 1)}>+</button>
            </article>
            <article><h2>Bananen</h2>
                <button type="button">-</button>
                <button type="button">+</button>
            </article>
            <article><h2>Appels</h2>
                <button type="button">-</button>
                <button type="button">+</button>
            </article>
            <article><h2>Kiwi</h2>
                <button type="button">-</button>
                <button type="button">+</button>
            </article>
        </section>
    </>)
}

export default App