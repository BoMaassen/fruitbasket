import './App.css'
import {useState} from "react";

function App() {
    const [fruitAardbeiAmount, setAardbeiFruitAmount] = useState(0);
    const [fruitBanaanAmount, setBanaanFruitAmount] = useState(0);
    const [fruitAppelAmount, setAppelFruitAmount] = useState(0);
    const [fruitKiwiAmount, setKiwiFruitAmount] = useState(0);

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        age: 0,
        zipCode: "",
        delivery: "",
        deliveryTime: "dayTime",
        comments: "",
        terms: false,
    });

    function handleChange(e){
       const changedField = e.target.name;
       const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value

            setFormState({
                ...formState,
                [changedField]: newValue,
            });
        }

    function resetFruitCounter() {
        return setAardbeiFruitAmount(0) + setBanaanFruitAmount(0) + setAppelFruitAmount(0) + setKiwiFruitAmount(0)
    }

    return (<>
        <section>
            <article className="fruit-container">
                <h2>🍓 Aardbeiden</h2>
                <button type="button"
                        onClick={() => setAardbeiFruitAmount(fruitAardbeiAmount ? fruitAardbeiAmount - 1 : 0)}>-
                </button>
                <p>{fruitAardbeiAmount}</p>
                <button type="button" onClick={() => setAardbeiFruitAmount(fruitAardbeiAmount + 1)}>+</button>
            </article>
            <article className="fruit-container">
                <h2> 🍌 Bananen</h2>
                <button type="button"
                        onClick={() => setBanaanFruitAmount(fruitBanaanAmount ? fruitBanaanAmount - 1 : 0)}>-
                </button>
                <p>{fruitBanaanAmount}</p>
                <button type="button" onClick={() => setBanaanFruitAmount(fruitBanaanAmount + 1)}>+</button>
            </article>
            <article className="fruit-container">
                <h2>🍏 Appels</h2>
                <button type="button"
                        onClick={() => setAppelFruitAmount(fruitAppelAmount ? fruitAppelAmount - 1 : 0)}>-
                </button>
                <p>{fruitAppelAmount}</p>
                <button type="button" onClick={() => setAppelFruitAmount(fruitAppelAmount + 1)}>+</button>
            </article>
            <article className="fruit-container">
                <h2>🥝 Kiwi&#39;s</h2>
                <button type="button" onClick={() => setKiwiFruitAmount(fruitKiwiAmount ? fruitKiwiAmount - 1 : 0)}>-
                </button>
                <p>{fruitKiwiAmount}</p>
                <button type="button" onClick={() => setKiwiFruitAmount(fruitKiwiAmount + 1)}>+</button>
            </article>
            <button type="button" onClick={resetFruitCounter}>Reset</button>
        </section>
        <section>
            <form className="form-container">
                <label htmlFor="firstNameField">Voornaam:
                    <input id="firstNameField" name="firstName" type="text" value={formState.firstName}
                           onChange={handleChange}/>
                </label>
                <label htmlFor="lastNameField">Achternaam:
                    <input id="lastNameField" name="lastName" type="text" value={formState.lastName}
                           onChange={handleChange}/>
                </label>
                <label htmlFor="ageField">Leeftijd:
                    <input id="ageField" name="age" type="number" value={formState.age}
                           onChange={handleChange}/>
                </label>
                <label htmlFor="zipCodeField">Postcode:
                    <input id="zipCodeField" name="zipCode" type="text" value={formState.zipCode}
                           onChange={handleChange}/>
                </label>
                <label htmlFor="delivery">Bezorgfrequentie
                    <select id="delivery" name="delivery" value={formState.delivery}
                            onChange={handleChange}>
                        <option value="weekly">iedere week</option>
                        <option value="two-weekly">om de week</option>
                        <option value="montly">iedere maand</option>
                    </select>
                </label>
                <label htmlFor="dayTime">
                    <input id="dayTime" name="deliveryTime" type="radio" checked={formState.deliveryTime === "dayTime"}
                           value="dayTime"
                           onChange={handleChange}/>
                    Overdag</label>

                <label htmlFor="evening">
                    <input id="evening" name="deliveryTime" type="radio" checked={formState.deliveryTime === "evening"}
                           value={formState.deliveryTime}
                           onChange={handleChange}/>
                    &#39;s Avonds
                </label>
                <label htmlFor="comments">Opmerking
                    <textarea id="comments" name="comments" value={formState.comments}
                              onChange={handleChange}></textarea>
                </label>
                <label htmlFor="terms">
                    <input id="terms" name="terms" type="checkbox" defaultChecked={formState.terms}
                           onChange={handleChange}/>
                    Ik ga akkoord met de voorwaarden
                </label>
                <button type="submit">Verzend</button>
            </form>
        </section>
    </>)
}

export default App