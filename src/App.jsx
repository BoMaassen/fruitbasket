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
        kiwiAmount:0,
    });

    function resetFruitCounter() {
        return setCounterState( {
            aardbeiAmount: 0,
            banaanAmount: 0,
            appelAmount: 0,
            kiwiAmount:0,
        })
    }
    function counterPlus(fruit){

        setCounterState(prevState => ({
            ...prevState,
            [fruit]:prevState[fruit] + 1,
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

    const { register, handleSubmit } = useForm({
        defaultValues: {
            "deliveryTime": "dayTime"
        }
    });

    return (<>
        <section>
            <Counter counterTitle="🍓 Aardbeiden" fruitAmount={counterState.aardbeiAmount} counterMin={counterMin} counterPlus ={counterPlus} fruit="aardbeiAmount" />
            <Counter counterTitle="🍌 Bananen"  fruitAmount={counterState.banaanAmount} counterMin={counterMin} counterPlus ={counterPlus} fruit="banaanAmount" />
            <Counter counterTitle="🍏 Appels"  fruitAmount={counterState.appelAmount} counterMin={counterMin} counterPlus ={counterPlus} fruit="appelAmount" />
            <Counter counterTitle="🥝 Kiwi&#39;s"  fruitAmount={counterState.kiwiAmount} counterMin={counterMin} counterPlus ={counterPlus} fruit="kiwiAmount" />
            <Button buttonType="button" buttonName="Reset" >
                {resetFruitCounter}
            </Button>
        </section>
        <section>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="form-container">
                <Input inputId="firstNameField" inputName="firstName" inputType="text" register={register}
                       inputLabel="Voornaam"/>
                <Input inputId="lastNameField" inputName="lastName" inputType="text" register={register}
                       inputLabel="Achternaam"/>
                <Input inputId="ageField" inputName="lastName" inputType="number" register={register} inputLabel="Leeftijd"/>
                <Input inputId="zipCodeField" inputName="zipCode" inputType="text" register={register} inputLabel="Postcode"/>

                <label htmlFor="delivery">Bezorgfrequentie
                    <select id="delivery" {...register("delivery")}>
                        <option value="weekly">iedere week</option>
                        <option value="two-weekly">om de week</option>
                        <option value="montly">iedere maand</option>
                    </select>
                </label>
                <Input inputId="deliveryTime" inputName="deliveryTime" inputType="radio" register={register}>
                    Overdag
                </Input>
                <Input inputId="deliveryTime" inputName="deliveryTime" inputType="radio" register={register}>
                    &#39;s Avonds
                </Input>
                <label htmlFor="comments">Opmerking
                    <textarea id="comments" {...register("comments")} ></textarea>
                </label>
                <Input inputId="terms" inputName="terms" inputType="checkbox" register={register} >
                    Ik ga akkoord met de voorwaarden
                </Input>
                <Button buttonType="submit" buttonName="Verzend"/>
            </form>
        </section>
    </>)
}

export default App