import './App.css'
import {useState} from "react";
import {useForm} from 'react-hook-form';

function App() {
    const [fruitAardbeiAmount, setAardbeiFruitAmount] = useState(0);
    const [fruitBanaanAmount, setBanaanFruitAmount] = useState(0);
    const [fruitAppelAmount, setAppelFruitAmount] = useState(0);
    const [fruitKiwiAmount, setKiwiFruitAmount] = useState(0);

    function resetFruitCounter() {
        return setAardbeiFruitAmount(0) + setBanaanFruitAmount(0) + setAppelFruitAmount(0) + setKiwiFruitAmount(0)
    }

    function handleFormSubmit(data) {
        console.log(data);
    }

    const { register, handleSubmit } = useForm({
    });

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
            <form onSubmit={handleSubmit(handleFormSubmit)} className="form-container">
                <label htmlFor="firstNameField">Voornaam:
                    <input id="firstNameField" {...register("firstName")} type="text" />
                </label>
                <label htmlFor="lastNameField">Achternaam:
                    <input id="lastNameField" {...register("lastName")} type="text" />
                </label>
                <label htmlFor="ageField">Leeftijd:
                    <input id="ageField" {...register("age")} type="number" />
                </label>
                <label htmlFor="zipCodeField">Postcode:
                    <input id="zipCodeField" {...register("zipCode")} type="text" />
                </label>
                <label htmlFor="delivery">Bezorgfrequentie
                    <select id="delivery" {...register("delivery")} >
                        <option value="weekly">iedere week</option>
                        <option value="two-weekly">om de week</option>
                        <option value="montly">iedere maand</option>
                    </select>
                </label>
                <label htmlFor="dayTime">
                    <input id="dayTime" {...register("deliveryTime")} type="radio" value="dayTime" defaultChecked={true}/>
                    Overdag</label>

                <label htmlFor="evening">
                    <input id="evening" {...register("deliveryTime")} type="radio" value="evening" />
                    &#39;s Avonds
                </label>
                <label htmlFor="comments">Opmerking
                    <textarea id="comments" {...register("comments")} ></textarea>
                </label>
                <label htmlFor="terms">
                    <input id="terms" {...register("terms")} type="checkbox"/>
                    Ik ga akkoord met de voorwaarden
                </label>
                <button type="submit">Verzend</button>
            </form>
        </section>
    </>)
}

export default App