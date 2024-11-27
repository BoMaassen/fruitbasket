import './App.css'
import {useState} from "react";

function App() {
    let [fruitAardbeiAmount, setAardbeiFruitAmount] = useState(0);
    let [fruitBanaanAmount, setBanaanFruitAmount] = useState(0);
    let [fruitAppelAmount, setAppelFruitAmount] = useState(0);
    let [fruitKiwiAmount, setKiwiFruitAmount] = useState(0);

    function resetFruitCounter() {
        return setAardbeiFruitAmount(fruitAardbeiAmount = 0) + setBanaanFruitAmount(fruitBanaanAmount = 0)
            + setAppelFruitAmount(fruitAppelAmount = 0) + setKiwiFruitAmount(fruitKiwiAmount = 0)
    }

    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [ageValue, setAgeValue] = useState(0);
    const [zipCodeValue, setzipCodeValue] = useState("");
    const [delivery, setDelivery] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    console.log(delivery);

    return (<>
        <h1>Fruitmand bezorgservice</h1>
        <section>
            <article className="fruit-container">
                <h2>🍓 Aardbeiden</h2>
                <button type="button"
                        onClick={() => setAardbeiFruitAmount((prevCounter) => Math.max(prevCounter - 1, 0))}>-
                </button>
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
        <section>
            <form className="form-container">
                <label htmlFor="firstNameField">Voornaam:</label>
                <input id="firstNameField" name="firstName" type="text" value={firstNameValue}
                       onChange={(e) => setFirstNameValue(e.target.value)}/>
                <label htmlFor="lastNameField">Achternaam:</label>
                <input id="lastNameField" name="lastName" type="text" value={lastNameValue}
                       onChange={(e) => setLastNameValue(e.target.value)}/>
                <label htmlFor="ageField">Leeftijd:</label>
                <input id="ageField" name="age" type="number" value={ageValue}
                       onChange={(e) => setAgeValue(e.target.value)}/>
                <label htmlFor="zipCodeField">Postcode:</label>
                <input id="zipCodeField" name="zipCode" type="text" value={zipCodeValue}
                       onChange={(e) => setzipCodeValue(e.target.value)}/>
                <label htmlFor="delivery">Bezorgfrequentie</label>
                <select id="delivery" name="delivery" value={delivery} onChange={(e) => setDelivery(e.target.value)}>
                    <option value="weekly">iedere week</option>
                    <option value="two-weekly">om de week</option>
                    <option value="montly">iedere maand</option>
                </select>
                <input id="dayTime" name="deliveryTime" type="radio" checked value="dayTime" onChange={(e) => setDelivery(e.target.value)}/>
                <label htmlFor="dayTime">Overdag</label>
                <input id="evening" name="deliveryTime" type="radio" value="evening"  onChange={(e) => setDelivery(e.target.value)}  />
                <label htmlFor="evening">&#39;s Avonds</label>
                <button type="submit">Verzend</button>
            </form>
        </section>
    </>)
}

export default App