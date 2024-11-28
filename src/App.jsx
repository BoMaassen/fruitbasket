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
    const [zipCodeValue, setZipCodeValue] = useState("");
    const [delivery, setDelivery] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [comments, setComments] = useState("");
    const [terms, setTerms] = useState(false);

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
                <label htmlFor="firstNameField">Voornaam:
                    <input id="firstNameField" name="firstName" type="text" value={firstNameValue}
                           onChange={(e) => setFirstNameValue(e.target.value)}/>
                </label>
                <label htmlFor="lastNameField">Achternaam:
                    <input id="lastNameField" name="lastName" type="text" value={lastNameValue}
                           onChange={(e) => setLastNameValue(e.target.value)}/>
                </label>
                <label htmlFor="ageField">Leeftijd:
                    <input id="ageField" name="age" type="number" value={ageValue}
                           onChange={(e) => setAgeValue(parseInt(e.target.value))}/>
                </label>
                <label htmlFor="zipCodeField">Postcode:
                    <input id="zipCodeField" name="zipCode" type="text" value={zipCodeValue}
                           onChange={(e) => setZipCodeValue(e.target.value)}/>
                </label>
                <label htmlFor="delivery">Bezorgfrequentie
                    <select id="delivery" name="delivery" value={delivery}
                            onChange={(e) => setDelivery(e.target.value)}>
                        <option value="weekly">iedere week</option>
                        <option value="two-weekly">om de week</option>
                        <option value="montly">iedere maand</option>
                    </select>
                </label>
                <label htmlFor="dayTime">
                    <input id="dayTime" name="deliveryTime" type="radio" defaultChecked value={deliveryTime}
                           onClick={() => setDeliveryTime("dayTime")}/>
                    Overdag</label>
                <label htmlFor="evening">
                    <input id="evening" name="deliveryTime" type="radio" value={deliveryTime}
                           onClick={() => setDeliveryTime("evening")}/>
                    &#39;s Avonds</label>
                <label htmlFor="comments">Opmerking
                    <textarea id="comments" name="comments" value={comments}
                              onChange={(e) => setComments(e.target.value)}></textarea>
                </label>
                <label htmlFor="terms">
                    <input id="terms" name="terms" type="checkbox" checked={terms}
                           onClick={() => setTerms(!terms)}/>
                    Ik ga akkoord met de voorwaarden</label>
                <button type="submit">Verzend</button>
            </form>
        </section>
    </>)
}

export default App