import './App.css'
import {useState} from "react";

function App() {
    let [fruitAardbeiAmount, setAardbeiFruitAmount] = useState(0);
    let [fruitBanaanAmount, setBanaanFruitAmount] = useState(0);
    let [fruitAppelAmount, setAppelFruitAmount] = useState(0);
    let [fruitKiwiAmount, setKiwiFruitAmount] = useState(0);

    function resetFruitCounter(){
        return setAardbeiFruitAmount(fruitAardbeiAmount = 0) + setBanaanFruitAmount(fruitBanaanAmount = 0)
        + setAppelFruitAmount(fruitAppelAmount = 0) + setKiwiFruitAmount(fruitKiwiAmount = 0)
    }

    return (<>
        <h1>Fruitmand bezorgservice</h1>
        <section>
            <article className="fruit-container">
                <h2>🍓 Aardbeiden</h2>
                <button type="button" onClick={() => setAardbeiFruitAmount((prevCounter) => Math.max(prevCounter - 1, 0))}>-</button>
                <p>{fruitAardbeiAmount}</p>
                <button type="button" onClick={() => setAardbeiFruitAmount(fruitAardbeiAmount + 1)}>+</button>
            </article>
            <article className="fruit-container">
                <h2> 🍌 Bananen</h2>
                <button type="button"
                        onClick={() => setBanaanFruitAmount((prevCounter) => Math.max(prevCounter - 1, 0))}>-
                </button>
                <p>{fruitBanaanAmount}</p>
                <button type="button" onClick={() => setBanaanFruitAmount(fruitBanaanAmount + 1)}>+</button>
            </article>
            <article className="fruit-container">
                <h2>🍏 Appels</h2>
                <button type="button"
                        onClick={() => setAppelFruitAmount((prevCounter) => Math.max(prevCounter - 1, 0))}>-
                </button>
                <p>{fruitAppelAmount}</p>
                <button type="button" onClick={() => setAppelFruitAmount(fruitAppelAmount + 1)}>+</button>
            </article>
            <article className="fruit-container">
                <h2>🥝 Kiwi&#39;s</h2>
                <button type="button"
                        onClick={() => setKiwiFruitAmount((prevCounter) => Math.max(prevCounter - 1, 0))}>-
                </button>
                <p>{fruitKiwiAmount}</p>
                <button type="button" onClick={() => setKiwiFruitAmount(fruitKiwiAmount + 1)}>+</button>
            </article>

            <button type="button" onClick={resetFruitCounter}>Reset</button>
        </section>
    </>)
}

export default App