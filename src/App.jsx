import './App.css'
import {useState} from "react";
import {useForm} from 'react-hook-form';
import Input from "./components/Input.jsx";
import Counter from "./components/Counter.jsx";
import Button from "./components/Button.jsx";

function App() {

    const [counterState, setCounterState] = useState({
        aardbeiAmount: 0,
        banaanAmount: 0,
        appelAmount: 0,
        kiwiAmount: 0,
    });

    function resetFruitCounter() {
        return setCounterState({
            aardbeiAmount: 0,
            banaanAmount: 0,
            appelAmount: 0,
            kiwiAmount: 0,
        })
    }

    function counterPlus(fruit) {

        setCounterState(prevState => ({
            ...prevState,
            [fruit]: prevState[fruit] + 1,
        }));
    }

    function counterMin(fruit) {
        setCounterState(prevState => ({
            ...prevState,
            [fruit]: prevState[fruit] > 0 ? prevState[fruit] - 1 : 0,
        }));
    }

    function handleFormSubmit(data) {
        console.log(data);
    }

    const {register, handleSubmit} = useForm({
        defaultValues: {
            "deliveryTime": "dayTime"
        }
    });

    return (<>
        <section className="section-container">
            <Counter counterTitle="🍓 Aardbeiden " fruitAmount={counterState.aardbeiAmount} counterMin={counterMin}
                     counterPlus={counterPlus} fruit="aardbeiAmount"/>
            <Counter counterTitle="🍌 Bananen " fruitAmount={counterState.banaanAmount} counterMin={counterMin}
                     counterPlus={counterPlus} fruit="banaanAmount"/>
            <Counter counterTitle="🍏 Appels " fruitAmount={counterState.appelAmount} counterMin={counterMin}
                     counterPlus={counterPlus} fruit="appelAmount"/>
            <Counter counterTitle="🥝 Kiwi&#39;s " fruitAmount={counterState.kiwiAmount} counterMin={counterMin}
                     counterPlus={counterPlus} fruit="kiwiAmount"/>
            <Button buttonType="button" buttonName="Reset" className="reset-button">
                {resetFruitCounter}
            </Button>
        </section>
        <section className="section-container">
            <form onSubmit={handleSubmit(handleFormSubmit)} className="form-container">
                <Input inputId="firstNameField" inputName="firstName" inputType="text" register={register}
                       inputLabel="Voornaam" className="input-text"/>
                <Input inputId="lastNameField" inputName="lastName" inputType="text" register={register}
                       inputLabel="Achternaam" className="input-text"/>
                <Input inputId="ageField" inputName="lastName" inputType="number" register={register}
                       inputLabel="Leeftijd" className="input-text"/>
                <Input inputId="zipCodeField" inputName="zipCode" inputType="text" register={register}
                       inputLabel="Postcode" className="input-text"/>
                <label className="delivery" htmlFor="delivery">Bezorgfrequentie
                    <select id="delivery" {...register("delivery")}>
                        <option value="weekly">Iedere week</option>
                        <option value="two-weekly">Om de week</option>
                        <option value="montly">Iedere maand</option>
                    </select>
                </label>
                <div className="delivery-time">
                    <Input inputId="deliveryTime" inputName="deliveryTime" inputType="radio" register={register}
                           inputLabel="Overdag" className="input-radio">
                    </Input>
                    <Input inputId="deliveryTime" inputName="deliveryTime" inputType="radio" register={register}
                           inputLabel="&#39;s Avonds" className="input-radio">
                    </Input>
                </div>
                <label className="comments" htmlFor="comments">Opmerking
                    <textarea id="comments" {...register("comments")} ></textarea>
                </label>
                <Input inputId="terms" inputName="terms" inputType="checkbox" register={register}
                       inputLabel="Ik ga akkoord met de voorwaarden" className="input-checkbox">
                </Input>
                <Button buttonType="submit" buttonName="Verzend" className="send-button"/>
            </form>
        </section>
    </>)
}

export default App